import styled from 'styled-components';
import { ToggleButtonGroup } from '@material-ui/lab';

export const Wrapper = styled.div`
  width: 280px;
  position: sticky;
  top: 0;
`;

export const FlatGroup = styled(ToggleButtonGroup)`
  button {
    width: 62px;
  }
`;

export const TypeItem = styled.div`
  height: 46px;
  line-height: 46px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
  border-bottom: ${(props) => (props.active ? '4px solid green' : 'none')};
  color: ${(props) =>
    props.active ? props.theme.palette.primary.main : props.theme.palette.action.active};
  :hover {
    color: ${(props) => props.theme.palette.primary.main};
  }
`;
