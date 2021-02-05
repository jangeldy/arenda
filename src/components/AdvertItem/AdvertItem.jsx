import React from 'react';
import Carousel from '../Carousel/Carousel';
import { Wrapper } from './AdvertItemStyle';
import { useTranslation } from 'react-i18next';
import paths from '../../_helpers/paths';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteBorder';
import { useTheme } from '@material-ui/core';

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
  const { palette } = useTheme();
  return (
    <Wrapper to={paths.advertPage.replace(':id', id)} target="_blank">
      <Card variant="outlined" style={{ backgroundColor: palette.background.default }}>
        <Carousel images={images} />
        <div className="px2 pb2 pt1">
          <div className="flex justify-between items-center">
            <div>
              <span className="price">{price} ₸ </span>
              <span>{t(`rentType_${rentType}`)}.</span>
            </div>
            <IconButton size="small">
              {favorite ? <FavoriteIcon style={{ color: '#f50057' }} /> : <FavoriteOutlinedIcon />}
            </IconButton>
          </div>
          <div className="address">
            <span className="mr1">
              {t(`roomType_short_${rooms}`)} {area} м<sup>2</sup>
            </span>
            <span>{address}</span>
          </div>
          <div className="title">{title}</div>
        </div>
      </Card>
    </Wrapper>
  );
}

export default AdvertItem;
