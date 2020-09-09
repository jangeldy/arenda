import React, { useEffect, useState } from 'react';
import { Wrapper } from './CarouselStyle';
import Button from '@material-ui/core/Button';
import ArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeftOutlined';
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRightOutlined';

function Carousel({ images }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [animate, setAnimate] = useState('');

  useEffect(() => {
    setTimeout(()=>{
      setAnimate('animate__animated animate__slideInRight animate__delay-1s')
    },2000)
  },[]);

  return (
    <Wrapper>
      <img src={images[imgIndex]} alt="slider" />
      <div
        className={`image-slider ${animate}` }
        style={{ backgroundImage: `url("${images[imgIndex]}")` }}
      />
      {images.length > 1 && (
        <>
          <div className="arrow-buttons">
            <Button
              onClick={() =>
                setImgIndex(imgIndex === 0 ? images.length - 1 : imgIndex - 1)
              }
              className="left-arrow"
              variant="contained"
              children={<ArrowLeftIcon />}
            />
            <Button
              onClick={() =>
                setImgIndex(imgIndex === images.length - 1 ? 0 : imgIndex + 1)
              }
              className="right-arrow"
              variant="contained"
              children={<ArrowRightIcon />}
            />
          </div>
          <div className="dots-block">
            <div className="dots-inner">
              <div className="dots-container">
                <div
                  className="dots"
                  style={{
                    transform: `translateX(-${calcTranslate(
                      imgIndex,
                      images.length - 1
                    )}px)`,
                  }}
                >
                  {images.map((img, index) => (
                    <span
                      key={index}
                      className="dot"
                      style={{
                        transform: `scale(${calcScale(
                          index,
                          imgIndex,
                          images.length - 1
                        )})`,
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
