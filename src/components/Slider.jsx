import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiSlider from '@material-ui/core/Slider';

const SampleSlider = withStyles({
  root: {
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '#00000050 0 2px 2px',
    '&:hover, &$active': {
      boxShadow: '#00000070 0 2px 3px 1px',
    },
    '& .bar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    opacity: 0.6,
    height: 3,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
})(MuiSlider);

function ThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

export default function Slider(props) {
  return (
    <div style={{ padding: '0 12px' }}>
      <SampleSlider
        color="secondary"
        step={100}
        {...props}
        ThumbComponent={ThumbComponent}
      />
    </div>
  );
}
