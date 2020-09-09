import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 25%;
  flex-grow: 1;
  padding: 9px;
  min-width: 260px;

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
`;
