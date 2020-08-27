import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { ThemeWrapper } from './ThemeStyle';
import { themeModule, createTheme } from './ThemeDucks';
import { createMuiTheme } from '@material-ui/core/styles';

export default function ThemeProvider({ children }) {
  const themeConfig = useSelector((state) => state[themeModule]);
  const theme = createMuiTheme(themeConfig);
  const dispatch = useDispatch();

  useEffect(() => {
    const themeType = window.localStorage.getItem('themeType');
    dispatch(createTheme(themeType === 'dark'));
  }, [dispatch]);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeWrapper theme={theme}>{children}</ThemeWrapper>
    </MuiThemeProvider>
  );
}
