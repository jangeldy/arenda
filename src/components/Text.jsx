import React from 'react';
import { Typography } from '@material-ui/core';

function Text({ text, mr, ml }) {
  return (
    <Typography
      style={{ marginRight: mr, marginLeft: ml }}
      variant="overline"
      children={text}
    />
  );
}

export default Text;
