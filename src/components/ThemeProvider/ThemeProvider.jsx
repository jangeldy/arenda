import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { ThemeWrapper } from './ThemeStyle';
import { themeModule, createTheme } from './ThemeDucks';

export default function ThemeProvider({ children }) {
  const theme = useSelector((state) => state[themeModule]);
  const dispatch = useDispatch();

  useEffect(() => {
    const themeType = window.localStorage.getItem('themeType');
    dispatch(createTheme(themeType === 'dark'));
  }, [dispatch]);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeWrapper>{children}</ThemeWrapper>
    </MuiThemeProvider>
  );
}
