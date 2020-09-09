import React from 'react';
import useLocalization from '../../components/_hooks/useLocalization';
import Typography from '@material-ui/core/Typography';
import './SearchTranslate';
import { useTranslation } from 'react-i18next';
import Sorting from './Sorting/Sorting';
import Filter from './Filter/Filter';
import AdvertItem from '../../components/AdvertItem/AdvertItem';
import { AdvertContainer } from './SearchStyle';

function SearchPage() {
  const { t } = useTranslation();
  const localization = useLocalization();
  const data = [];

  for (let i = 0; i < 50; i++) {
    data.push({
      img: i,
    });
  }
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
            <AdvertItem key={index} />
          ))}
        </AdvertContainer>
      </div>
    </>
  );
}

export default SearchPage;
