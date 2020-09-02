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
    props: {
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
    },
    overrides: {
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
        input: {
          paddingBottom: 8,
          paddingTop: 8,
          height: 'inherit',
          fontSize: '14px',
        },
      },
      MuiTypography: {
        overline: {
          fontSize: '11px',
        },
      },
      MuiAccordionSummary: {
        root: {
          minHeight: 40,
          '&$expanded': {
            minHeight: '40px !important',
          }
        },
        content: {
          margin: 0,
          '&$expanded': {
            margin: '0 !important',
          }
        },
        expandIcon: {
          padding: 8,
        },
      },
    },
  };
}
