import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

let language = 'ru';
if (window.localStorage.getItem('language')) {
  language = window.localStorage.getItem('language');
}
i18next.use(initReactI18next).init({ resources: {}, lng: language });

export const addTranslation = (translations) => {
  for (const lang of Object.keys(translations)) {
    i18next.addResources(lang, 'translation', translations[lang]);
  }
};
