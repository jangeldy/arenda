import React from 'react';
import paths from '../../../_helpers/paths';
import ListIcon from '@material-ui/icons/CalendarViewDayOutlined';
import MapIcon from '@material-ui/icons/MapOutlined';
import { Card, useTheme } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { ButtonGroup, Button } from '@material-ui/core';

export default function TypeButton() {
  const { t } = useTranslation();
  const theme = useTheme();
  const location = useLocation();
  const style = { borderBottom: '4px solid' + theme.palette.primary.main };
  const sp = location.pathname === paths.searchPage;
  const spm = location.pathname === paths.searchInMapPage;

  return (
    <Card className="flex mb2">
      <ButtonGroup fullWidth variant="text">
        <Button
          color={sp ? 'primary' : 'default'}
          startIcon={<ListIcon fontSize="small" />}
          children={t('filter_list')}
          style={sp ? style : undefined}
        />
        <Button
          color={spm ? 'primary' : 'default'}
          startIcon={<MapIcon fontSize="small" />}
          children={t('filter_map')}
          style={spm ? style : undefined}
        />
      </ButtonGroup>
    </Card>
  );
}
