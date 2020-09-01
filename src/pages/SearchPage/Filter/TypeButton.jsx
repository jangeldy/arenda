import React from 'react';
import { TypeItem } from './FilterStyle';
import paths from '../../../_helpers/paths';
import ListIcon from '@material-ui/icons/CalendarViewDayOutlined';
import MapIcon from '@material-ui/icons/MapOutlined';
import Divider from '@material-ui/core/Divider';
import { Card, useTheme } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export default function TypeButton() {
  const { t } = useTranslation();
  const theme = useTheme();
  const location = useLocation();
  return (
    <Card className="flex mb2">
      <TypeItem active={location.pathname === paths.searchPage} theme={theme}>
        <ListIcon fontSize="small" />
        <span className="ml1">{t('filter_list')}</span>
      </TypeItem>
      <Divider orientation="vertical" flexItem />
      <TypeItem active={location.pathname === paths.searchInMapPage} theme={theme}>
        <MapIcon fontSize="small" />
        <span className="ml1">{t('filter_map')}</span>
      </TypeItem>
    </Card>
  );
}
