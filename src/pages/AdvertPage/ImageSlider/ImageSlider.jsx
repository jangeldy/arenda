import React from 'react';
import Button from '@material-ui/core/Button';
import Swipe from 'react-swipeable-views';
import { Dialog, Transition } from './ImageSliderStyle';
import ArrowLeftIcon from '@material-ui/icons/ArrowBack';
import ArrowRightIcon from '@material-ui/icons/ArrowForward';
import useModal from '../../../components/_hooks/useModal';

export default function ImageSlider({ images }) {
  const slider = useModal('slider');
  const setIndex = slider.open;
  const index = parseInt(slider.data);
  const size = images.length - 1;

  return (
    <Dialog
      open={slider.isOpen}
      TransitionComponent={Transition}
      fullWidth
      maxWidth="lg"
      onClose={slider.close}
    >
      <div className="">8/10</div>
      <div>
        <Swipe
          style={{ width: '100%', height: '100%' }}
          containerStyle={{ width: '100%', height: '100%' }}
          enableMouseEvents
          resistance
          index={index}
          onChangeIndex={setIndex}
          children={images.map((url) => (
            <img
              key={url}
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'contain',
                verticalAlign: 'bottom',
              }}
              src={url}
              alt="slide-image"
            />
          ))}
        />
      </div>
      {images.length > 1 && (
        <>
          <div className="arrow-buttons">
            <Button
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setIndex(index === 0 ? size : index - 1);
              }}
              className="left-arrow"
              variant="contained"
              size="large"
              children={<ArrowLeftIcon />}
            />
            <Button
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setIndex(index === size ? 0 : index + 1);
              }}
              className="right-arrow"
              variant="contained"
              size="large"
              children={<ArrowRightIcon />}
            />
          </div>
          <div className="dots-block">
            <div className="dots-inner">
              <div className="dots-container">
                <div
                  className="dots"
                  style={{
                    transform: `translateX(-${calcTranslate(index, size)}px)`,
                  }}
                >
                  {images.map((img, idx) => (
                    <span
                      key={idx}
                      className="dot"
                      style={{
                        transform: `scale(${calcScale(idx, index, size)})`,
                        opacity: idx === index ? 1 : 0.6,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Dialog>
  );
}

function calcTranslate(imgIndex, size) {
  if (imgIndex <= 2) return 0;
  else if (imgIndex + 2 >= size) {
    return (size - 4) * 11;
  } else {
    return (imgIndex - 2) * 11;
  }
}

function calcScale(index, imgIndex, size) {
  if (size === imgIndex && index > size - 3) return 1;
  if (size === imgIndex && index === size - 3) return 0.8;
  if (imgIndex === 0 && index < 3) return 1;
  if (imgIndex === 0 && index === 3) return 0.8;

  if (imgIndex - index < 2 && imgIndex - index > -2) return 1;
  if (imgIndex - index === 2 || imgIndex - index === -2) return 0.8;
  else return 0.6;
}
