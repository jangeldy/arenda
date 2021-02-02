import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Wrapper = styled(Link)`
  width: 20%;
  padding: 6px;
  min-width: 260px;
  position: relative;
  font-size: 15px;
  margin-bottom: 16px;

  @media screen and (max-width: 1440px) {
    width: 25%;
  }
  @media screen and (max-width: 1200px) {
    width: 50%;
  }
  @media screen and (max-width: 743px) {
    font-size: 17px;
    width: 100%;
  }
  
  .favorite-icon {
    position: absolute;
    top: 17px;
    right: 17px;
  }

  .price {
    font-weight: 800;
    margin-right: 5px;
  }

  sup {
    font-size: 10px;
  }

  .address,
  .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
