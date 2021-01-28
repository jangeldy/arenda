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

  .c2 {
    padding-top: 66.6667%;
    contain: strict !important;
    position: relative !important;
    width: 100% !important;
    z-index: 0 !important;
  }

  .c3 {
    position: absolute !important;
    top: 0 !important;
    bottom: 0 !important;
    left: 0 !important;
    right: 0 !important;
    height: 100% !important;
    width: 100% !important;
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
