import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import i18next from 'i18next';

export default function useLanguage() {
  const { i18n } = useTranslation();
  useEffect(() => {
    let language = localStorage.getItem('language');
    if (language && language !== i18n.language) {
      i18next.changeLanguage(language);
    } else {
      localStorage.setItem('language', i18n.language);
    }
  }, [i18n]);

  return {
    lang: i18n.language,
    changeLanguage: lang => {
      i18next.changeLanguage(lang);
      localStorage.setItem('language', lang);
    }
  }
}
