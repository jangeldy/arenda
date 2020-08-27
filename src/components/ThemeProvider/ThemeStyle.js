import styled from 'styled-components';

export const Color = {
/*  isDark: theme.isDark,
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
  headerHeight: window.globalMessage ? 100 : 64*/
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
