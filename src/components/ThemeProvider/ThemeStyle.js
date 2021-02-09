import styled from 'styled-components';

export const ThemeWrapper = styled.main`
  background-color: ${(props) => props.theme.palette.background.default};
  color: ${(props) => (props.theme.isDark ? '#eeeeee' : '#000000')};
  min-height: 100vh;

  .text-primary {
    color: ${(props) => props.theme.palette.text.primary};
  }
  .text-secondary {
    color: ${(props) => props.theme.palette.text.secondary};
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
    border: 1px solid ${(props) => props.theme.palette.divider};
  }
  .border-top {
    border-top: 1px solid ${(props) => props.theme.palette.grey[700]};
  }
  .radius {
    border-radius: ${(props) => props.theme.shape.borderRadius}px;
  }
  .radius-tl {
    border-top-left-radius: ${(props) => props.theme.shape.borderRadius}px;
  }
  .radius-tr {
    border-top-right-radius: ${(props) => props.theme.shape.borderRadius}px;
  }
  .radius-br {
    border-bottom-right-radius: ${(props) => props.theme.shape.borderRadius}px;
  }
  .radius-bl {
    border-bottom-left-radius: ${(props) => props.theme.shape.borderRadius}px;
  }

  .radius-large {
    border-radius: ${(props) => props.theme.shape.borderRadius * 1.5}px;
  }
  .radius-large-tl {
    border-top-left-radius: ${(props) => props.theme.shape.borderRadius * 1.5}px;
  }
  .radius-large-tr {
    border-top-right-radius: ${(props) => props.theme.shape.borderRadius * 1.5}px;
  }
  .radius-large-br {
    border-bottom-right-radius: ${(props) => props.theme.shape.borderRadius * 1.5}px;
  }
  .radius-large-bl {
    border-bottom-left-radius: ${(props) => props.theme.shape.borderRadius * 1.5}px;
  }
  .border-primary {
    border: 1px solid ${(props) => props.theme.palette.primary};
  }
  .border-secondary {
    border: 1px solid ${(props) => props.theme.palette.secondary};
  }

  // shadow
  .shadow {
    box-shadow: 0 1px 0 0 #d3d9de, 0 0 0 1px #edeef0;
  }
`;
