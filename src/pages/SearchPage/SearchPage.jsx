import React from 'react';
import useLocalization from '../../components/_hooks/useLocalization';
import './SearchTranslate';
import { useTranslation } from 'react-i18next';
import Sorting from './Sorting/Sorting';
import FilterDesktop from './FilterDesktop/FilterDesktop';
import AdvertItem from '../../components/AdvertItem/AdvertItem';
import testData from './TestData';
import Pagination from '../../components/Pagination';
import HeaderMobile from '../../components/Header/HeaderMobile';
import { ReactComponent as FilterIcon } from './filterIcon.svg';
import { ReactComponent as FilterDarkIcon } from './filterIconDark.svg';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core';
import FilterMobile from './FilterMobile/FilterMobile';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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
    <>
      <HeaderMobile>
        <div className="fw-6">
          <Select
            defaultValue="nst"
            SelectDisplayProps={{
              style: {
                paddingLeft: 10,
                borderRadius: 4,
                marginLeft: -10,
                fontSize: 14,
                fontWeight: 600,
              },
            }}
            input={<InputBase />}
          >
            <MenuItem value="nst">Нур-Султан</MenuItem>
            <MenuItem value="alm">Алматы</MenuItem>
            <MenuItem value="shm">Шымкент</MenuItem>
            <MenuItem value="kzl">Кызылорда</MenuItem>
            <MenuItem value="ars">Арыс</MenuItem>
          </Select>
        </div>
        <div style={{ flexGrow: 1, textAlign: 'right' }}>
          <FilterMobile />
        </div>
      </HeaderMobile>

      <div className="web-site-width pb3 pt1">
        <div className="desktop mb1 mt3">Более 300 вариантов жилья</div>
        <div className="desktop fw-8 fs-30 mb1">
          {t('search_localization', localization)}
        </div>

        <div className="mobile">Более 300 вариантов жилья</div>
        <div className="mobile fw-8 fs-18 mb1">
          {t('search_localization', localization)}
        </div>

        {/* ФИЛЬТР ПОИСКА*/}
        <FilterDesktop />
        <Sorting />

        {/* ОБЪЯВЛЕНИЯ */}
        <div className="flex flex-wrap mb3" style={{ marginLeft: -8, marginRight: -8 }}>
          {data.map((item, index) => (
            <AdvertItem key={index} {...item} />
          ))}
        </div>

        {/* ПАГИНАЦИЯ */}
        <div>
          <Pagination />
          <div className="center mt2">1 – 20 из Варианты жилья: 300+</div>
        </div>
      </div>
    </>
  );
}

export default SearchPage;
