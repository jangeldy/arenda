import styled from 'styled-components';

export const ThemeWrapper = styled.main`
  background-color: ${(props) => props.theme.palette.background.default};
  color: ${(props) => props.theme.palette.text.primary.main};
  min-height: 100vh;
  
  .web-site-width {
    max-width: 1500px;  
    width: 100%;
  }

  .text-primary {
    color: ${(props) => props.theme.palette.text.primary.main};
  }
  .text-secondary {
    color: ${(props) => props.theme.palette.text.secondary.main};
  }

  // color
  .color-primary {
    color: ${(props) => props.theme.palette.primary.main};
  }
  .color-secondary {
    color: ${(props) => props.theme.palette.secondary.main};
  }
  .color-success {
    color: ${(props) => props.theme.palette.success.main};
  }
  .color-error {
    color: ${(props) => props.theme.palette.error.main};
  }

  // background
  .bg-color {
    background-color: ${(props) => props.theme.palette.background.default};
  }
  .bg-primary {
    background-color: ${(props) => props.theme.palette.primary.main};
  }
  .bg-secondary {
    background-color: ${(props) => props.theme.palette.secondary.main};
  }

  // border
  .border {
    border: 1px solid ${(props) => props.theme.palette.grey[700]};
  }
  .border-top {
    border-top: 1px solid ${(props) => props.theme.palette.grey[700]};
  }
  .border-radius {
    border-radius: ${(props) => props.theme.shape.borderRadius};
  }
  .border-primary {
    border: 1px solid ${(props) => props.theme.palette.primary};
  }
  .border-secondary {
    border: 1px solid ${(props) => props.theme.palette.secondary};
  }
`;

export const Content = styled.main`
  flex-grow: 1;
  padding: 9px 40px 40px;
`;
