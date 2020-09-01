export default function (isDark) {
  return {
    isDark: isDark,
    palette: {
      type: isDark ? 'dark' : 'light',
      primary: { main: '#5682A3' },
      secondary: { main: '#e2726f' },
      background: {
        paper: isDark ? '#252525' : '#fff',
        default: isDark ? '#333333' : '#E1E1E1',
      },
      text: {
        disabled: isDark ? 'rgba(255, 255, 255, 0.50)' : 'rgba(0, 0, 0, 0.50)',
        primary: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.87)',
        secondary: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.54)',
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
          textTransform: 'inherit',
        },
      },
      MuiButtonBase: {
        root: {
          margin: null,
        },
      },
    },
  };
}
