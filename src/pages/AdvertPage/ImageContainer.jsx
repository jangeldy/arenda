import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: hidden;
  cursor: pointer;
  max-height: 20.4vh;

  .c1 {
    padding-top: 68%;
    contain: strict !important;
    position: relative !important;
    width: 100% !important;
    z-index: 0 !important;
  }
  .c2 {
    position: absolute !important;  
    top: 0 !important;
    bottom: 0 !important;
    left: 0 !important;
    right: 0 !important;
    height: 100% !important;
    width: 100% !important;
    max-height: 20.4vh;
  }
  .c3 {
    width: 100%;
    height: 94%;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  img {
    width: 100%;
  }
`;

export default function ImageContainer({ src, className }) {
  return (
    <Wrapper className={className}>
      <div className="c1">
        <div className="c2">
          <div className="c3 border-radius">
            <img alt="images" src={src} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
