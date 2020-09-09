export default function (isDark) {
  const primary = {
    main: '#3d8d91',
  };

  return {
    isDark: isDark,
    palette: {
      type: isDark ? 'dark' : 'light',
      primary: primary,
      background: {
        paper: isDark ? '#424242' : '#fff',
        default: isDark ? '#303030' : '#EEEEEE',
      },
    },
    typography: {
      fontFamily: "'Raleway', sans-serif",
    },
    shape: {
      borderRadius: 10,
    },
    props: {
      MuiButtonGroup: {
        disableElevation: true,
      },
      MuiCheckbox: {
        size: 'small',
      },
      MuiCard: {
        variant: 'outlined',
      },
      MuiAppBar: {
        position: 'static',
        color: 'default',
        elevation: 1,
      },
      MuiTextField: {
        variant: 'outlined',
        size: 'small',
      },
    },
    overrides: {
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
