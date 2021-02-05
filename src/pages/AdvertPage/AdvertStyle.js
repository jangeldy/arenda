import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export const Wrapper = styled.div`
  .fence {
    width: 100%;
    height: 50px;
    transform: translateY(-50px);
    background-color: ${(props) => props.theme.palette.background.default};
  }
`;

export const OwnerCardStyle = styled(Card)`
  padding: 24px;
  margin-top: 24px;
  box-shadow: rgb(0 0 0 / 12%) 0 6px 16px;
  position: sticky;
  top: 90px;
`;
