export default function (isDark) {
  const primary = { main: '#008c81', dark: '#00877a' };

  return {
    isDark: isDark,
    palette: {
      type: isDark ? 'dark' : 'light',
      primary: primary,
      background: {
        default: isDark ? '#191919' : '#F1F1F1',
      },
      divider: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.18)'
    },
    typography: {
      fontFamily:
        "'Circular', -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif",
      htmlFontSize: 17,
    },
    props: {
      MuiButton: { disableFocusRipple: true },
      MuiButtonGroup: { disableElevation: true },
      MuiCard: { variant: 'outlined' },
      MuiTextField: {
        variant: 'outlined',
        size: 'small',
      },
    },
    overrides: {
      MuiToolbar: {
        root: {
          justifyContent: 'center',
        },
      },
      MuiAppBar: {
        root: {
          backgroundColor: isDark ? '#262626' : '#ffffff',
        },
      },
      MuiPagination: { ul: { justifyContent: 'center' } },
      MuiPaginationItem: {
        root: {
          fontFamily: "'Maven Pro', sans-serif",
          fontWeight: 'bold',
        },
      },
      MuiButtonBase: {
        root: {
          margin: undefined,
        },
      },
      MuiMenuItem: {
        root: { fontSize: '15px', height: 42 },
      },
      MuiPopover: {
        paper: {
          border: '0.5px solid rgba(118, 118, 118, 0.28)',
          boxShadow: 'rgba(0, 0, 0, 0.15) 0px 10px 37px',
        },
      },
      MuiFormControlLabel: {
        root: {
          marginRight: 0,
        },
      },
      MuiCheckbox: {
        root: {
          padding: 0,
          marginRight: 7,
          marginLeft: 9,
        },
      },
      MuiToggleButton: {
        root: {
          width: '100%',
          textTransform: 'inherit',
          border: `1px solid rgba(${isDark ? '255, 255, 255,' : '0, 0, 0,'} 0.3)`,
          color: isDark ? '#ffffff' : '#000000',
          '&$selected': {
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
            fontWeight: 600,
            color: isDark ? '#ffffff' : '#000000',
            '&:hover': {
              // backgroundColor: primary.main,
            },
          },
          padding: '5px 20px',
        },
      },
    },
  };
}
