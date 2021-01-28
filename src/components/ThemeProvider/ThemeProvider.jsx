import React, { useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { ThemeWrapper } from './ThemeStyle';
import { themeState, createTheme } from './ThemeState';
import { createMuiTheme } from '@material-ui/core/styles';
import { useRecoilState } from 'recoil';
import { ThemeProvider as StyledProvider } from 'styled-components';

export default function ThemeProvider({ children }) {
  const [config, setConfig] = useRecoilState(themeState);
  const theme = createMuiTheme(config);

  useEffect(() => {
    const themeType = window.localStorage.getItem('themeType');
    setConfig(createTheme(themeType === 'dark'));
  }, [setConfig]);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeWrapper theme={theme}>
        <StyledProvider theme={theme}>{children}</StyledProvider>
      </ThemeWrapper>
    </MuiThemeProvider>
  );
}
