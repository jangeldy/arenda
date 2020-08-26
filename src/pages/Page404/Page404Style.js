import styled from 'styled-components';

export const CssBox = styled.div`
  color: #404040;
  display: flex;
  height: calc(100vh - 68px);
  text-align: center;

  .container {
    margin: auto;
    transform: translateY(-50px);
  }
  .error {
    font-size: 100px;
    font-weight: 500;
  }
  .oops {
    font-size: 23px;
    text-transform: uppercase;
    font-weight: 500;
  }
  .not-found {
    font-size: 19px;
    font-weight: 300;
    color: #888888;
    margin-bottom: 25px;
  }
`;
