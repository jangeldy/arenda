import React from 'react';
import { Typography } from '@material-ui/core';
import { useMediaType } from '../../components/_hooks/useMediaType';

function AdvertPage(props) {
  useMediaType();
  return <div className="pb3 pt2">
    <Typography variant="h5">Квартира на Абылай хана 24</Typography>
  </div>;
}

export default AdvertPage;
