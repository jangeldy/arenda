import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';

export const getTheme = () => {
  let themeType = 'light';
  if (String(window.localStorage.getItem('themeType')) === 'dark') {
    themeType = 'dark';
    window.localStorage.setItem('themeType', 'dark');
  } else {
    window.localStorage.setItem('themeType', themeType);
  }
  let isDark = themeType === 'dark';
  return {
    isDark: isDark,
    palette: {
      type: themeType,
      primary: { main: '#5682A3' },
      secondary: { main: '#e2726f' },
      background: {
        paper: isDark ? '#252525' : '#fff',
        default: isDark ? '#333333' : '#E1E1E1'
      },
      border: {
        default: isDark ? '#444446' : '#cecfd2'
      },
      text: {
        disabled: isDark ? 'rgba(255, 255, 255, 0.50)' : 'rgba(0, 0, 0, 0.50)',
        primary: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.87)',
        secondary: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.54)'
      }
    },
    typography: {
      useNextVariants: true,
      fontFamily: 'Lato,Helvetica Neue,Arial,Helvetica,sans-serif',
      fontSize: 13
    },
    props: {
      MuiOutlinedInput: { margin: 'none' },
      MuiInputLabel: { margin: 'none' },
      MuiFilledInput: { margin: 'none' },
      MuiFormControl: { margin: 'none', variant: 'outlined' },
      MuiIconButton: { size: 'small' },
      MuiInputBase: { margin: 'none', variant: 'outlined' },
      MuiExpansionPanel: { elevation: 0 },
      MuiDrawer: { style: { zIndex: 1000 } },
      MuiListItem: { dense: true },
      MuiFab: { size: 'small' },
      MuiTable: { size: 'small' },
      MuiTableCell: { style: { fontSize: 14 } },
      MuiSelect: {
        SelectDisplayProps: {
          style: {
            paddingBottom: 8,
            paddingTop: 8
          }
        }
      },
      MuiTextField: {
        margin: 'none',
        variant: 'outlined',
        fullWidth: true,
        autoComplete: 'off'
      }
    },
    overrides: {
      MuiIconButton: {
        sizeSmall: {
          marginLeft: 2,
          marginRight: 2,
          padding: 4
        }
      },
      MuiExpansionPanel: {
        root: {
          backgroundColor: 'transparent'
        }
      },
      MuiExpansionPanelSummary: {
        root: {
          minHeight: '40px !important',
          padding: '0 16px'
        },
        content: {
          margin: '12px 0 !important'
        }
      },
      MuiExpansionPanelDetails: {
        root: {
          padding: '0 16px 14px',
          display: 'block'
        }
      },
      MuiFormHelperText: {
        contained: {
          marginRight: 0,
          marginLeft: 0,
          marginBottom: 0,
          marginTop: 2,
          lineHeight: 1
        }
      },
      MuiInputBase: {
        root: {
          height: 'inherit',
          '&$disabled': {
            background: 'rgba(125,125,125,0.1)'
          },
          '&$disabled .MuiOutlinedInput-notchedOutline': {
            border: 'none'
          }
        },
        input: {
          paddingBottom: '8px !important',
          paddingTop: '8px !important',
          height: 'inherit'
        }
      },
      MuiAutocomplete: {
        inputRoot: {
          padding: '0 !important',
          paddingRight: '8px !important'
        },
        input: {
          height: 'inherit',
          padding: '8px 14px !important'
        },
        paper: {
          boxShadow:
            '0 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)'
        },
        popper: {
          minWidth: 250
        },
        listbox: {
          minWidth: 250,
          '&::-webkit-scrollbar-track': {
            background: 'transparent'
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(140, 140, 140, 0.2)'
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'rgba(140, 140, 140, 0.4)'
          },
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          }
        }
      },
      MuiOutlinedInput: {
        adornedEnd: {
          paddingRight: '3px'
        },
        adornedStart: {
          paddingLeft: '8px'
        },
        input: {
          paddingBottom: 8,
          paddingTop: 8,
          height: 'inherit'
        },
        multiline: {
          padding: '0px 14px'
        }
      },
      MuiMenu: {
        paper: {
          '&::-webkit-scrollbar-track': {
            background: 'transparent'
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(140, 140, 140, 0.2)'
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'rgba(140, 140, 140, 0.4)'
          },
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          }
        }
      },
      MuiMenuItem: {
        root: {
          whiteSpace: 'inherit !important'
        }
      },
      MuiList: {
        padding: {
          paddingRight: '0 !important'
        }
      },
      MuiTextField: {
        root: {
          marginTop: 2,
          marginBottom: 2
        }
      },
      MuiFormControl: {
        root: {
          marginTop: 2,
          marginBottom: 2
        }
      },
      MuiInputAdornment: {
        positionEnd: {
          marginLeft: 0
        }
      }
    }
  };
};
export const theme = createMuiTheme(getTheme());

export const Color = {
  isDark: theme.isDark,
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
  textPrimary: theme.palette.text.primary,
  textSecondary: theme.palette.text.secondary,
  textSuccess: '#559754',
  bgColorSuccess: '#559754',

  bgColor: theme.palette.background.default,
  bgColorPaper: theme.palette.background.paper,
  border: theme.palette.border.default,
  borderRadius: '4px',
  headerHeight: window.globalMessage ? 100 : 64
};

export const ThemeWrapper = styled.main`
  background-color: ${Color.bgColor};
  color: ${Color.textPrimary};

  .text-primary {
    color: ${Color.textPrimary};
  }
  .text-secondary {
    color: ${Color.textSecondary};
  }
  .color-primary {
    color: ${Color.primary};
  }
  .color-secondary {
    color: ${Color.secondary};
  }
  .text-success {
    color: ${Color.textSuccess};
  }
  .bg-color {
    background-color: ${Color.bgColor};
  }
  .bg-primary {
    background-color: ${Color.primary};
  }
  .bg-secondary {
    background-color: ${Color.secondary};
  }
  .border-primary {
    border: 1px solid ${Color.primary};
  }
  .border-secondary {
    border: 1px solid ${Color.secondary};
  }
  .border {
    border: 1px solid ${Color.border};
  }
  .border-top {
    border-top: 1px solid ${Color.border};
  }
  .border-radius {
    border-radius: ${Color.borderRadius};
  }
  .card {
    border-radius: ${Color.borderRadius};
    border: 1px solid ${Color.border};
  }
`;

export const Content = styled.main`
  flex-grow: 1;
  padding: 9px 40px 40px;
  min-height: calc(100vh - ${Color.headerHeight}px);
`;
