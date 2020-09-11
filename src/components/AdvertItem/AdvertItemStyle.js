import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 25%;
  padding: 8px 8px 12px;
  min-width: 260px;
  position: relative;
  font-size: 15px;
  margin-bottom: 16px;

  @media screen and (max-width: 1415px) {
    width: 33.3333333333%;
  }
  @media screen and (max-width: 1155px) {
    width: 50%;
  }

  .c1 {
    contain: content !important;
    position: relative !important;
    overflow: hidden !important;
  }

  .c2 {
    padding-top: 66.6667%;
    background: rgb(216, 216, 216);
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
  
  .address, .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
