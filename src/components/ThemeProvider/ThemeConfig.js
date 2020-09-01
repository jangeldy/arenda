export default function (isDark) {
  return {
    isDark: isDark,
    palette: {
      type: isDark ? 'dark' : 'light',
      primary: { main: '#18a24b' },
      background: {
        paper: isDark ? '#424242' : '#fff',
        default: isDark ? '#303030' : '#EEEEEE',
      },
    },
    props: {
      MuiCard: {
        variant: 'outlined'
      },
      MuiAppBar: {
        position: 'static',
        color: 'default',
        elevation: 1,
      },
    },
    overrides: {
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
        }
      },
      MuiButtonBase: {
        root: {
          margin: null,
        },
      },
    },
  };
}
