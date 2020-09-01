import localforage from 'localforage';
import axios from 'axios';
import moment from 'moment';
import Notice from './Notice';

const baseDdmUrl = 'api:services/nedb-ddm/api/v1/domainsets';
export const dictionaryData = localforage.createInstance({
  name: 'dictionaryData'
});
export const dictionaryVersions = localforage.createInstance({
  name: 'dictionaryVersions'
});

/**
 * Все элементы одного справочника
 * @param lookupId - код справочника
 * @param itemCode - код элемента справочника
 * @returns {Array}
 */
export async function item(lookupId, itemCode) {
  let result = {};
  let key = `dict_${lookupId}_${itemCode}`;
  let urlDict = `${baseDdmUrl}/${lookupId}/items/${itemCode}`;
  let dict = await dictionaryData.getItem(key);

  try {
    if (dict === null) {
      await requestVersion(lookupId, key);
      result = await requestDict(key, urlDict, result, true);
    } else {
      let timeUp = await timeIsUp(lookupId, key);
      if (timeUp) {
        result = await requestDict(key, urlDict, result, true);
      } else {
        result = dict;
      }
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      await dictionaryData.setItem(key, result);
    } else {
      if (dict) return dict;
      if (!window.navigator.onLine) {
        Notice.error(`Не удалось загрузить справочник с кодом ${lookupId}`);
      }
    }
  }
  if (window.test) {
    return {
      ...result,
      ru_name: `${result.ru_name} [${result.code}]`,
      kk_name: `${result.kk_name} [${result.code}]`
    };
  } else {
    return result;
  }
}

/**
 * Все элементы одного справочника
 * @param lookupId - код справочника
 * @param filter - параметры фильтра
 * @param dictTitle - наименование справочника
 * @returns {Array}
 */
export async function items(lookupId, filter = '', dictTitle = '') {
  let result = [];
  let key = `dict_${lookupId}${filter ? '_' : ''}${filter}`;
  let urlDict = `${baseDdmUrl}/${lookupId}/items${filter}`;
  let dict = await dictionaryData.getItem(key);

  try {
    if (dict === null) {
      await requestVersion(lookupId, key);
      result = await requestDict(key, urlDict, result);
    } else {
      let timeUp = await timeIsUp(lookupId, key);
      if (timeUp) {
        result = await requestDict(key, urlDict, result);
      } else {
        result = dict;
      }
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      await dictionaryData.setItem(key, result);
    } else {
      if (dict) return dict;
      if (!window.navigator.onLine) {
        Notice.error(`Не удалось загрузить справочник ${dictTitle} с кодом ${lookupId}`);
      }
    }
  }

  return window.test
    ? result.map(item => ({
        ...item,
        ru_name: `${item.ru_name} [${item.code}]`,
        kk_name: `${item.kk_name} [${item.code}]`
      }))
    : result;
}

async function itemsObject(lookupId, filter = '', dictTitle = '') {
  let result = {};
  let dict = await items(lookupId, filter, dictTitle);
  for (const item of dict) {
    result[item.code] = item;
  }
  return result
}

async function requestVersion(lookupId, key) {
  let response = await axios.get(`${baseDdmUrl}/${lookupId}`);
  if (response.data && response.data.status === 'SUCCESS') {
    await dictionaryVersions.setItem(key, {
      version: response.data.result.version,
      lastUpdated: response.data.result.lastUpdated,
      lastRequest: moment().format('DD.MM.YYYY HH:mm')
    });
    return response.data.result;
  }
  return {};
}

async function requestDict(key, urlDict, result, isItem) {
  let response = await axios.get(urlDict);
  if (response.data && response.data.status === 'SUCCESS') {
    if (isItem) {
      let item = response.data.result;
      let newItem = {
        code: item.code,
        kk_name: item.kk_name,
        ru_name: item.ru_name,
        version: item.version
      };
      if (item.parent_code) newItem.parent_code = item.parent_code;
      if (item.toDate) newItem.toDate = item.toDate;
      await dictionaryData.setItem(key, newItem);
      return newItem;
    } else {
      let dict = response.data.result.map(item => {
        let newItem = {
          code: item.code,
          kk_name: item.kk_name,
          ru_name: item.ru_name,
          version: item.version
        };
        if (item.parent_code) newItem.parent_code = item.parent_code;
        return newItem;
      });
      await dictionaryData.setItem(key, dict);
      return dict;
    }
  }
  return result;
}

async function timeIsUp(lookupId, key) {
  let version = await dictionaryVersions.getItem(key);
  if (version) {
    let lastRequest = moment(version.lastRequest, 'DD.MM.YYYY HH:mm');
    let timeUp = lastRequest.add(2, 'h').isBefore(moment());

    if (timeUp) {
      let sVersion = await requestVersion(lookupId, key);
      return (
        version.version !== sVersion.version ||
        version.lastUpdated !== sVersion.lastUpdated
      );
    } else {
      return false;
    }
  }
  return true;
}

export default {
  items: items,
  itemsObject: itemsObject,
  item: item
};
