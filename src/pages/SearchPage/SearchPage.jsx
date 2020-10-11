import React from 'react';
import useLocalization from '../../components/_hooks/useLocalization';
import './SearchTranslate';
import { useTranslation } from 'react-i18next';
import Sorting from './Sorting/Sorting';
import Filter from './Filter/Filter';
import AdvertItem from '../../components/AdvertItem/AdvertItem';
import testData from './TestData';
import Pagination from '../../components/Pagination';

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
    favorite: item.price === '55 000' ? true : item.favorite,
    owned: item.owned,
    address: item.address,
    views: 45,
    rentType: 'month',
  }));

  return (
    <div className="py3">
      <div className="mb1">
        Более <span className="number-font fw-5">300</span> вариантов жилья
      </div>
      <div className="flex justify-between items-center mb1">
        <div className="fw-8 fs-30">{t('search_localization', localization)}</div>
        <Sorting />
      </div>

      {/* ФИЛЬТР ПОИСКА*/}
      <Filter />

      {/* ОБЪЯВЛЕНИЯ */}
      <div className="flex flex-wrap mb3" style={{ marginLeft: -8, marginRight: -8 }}>
        {data.map((item, index) => (
          <AdvertItem key={index} {...item} />
        ))}
      </div>

      {/* ПАГИНАЦИЯ */}
      <div>
        <Pagination />
        <div className="center mt2">
          <span className="number-font">1 – 20 </span>
          <span>из Варианты жилья:</span>
          <span className="number-font"> 300+</span>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
