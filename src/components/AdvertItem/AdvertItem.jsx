import React from 'react';
import Carousel from '../Carousel/Carousel';
import { Wrapper } from './AdvertItemStyle';
import { useTranslation } from 'react-i18next';
import { ReactComponent as FavoriteIcon } from './favorite.svg';
import { ReactComponent as FavoriteRedIcon } from './favoriteRed.svg';
import paths from '../../_helpers/paths';

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
    <Wrapper to={paths.advertPage.replace(':id', id)}>
      <div className="c2 mb1">
        <div className="c3">
          <Carousel images={images} />
        </div>
      </div>
      <div className="favorite-icon">
        {favorite ? <FavoriteRedIcon /> : <FavoriteIcon />}
      </div>
      <div className="address">
        <span className="mr1">
          {t(`roomType_short_${rooms}`)} {area} м<sup>2</sup>
        </span>
        <span>{address}</span>
      </div>
      <div className="title">{title}</div>
      <div>
        <span className="price">{price} ₸ </span>
        <span>{t(`rentType_${rentType}`)}.</span>
      </div>
    </Wrapper>
  );
}

export default AdvertItem;
