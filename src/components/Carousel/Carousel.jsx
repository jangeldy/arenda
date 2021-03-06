import React, { useState } from 'react';
import { Wrapper } from './CarouselStyle';
import Button from '@material-ui/core/Button';
import ArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeftOutlined';
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import Swipe from 'react-swipeable-views';

function Carousel({ images, className, buttonSize = 'small', SlideComponent }) {
  const [imgIndex, setImgIndex] = useState(0);
  const size = images.length - 1;

  return (
    <Wrapper className={className} buttonSize={buttonSize}>
      <div className="c1">
        <div className="c2">
          <div id="carousel">
            <Swipe
              style={{ width: '100%', height: '100%' }}
              containerStyle={{ width: '100%', height: '100%' }}
              enableMouseEvents
              resistance
              className="swipe"
              index={imgIndex}
              onChangeIndex={setImgIndex}
              children={images.map((src, index) =>
                SlideComponent ? (
                  <SlideComponent
                    key={index}
                    index={index}
                    className="slide block"
                    style={{ backgroundImage: `url(${src})` }}
                  />
                ) : (
                  <div
                    key={index}
                    className="slide"
                    style={{ backgroundImage: `url(${src})` }}
                  />
                )
              )}
            />
            {images.length > 1 && (
              <>
                <div className="arrow-buttons">
                  <Button
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      setImgIndex(imgIndex === 0 ? size : imgIndex - 1);
                    }}
                    className="left-arrow"
                    variant="contained"
                    size={buttonSize}
                    children={<ArrowLeftIcon />}
                  />
                  <Button
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      setImgIndex(imgIndex === size ? 0 : imgIndex + 1);
                    }}
                    className="right-arrow"
                    variant="contained"
                    size={buttonSize}
                    children={<ArrowRightIcon />}
                  />
                </div>
                <div className="dots-block">
                  <div className="dots-inner">
                    <div className="dots-container">
                      <div
                        className="dots"
                        style={{
                          transform: `translateX(-${calcTranslate(imgIndex, size)}px)`,
                        }}
                      >
                        {images.map((img, index) => (
                          <span
                            key={index}
                            className="dot"
                            style={{
                              transform: `scale(${calcScale(index, imgIndex, size)})`,
                              opacity: index === imgIndex ? 1 : 0.6,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            <div className="br" />
          </div>
        </div>
      </div>
    </Wrapper>
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

export default Carousel;
