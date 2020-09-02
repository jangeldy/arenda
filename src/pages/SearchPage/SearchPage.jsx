import React from 'react';
import useLocalization from '../../components/_hooks/useLocalization';
import Typography from '@material-ui/core/Typography';
import './SearchTranslate';
import { useTranslation } from 'react-i18next';
import Sorting from './Sorting/Sorting';
import Filter from './Filter/Filter';

function SearchPage() {
  const { t } = useTranslation();
  const localization = useLocalization();
  return (
    <>
      <div className="flex justify-between">
        <Typography variant="h6">{t('search_localization', localization)}</Typography>
        <Sorting />
      </div>
      <div className="flex pt2">
        <Filter />
        <div style={{ flexGrow: 1 }}>adverts</div>
      </div>
    </>
  );
}

export default SearchPage;
