import React from 'react';
import useLocalization from '../../components/_hooks/useLocalization';
import Typography from '@material-ui/core/Typography';
import './SearchTranslate';
import { useTranslation } from 'react-i18next';
import Sorting from './Sorting/Sorting';
import Filter from './Filter/Filter';
import AdvertItem from '../../components/AdvertItem/AdvertItem';
import { AdvertContainer } from './SearchStyle';
import testData from './TestData';

function SearchPage() {
  const { t } = useTranslation();
  const localization = useLocalization();
  const data = testData.map((item) => ({
    id: item.id,
    title: item.title,
    latitude: item.lat,
    longitude: item.lng,
    rooms: item.rooms,
    price: item.price,
    area: item.space,
    images: item.thumb_image_urls,
    favorite: item.favorite,
    owned: item.owned,
    address: item.address,
    views: 45,
    rentType: 'month',
  }));

  return (
    <>
      <div className="flex justify-between">
        <Typography variant="h6">{t('search_localization', localization)}</Typography>
        <Sorting />
      </div>
      <div className="flex pt2">
        <Filter />
        <AdvertContainer>
          {data.map((item, index) => (
            <AdvertItem key={index} {...item} />
          ))}
        </AdvertContainer>
      </div>
    </>
  );
}

export default SearchPage;
