import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { ThemeWrapper, theme } from './ThemeStyle';

export default function ThemeProvider({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeWrapper>{children}</ThemeWrapper>
    </MuiThemeProvider>
  );
}
