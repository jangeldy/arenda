import React from 'react';
import useLocalization from '../../components/_hooks/useLocalization';
import './SearchTranslate';
import { useTranslation } from 'react-i18next';
import Sorting from './Sorting/Sorting';
import AdvertItem from '../../components/AdvertItem/AdvertItem';
import testData from './TestData';
import Pagination from '../../components/Pagination';
import { useMediaType } from '../../components/_hooks/useMediaType';
import useWidthStyle from '../../components/_hooks/useWidthStyle';

function SearchPage() {
  const { t } = useTranslation();
  const { isMobile } = useMediaType();
  const localization = useLocalization();
  const widthStyle = useWidthStyle();

  return (
    <div className="content pb3 pt3" style={widthStyle}>
      <div className={isMobile ? 'fw-8 fs-18 mb1' : 'fw-8 fs-28 mb1'}>
        {t('search_localization', localization)}
      </div>

      {/* ФИЛЬТР ПОИСКА*/}
      <Sorting />

      {/* ОБЪЯВЛЕНИЯ */}
      <div className="flex flex-wrap mb3" style={{ marginLeft: -6, marginRight: -6 }}>
        {testData.map((item, index) => (
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
