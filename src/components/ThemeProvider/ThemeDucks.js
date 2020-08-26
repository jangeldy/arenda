import { createReducer } from '@reduxjs/toolkit';
import { createMuiTheme } from '@material-ui/core/styles';

export const themeModule = 'theme';

const SET_THEME = `${themeModule}/SET_THEME`;
const initialState = {};

export default createReducer(initialState, {
  [SET_THEME]: (state, { payload }) => {
    state = payload;
  },
});

export const createTheme = (isDark) => {
  window.localStorage.setItem('themeType', isDark ? 'dark' : 'light');
  return {
    type: SET_THEME,
    payload: createMuiTheme({
      isDark: isDark,
      palette: {
        type: isDark ? 'dark' : 'light',
        primary: { main: '#5682A3' },
        secondary: { main: '#e2726f' },
        background: {
          paper: isDark ? '#252525' : '#fff',
          default: isDark ? '#333333' : '#E1E1E1',
        },
        border: {
          default: isDark ? '#444446' : '#cecfd2',
        },
        text: {
          disabled: isDark ? 'rgba(255, 255, 255, 0.50)' : 'rgba(0, 0, 0, 0.50)',
          primary: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.87)',
          secondary: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.54)',
        },
      },
    }),
  };
};
