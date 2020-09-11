export default function (isDark) {
  const primary = {
    main: isDark ? '#e4e4e4' : '#444444',
  };

  return {
    isDark: isDark,
    palette: {
      type: isDark ? 'dark' : 'light',
      primary: primary,
      divider: 'rgba(0,0,0,0.3)',
    },
    typography: { fontFamily: "'Raleway', sans-serif" },
    shape: { borderRadius: 8 },
    props: {
      MuiButtonGroup: { disableElevation: true },
      MuiCheckbox: { size: 'small' },
      MuiCard: { variant: 'outlined' },
      MuiAppBar: {
        position: 'static',
        color: 'default',
        elevation: 1,
      },
      MuiTextField: {
        variant: 'outlined',
        size: 'small',
      },
      MuiToggleButtonGroup: {
        size: 'small',
      },
    },
    overrides: {
      MuiToggleButton: {
        root: {
          width: '100%',
          border: `1px solid rgba(${isDark ? '255, 255, 255,' : '0, 0, 0,'} 0.3)`,
          color: isDark ? '#ffffff' : '#000000',
          '&$selected': {
            backgroundColor: primary.main,
            color: isDark ? '#000000' : '#ffffff',
            '&:hover': {
              backgroundColor: primary.main,
            },
          },
        },
      },
      MuiPagination: { ul: { justifyContent: 'center' } },
      MuiPaginationItem: {
        root: {
          fontFamily: "'Maven Pro', sans-serif",
          fontWeight: 'bold',
        },
      },
      MuiAppBar: {
        root: {
          boxShadow: 'rgba(0, 0, 0, 0.18) 0px 1px 2px !important',
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
      MuiToolbar: {
        root: {
          justifyContent: 'center',
        },
      },
      MuiButton: {
        root: {
          padding: '6px 26px',
          textTransform: 'inherit',
        },
        outlined: {
          padding: '5px 26px',
        },
        contained: {
          backgroundColor: isDark ? '#808080' : '#ffffff',
        },
        textSizeSmall: {
          padding: '4px 14px',
        },
      },
      MuiButtonBase: {
        root: {
          margin: null,
        },
      },
      MuiOutlinedInput: {
        inputMarginDense: {
          height: 'inherit',
          fontSize: '14px',
        },
      },
      MuiTypography: {
        overline: {
          fontSize: '11px',
        },
      },
      MuiAccordion: {
        root: {
          borderTop: `1px solid ${isDark ? '#ffffff' : '#000000'}24`,
          '&$expanded': {
            margin: 0,
          },
          '&::before': {
            display: 'none',
          },
        },
      },
      MuiAccordionDetails: {
        root: {
          display: 'block',
          paddingTop: 0,
        },
      },
      MuiAccordionSummary: {
        root: {
          minHeight: 40,
          '&$expanded': {
            minHeight: '40px !important',
          },
        },
        content: {
          margin: 0,
          '&$expanded': {
            margin: '0 !important',
          },
        },
        expandIcon: {
          padding: 8,
        },
      },
    },
  };
}
