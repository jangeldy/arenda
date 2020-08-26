/**
 * Перебор массива в дерево
 * @param data - данные
 * @param addWithoutParent - если не нашел родителя true -> добавить на первый уровень, false -> не добавляет
 * @return array
 */

import * as Dict from '../../../../utils/Dict';

export function arrayToTree(data, value, addWithoutParent, allOptionsLoaded) {
  let tree = [];
  let expandKeys = [];

  if (value) {
    const setExpander = code => {
      let item = data.find(item => item.code === code);
      if (item) {
        expandKeys.push(item.code);
        if (item.parent_code) {
          setExpander(item.parent_code);
        }
      }
    };
    setExpander(value);
  }

  try {
    if (data instanceof Array && data.length > 0) {
      let residue = data.filter(item => {
        let option = { ...item };
        if (expandKeys.includes(option.code)) {
          option.expanded = true;
        }
        if (allOptionsLoaded) {
          option.childItems = [];
        }
        if (!option.hasOwnProperty('parent_code')) {
          tree.push(option);
          return false;
        } else {
          let added = addChild(tree, option);
          return !added;
        }
      });

      if (addWithoutParent && residue.length > 0) {
        for (let item of residue) {
          let option = { ...item };
          if (expandKeys.includes(option.code)) {
            option.expanded = true;
          }
          if (allOptionsLoaded) {
            option.childItems = [];
          }
          let added = addChild(tree, option);
          if (!added) {
            tree.push(option);
          }
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
  return tree;
}

export function getChildrenByCode(tree, code) {
  let item = treeFind(tree, item => item.code === code);
  if (item) {
    if (item.childItems && item.childItems.length > 0) {
      return item.childItems;
    } else {
      return [{ ...item }];
    }
  } else {
    return [];
  }
}

/**
 * Добавление дочки в дерево
 * @param tree - данные
 * @param child - добавляемый элемент
 * @return boolean
 */
export function addChild(tree, child) {
  let added = false;
  try {
    if (tree && tree instanceof Array) {
      for (let item of tree) {
        if (item.code === child.parent_code) {
          if (item.hasOwnProperty('childItems')) {
            item.childItems.push(child);
          } else {
            item.childItems = [child];
          }
          added = true;
        } else if (item.childItems && item.childItems.length > 0) {
          added = addChild(item.childItems, child);
        }
        if (added) break;
      }
    }
  } catch (error) {
    console.error(error);
  }
  return added;
}

/**
 * Добавление дочек в дерево
 * @param tree - данные
 * @param parentCode - код родителя
 * @param children - добавляемые элементы
 * @return boolean
 */
export function addChildren(tree, parentCode, children) {
  let added = false;
  try {
    if (tree && tree instanceof Array) {
      if (children && children instanceof Array) {
        for (let item of tree) {
          if (item.code === parentCode) {
            if (item.hasOwnProperty('childItems')) {
              item.childItems = [...item.childItems, ...children];
            } else {
              item.childItems = children;
            }
            added = true;
          } else if (item.childItems && item.childItems.length > 0) {
            added = addChildren(item.childItems, parentCode, children);
          }
          if (added) break;
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
  return added;
}

/**
 * Маппинг по дереву
 * @param tree
 * @return Array массив, разложенное дерево в один уровень
 */
export function treeToList(tree = []) {
  let result = [];
  try {
    const caller = (cTree, level) => {
      for (const item of cTree) {
        result.push({ ...item, level });
        if (item.hasOwnProperty('childItems') && item.expanded) {
          caller(item.childItems, level + 1);
        }
      }
    };

    caller([...tree], 1);
  } catch (error) {
    console.error(error);
  }
  return result;
}

/**
 * Маппинг по дереву
 * @param tree
 * @param callback
 * @return Array, дерево
 */
export function treeMap(tree = [], callback) {
  let result = [];
  try {
    const caller = (cTree, level) => {
      let cResult = [];
      for (const item of cTree) {
        let callbackResult = callback(item, level);
        if (callbackResult !== undefined) {
          if (item.hasOwnProperty('childItems') && item.expanded) {
            callbackResult.childItems = caller(item.childItems, level + 1);
          }
          cResult.push(callbackResult);
        }
      }
      return cResult;
    };

    result = caller([...tree], 1);
  } catch (error) {
    console.error(error);
  }
  return result;
}

/**
 * Поиск по дереву
 * @param tree
 * @param callback
 * @return Object, элемент дерево
 */
export function treeFind(tree = [], callback) {
  try {
    const caller = (cTree, level) => {
      for (const item of cTree) {
        let founded = callback(item, level);
        if (founded) {
          return item;
        } else if (item.hasOwnProperty('childItems')) {
          founded = caller(item.childItems, level + 1);
          if (founded) {
            return founded;
          }
        }
      }
    };

    return caller([...tree], 1);
  } catch (error) {
    console.error(error);
  }
}

export async function loadTree(lookupId, code, filterCode) {
  let result = [];
  if (code) {
    result = await loadTreeByCode(lookupId, code, filterCode);
  } else {
    if (filterCode) {
      let filter = `{"name":"parent_code","operation":"EQ","value":"${filterCode}"}`;
      result = await Dict.items(lookupId, filter);

      if (result.length === 0) {
        let item = await Dict.item(lookupId, filterCode);
        if (item) result = [item];
      }
    } else {
      let filter = `{"name":"parent_code","operation":"EMPTY"}`;
      result = await Dict.items(lookupId, `?filter=[${filter}]`);
    }
  }
  return result;
}

/**
 * Загрузка узла дерево
 * @param lookupId - код справочника
 * @param code - код
 * @param filterCode
 * @param children
 * @return {Promise<*|[]>}
 */
export async function loadTreeByCode(lookupId, code, filterCode, children = []) {
  let item = await Dict.item(lookupId, code);
  let filter = item.parent_code
    ? `{"name":"parent_code","operation":"EQ","value":"${item.parent_code}"}`
    : `{"name":"parent_code","operation":"EMPTY"}`;
  let level = await Dict.items(lookupId, `?filter=[${filter}]`);
  for (let levelItem of level) {
    if (levelItem.code === item.code) {
      if (children.length !== 0) {
        levelItem.expanded = true;
      }
      break;
    }
  }

  if (children.length > 0) {
    addChildren(level, code, children);
  }

  if (item.parent_code && item.parent_code !== filterCode) {
    return await loadTreeByCode(lookupId, item.parent_code, filterCode, level);
  } else {
    if (filterCode && item.parent_code !== filterCode) {
      return [];
    }
    return level;
  }
}

/**
 * Загрузка дочернего уровня
 * @param lookupId - код справочника
 * @param code
 * @return {Promise<Array|*>}
 */
export async function loadChildLevel(lookupId, code) {
  try {
    let filter = `?filter=[{"name":"parent_code","operation":"EQ","value":"${code}"}]`;
    return await Dict.items(lookupId, filter);
  } catch (e) {
    return [];
  }
}
