import { atom } from 'recoil';
import ThemeConfig from './ThemeConfig';

export const themeState = atom({
  key: 'themeState',
  default: '',
});

export const createTheme = (themeType) => {
  if (!themeType) {
    themeType = window.localStorage.getItem('themeType');
  } else {
    window.localStorage.setItem('themeType', themeType);
  }
  return ThemeConfig(themeType === 'dark');
};
