import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

let language = 'ru';
if (window.localStorage.getItem('language')) {
  language = window.localStorage.getItem('language');
}
i18next.use(initReactI18next).init({ resources: {
    ru: {
      translation: {
        rentType_hour: 'за час',
        rentType_day: 'за сутки',
        rentType_month: 'за месяц',

        roomType_short_0: 'Комната',
        roomType_short_1: '1 комн.',
        roomType_short_2: '2 комн.',
        roomType_short_3: '3 комн.',
        roomType_short_4: '4+ комн.',
      }
    },
    kk: {
      translation: {
        rentType_hour: 'сағатына',
        rentType_day: 'күніне',
        rentType_month: 'айына',

        roomType_short_0: 'Бөлме',
        roomType_short_1: '1 бөлме',
        roomType_short_2: '2 бөлме',
        roomType_short_3: '3 бөлме',
        roomType_short_4: '4+ бөлме',
      }
    }
  }, lng: language });

export const addTranslation = (translations) => {
  for (const lang of Object.keys(translations)) {
    i18next.addResources(lang, 'translation', translations[lang]);
  }
};
