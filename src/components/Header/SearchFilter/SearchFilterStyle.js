import styled from 'styled-components';

export const StyledSearchFilter = styled.div`
  height: 50px;

  .filter {
    position: fixed;
    display: flex;
    top: 64px;
    height: 48px;
    background: ${(props) => (props.theme.isDark ? '#f1f1f1' : '#f1f1f1')};
    width: calc(100vw - 17px);
    z-index: 1;
    border-top: 1px solid ${(props) => props.theme.palette.divider};
    border-bottom: 1px solid ${(props) => props.theme.palette.divider};
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 12px;

    .sf-item {
      flex: 1;
      > button {
        height: 48px;
        border-right: 1px solid ${({ theme }) => theme.palette.divider};
        border-radius: 0 !important;
        padding-left: 15px;
        fieldset {
          display: none;
        }
      }

      :first-child > button {
        padding-left: 0;
      }

      :last-child > button {
        padding-right: 0;
        border: none;
      }
    }
  }
`;
