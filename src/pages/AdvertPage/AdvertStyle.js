import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export const Wrapper = styled.div`
  .fence {
    width: 100%;
    height: 50px;
    transform: translateY(-50px);
    background-color: ${(props) => props.theme.palette.background.default};
    float: left;
  }
`;

export const Owner = styled.div`
  position: sticky;
  top: 120px;
  min-width: 302px;

  .complain {
    opacity: 0.8;
    .link {
      width: 240px;
      margin: auto;
      font-weight: 600;
      cursor: pointer;
      text-decoration: underline;
    }
    svg {
      margin-top: 5px;
      margin-right: 15px;
    }
  }
`;

export const CardStyled = styled(Card)`
  padding: 24px;
  margin-top: 24px;
  box-shadow: rgb(0 0 0 / 12%) 0 6px 16px;
  border-radius: ${(props) => props.theme.shape.borderRadius * 1.5}px !important;
`;
