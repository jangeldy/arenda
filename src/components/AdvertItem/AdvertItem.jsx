import React from 'react';
import Carousel from '../Carousel/Carousel';
import { Wrapper } from './AdvertItemStyle';
import { useTranslation } from 'react-i18next';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';

function AdvertItem({
  id,
  title,
  latitude,
  longitude,
  rooms,
  price,
  area,
  images,
  favorite,
  address,
  rentType,
  views,
}) {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="c2 mb1">
        <div className="c3">
          <Carousel images={images} />
        </div>
      </div>

      {/*<IconButton
          size="small"
          className="right"
          children={
            favorite ? (
              <Favorite fontSize="small" color="secondary" />
            ) : (
              <FavoriteBorder fontSize="small" />
            )
          }
        />*/}
      <div className="address">
        <span className="number-font mr1">
          {t(`roomType_short_${rooms}`)} {area} м<sup>2</sup>
        </span>
        <span>{address}</span>
      </div>
      <div className="title">{title}</div>
      <div>
        <span className="price number-font">{price}</span>
        <span className="bold"> ₸ </span>
        <span>{t(`rentType_${rentType}`)}.</span>
      </div>
    </Wrapper>
  );
}

export default AdvertItem;
