import React from 'react';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import { useMediaQuery } from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles({
  content: {
    width: '100%',
    maxWidth: 'inherit',
    maxHeight: 'inherit',
  },
  footer: { marginTop: -35 },
  arrowRight: { right: 50 },
  arrowLeft: { left: 50 },
});

function ImageSlider({ isOpen, close, open, images }) {
  const matches = useMediaQuery('(max-width:1000px)');
  const classes = useStyles();
  return (
    <AutoRotatingCarousel
      open={isOpen}
      onClose={close}
      onStart={close}
      mobile={matches}
      autoplay={false}
      style={{ position: 'absolute' }}
      containerStyle={{ color: 'red' }}
      onChange={open}
      classes={classes}
      ModalProps={{
        BackdropProps: {
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
          },
        },
      }}
    >
      {images.map((url) => (
        <img
          key={url}
          style={{ height: '100%', width: '100%', objectFit: 'contain', verticalAlign: 'bottom' }}
          src={url}
          alt="slide-image"
        />
      ))}
    </AutoRotatingCarousel>
  );
}

export default ImageSlider;
