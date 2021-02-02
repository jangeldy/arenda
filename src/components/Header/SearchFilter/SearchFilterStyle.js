import styled from 'styled-components';

export const StyledSearchFilter = styled.div`
  height: 50px;
  
  .filter {
    position: fixed;
    display: flex;
    top: 64px;
    height: 50px;
    background: ${(props) => props.theme.palette.background.default};
    border-bottom: 1px solid ${(props) => props.theme.palette.divider};
    width: calc(100vw - 17px);
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 12px;

    .sf-item {
      flex: 1;
      > button {
        height: 50px;
        border-right: 1px solid ${({ theme }) => theme.palette.divider};
        border-radius: 0 !important;
        padding-left: 15px;
        fieldset {
          display: none;
        }
      }
    }

    .brl {
      border-left: 1px solid ${({ theme }) => theme.palette.divider};
    }
  }
`;
