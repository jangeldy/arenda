import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 64.6667%;
  contain: strict !important;
  position: relative !important;
  width: 100% !important;
  z-index: 0 !important;
  cursor: pointer;

  .con2 {
    position: absolute !important;
    top: 0 !important;
    bottom: 0 !important;
    left: 0 !important;
    right: 0 !important;
    height: 100% !important;
    width: 100% !important;
  }
  .con3 {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
  }
`;

export default function ImageContainer({ src, className }) {
  return (
    <Wrapper className={className}>
      <div className="con2">
        <div className="con3 border-radius">
          <img alt="images" className="mb1" src={src} />
        </div>
      </div>
    </Wrapper>
  );
}
