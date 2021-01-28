import styled from 'styled-components';

export const StyledSearchFilter = styled.div`
  position: fixed;
  display: flex;
  top: 64px;
  height: 50px;
  background: ${(props) => props.theme.palette.background.default};
  border-bottom: 1px solid ${props => props.theme.palette.divider};
  width: calc(100vw - 17px);
  z-index: 1;
  
  fieldset {
    display: none;
  }
`;
