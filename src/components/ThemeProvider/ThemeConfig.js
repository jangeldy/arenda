export default function (isDark) {
  const primary = {
    main: isDark ? '#e4e4e4' : '#444444',
  };

  return {
    isDark: isDark,
    palette: {
      type: isDark ? 'dark' : 'light',
      primary: primary,
      secondary: { main: '#00a194' },
      background: {
        default: isDark ? '#191919' : '#FAFAFA',
        paper: isDark ? '#333333' : '#FFFFFF',
      },
    },
    typography: { fontFamily: "'Raleway', sans-serif", htmlFontSize: 18 },
    shape: { borderRadius: 8 },
    props: {
      MuiButton: { disableFocusRipple: true },
      MuiButtonGroup: { disableElevation: true },
      MuiCard: { variant: 'outlined' },
      MuiAppBar: {
        position: 'static',
        color: 'default',
        elevation: 1,
      },
      MuiOutlinedInput: {
        margin: 'dense',
      },
      MuiTextField: {
        variant: 'outlined',
        size: 'small',
      },
    },
    overrides: {
      MuiMenuItem: {
        root: { fontSize: '15px' },
      },
      MuiPopover: {
        paper: {
          border: '0.5px solid rgba(118, 118, 118, 0.28)',
          boxShadow: 'rgba(0, 0, 0, 0.15) 0px 10px 37px',
        },
      },
      MuiPaper: {
        root: {
          color: isDark ? '#fff' : '#000',
        },
      },
      MuiToggleButton: {
        root: {
          width: '100%',
          fontWeight: 600,
          textTransform: 'inherit',
          border: `1px solid rgba(${isDark ? '255, 255, 255,' : '0, 0, 0,'} 0.3)`,
          color: isDark ? '#ffffff' : '#000000',
          '&$selected': {
            backgroundColor: primary.main,
            color: isDark ? '#000000' : '#ffffff',
            '&:hover': {
              backgroundColor: primary.main,
            },
          },
          padding: '5px 20px',
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
          fontWeight: 600,
          padding: '6px 20px',
          textTransform: 'inherit',
          whiteSpace: 'nowrap',
        },
        outlined: {
          border: `1px solid rgba(${isDark ? '255, 255, 255,' : '0, 0, 0,'} 0.3)`,
          padding: '5px 20px',
        },
        outlinedSizeLarge: {
          paddingTop: 6,
          paddingBottom: 6,
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
        notchedOutline: {
          borderColor: `rgba(${isDark ? '255, 255, 255,' : '0, 0, 0,'} 0.3)`,
        },
        inputMarginDense: {
          height: 'inherit',
          fontSize: '14px',
        },
      },
      MuiInputBase: {
        input: {
          color: isDark ? '#fff' : '#000',
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
