import React from 'react';
import Carousel from '../Carousel/Carousel';
import { Wrapper } from './AdvertItemStyle';
import { useTranslation } from 'react-i18next';
import paths from '../../_helpers/paths';
import { ReactComponent as FavoriteIcon } from './favorite.svg';
import { ReactComponent as FavoriteRedIcon } from './favoriteRed.svg';

function AdvertItem({
  id,
  title,
  rooms,
  price,
  area,
  images,
  favorite,
  address,
  rentType,
}) {
  const { t } = useTranslation();
  return (
    <Wrapper to={paths.advertPage.replace(':id', id)}>
      <Carousel images={images} className="mb1" />
      <div className="flex justify-between items-center">
        <div>
          <span className="price">{price} ₸ </span>
          <span>{t(`rentType_${rentType}`)}.</span>
        </div>
        <div className="favorite-icon">
          {favorite ? <FavoriteRedIcon /> : <FavoriteIcon />}
        </div>
      </div>
      <div className="address">
        <span className="mr1">
          {t(`roomType_short_${rooms}`)} {area} м<sup>2</sup>
        </span>
        <span>{address}</span>
      </div>
      <div className="title">{title}</div>
    </Wrapper>
  );
}

export default AdvertItem;
