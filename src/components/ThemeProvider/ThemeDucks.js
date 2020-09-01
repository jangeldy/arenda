import { createReducer } from '@reduxjs/toolkit';
import ThemeConfig from './ThemeConfig';

export const themeModule = 'theme';
const SET_THEME = `${themeModule}/SET_THEME`;
const initialState = {};

export default createReducer(initialState, {
  [SET_THEME]: (state, { payload }) => {
    return { ...state, ...payload };
  },
});

export const createTheme = (isDark) => {
  window.localStorage.setItem('themeType', isDark ? 'dark' : 'light');
  return {
    type: SET_THEME,
    payload: ThemeConfig(isDark),
  };
};
