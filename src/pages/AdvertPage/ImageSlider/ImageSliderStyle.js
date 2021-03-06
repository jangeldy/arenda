import MuiDialog from '@material-ui/core/Dialog';
import withStyles from '@material-ui/styles/withStyles';
import React from 'react';
import { Slide } from '@material-ui/core';
import styled from 'styled-components';

export const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledDialog = withStyles({
  paper: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  paperScrollPaper: {
    flexDirection: 'row',
  },
})(MuiDialog);

export const Dialog = styled(StyledDialog)`
  .close {
    position: fixed;
    z-index: 1400;
    border-radius: 50%;
    padding: 10px;
    min-width: inherit;
    top: 50px;
    right: 50px;
  }

  .arrow-buttons {
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .right-arrow,
  .left-arrow {
    pointer-events: auto;
    background-color: white;
    transition: opacity 0.3s;
    min-width: inherit !important;
    padding: 12px;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 16px);
  }

  .right-arrow {
    right: 50px;
  }
  .left-arrow {
    left: 50px;
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
