import React from 'react';
import useLocalization from '../../components/_hooks/useLocalization';
import './SearchTranslate';
import { useTranslation } from 'react-i18next';
import Sorting from './Sorting/Sorting';
import FilterDesktop from './FilterDesktop/FilterDesktop';
import AdvertItem from '../../components/AdvertItem/AdvertItem';
import testData from './TestData';
import Pagination from '../../components/Pagination';
import SearchPageHeader from './SearchPageHeader';
import { useMediaType } from '../../components/_hooks/useMediaType';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import useWidthStyle from '../../components/_hooks/useWidthStyle';

function SearchPage() {
  const { t } = useTranslation();
  const { isMobile } = useMediaType();
  const localization = useLocalization();
  const widthStyle = useWidthStyle();
  const data = testData.map((item) => ({
    id: item.id,
    title: item.title,
    latitude: item.lat,
    longitude: item.lng,
    rooms: item.rooms,
    price: item.price,
    area: item.space,
    images: item.thumb_image_urls,
    favorite: item.price === '55 000' ? true : item.favorite,
    owned: item.owned,
    address: item.address,
    views: 45,
    rentType: 'month',
  }));

  return (
    <div className="content pb3 pt1" style={widthStyle}>
      <div className={!isMobile && 'mb1 mt3'}>Более 300 вариантов жилья</div>
      <div className={isMobile ? 'fw-8 fs-18 mb1' : 'fw-8 fs-30 mb1'}>
        {t('search_localization', localization)}
      </div>

      {/* ФИЛЬТР ПОИСКА*/}
      <Sorting />

      {/* ОБЪЯВЛЕНИЯ */}
      <div className="flex flex-wrap mb3" style={{ marginLeft: -8, marginRight: -8 }}>
        {data.map((item, index) => (
          <AdvertItem key={index} {...item} />
        ))}
      </div>

      {/* ПАГИНАЦИЯ */}
      <div className="mt4">
        <Pagination />
        <div className="center mt2">1 – 20 из Варианты жилья: 300+</div>
      </div>
    </div>
  );
}

export default SearchPage;
