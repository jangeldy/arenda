import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from './CircularLoadingStyle';

const CircularLoading = () => {
  const classes = useStyles();

  return <CircularProgress className={classes.progress}/>;
};

export default CircularLoading;
