import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
  cursor: pointer;
  max-height: 60vh;

  .c1 {
    padding-top: 66.6667%;
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
  }

  #carousel {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    max-height: 60vh;

    .swipe {
      border-top-left-radius: ${(props) =>
        props.theme.shape.borderRadius * (props.buttonSize === 'large' ? 1.5 : 1)}px;
      border-top-right-radius: ${(props) =>
        props.theme.shape.borderRadius * (props.buttonSize === 'large' ? 0 : 1)}px;
      border-bottom-left-radius: ${(props) =>
        props.theme.shape.borderRadius * (props.buttonSize === 'large' ? 1.5 : 1)}px;
      border-bottom-right-radius: ${(props) =>
        props.theme.shape.borderRadius * (props.buttonSize === 'large' ? 0 : 1)}px;
    }

    .br {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      pointer-events: none;
      overflow: hidden;
      border: ${(props) =>
        props.buttonSize === 'large'
          ? 'none'
          : '1px solid ' + props.theme.palette.divider};
      border-top-left-radius: ${(props) =>
        props.theme.shape.borderRadius * (props.buttonSize === 'large' ? 1.5 : 1)}px;
      border-top-right-radius: ${(props) =>
        props.theme.shape.borderRadius * (props.buttonSize === 'large' ? 0 : 1)}px;
      border-bottom-left-radius: ${(props) =>
        props.theme.shape.borderRadius * (props.buttonSize === 'large' ? 1.5 : 1)}px;
      border-bottom-right-radius: ${(props) =>
        props.theme.shape.borderRadius * (props.buttonSize === 'large' ? 0 : 1)}px;
    }

    .slide {
      background-position: center;
      background-size: cover;
      height: 100%;
      width: 100%;
    }

    .slide-right {
      animation: slideInRight;
      animation-duration: 0.6s;
    }
    .slide-left {
      animation: slideInLeft;
      animation-duration: 0.6s;
    }

    // arrows
    .arrow-buttons {
      pointer-events: none;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
    }

    .right-arrow,
    .left-arrow {
      pointer-events: auto;
      background-color: white;
      opacity: 0;
      transition: opacity 0.3s;
      min-width: inherit !important;
      padding: ${(props) => (props.buttonSize === 'large' ? '10px' : '4px')};
      border-radius: 50%;
      position: absolute;
      top: calc(50% - 16px);
    }

    :hover .right-arrow,
    :hover .left-arrow {
      opacity: 1;
    }
    .right-arrow {
      right: ${(props) => (props.buttonSize === 'large' ? '20px' : '10px')};
    }
    .left-arrow {
      left: ${(props) => (props.buttonSize === 'large' ? '20px' : '10px')};
    }

    // dots
    .dots-block {
      -webkit-box-pack: center !important;
      -webkit-box-align: end !important;
      position: absolute !important;
      bottom: 0 !important;
      left: 0 !important;
      right: 0 !important;
      display: flex !important;
      align-items: flex-end !important;
      justify-content: center !important;
      min-height: 40px !important;
      white-space: nowrap !important;
    }
    .dots-inner {
      align-items: flex-end !important;
      display: flex !important;
      justify-content: center !important;
      height: 100% !important;
      contain: content !important;
    }
    .dots-container {
      display: flex !important;
      overflow: hidden !important;
      padding-bottom: 12px !important;
      max-width: 55px !important;
    }
    .dots {
      -webkit-box-pack: center !important;
      -webkit-box-align: end !important;
      align-items: flex-end !important;
      display: flex !important;
      justify-content: center !important;
      list-style-type: none !important;
      margin: 0 !important;
      padding: 0 !important;
      transition: -ms-transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s,
        -webkit-transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s,
        transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s !important;
    }
    .dot {
      background: rgb(255, 255, 255) !important;
      border-radius: 50% !important;
      height: 6px !important;
      margin-left: 2.5px !important;
      margin-right: 2.5px !important;
      min-width: 6px !important;
      transition: opacity 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s !important;
      width: 6px !important;
    }
  }
`;
