import React from 'react';
import { Button, ButtonGroup, Card, useTheme } from '@material-ui/core';
import ListIcon from '@material-ui/icons/CalendarViewDayOutlined';
import MapIcon from '@material-ui/icons/MapOutlined';
import useColumnFilter from '../../../../components/TableFilter/useColumnFilter';
import { useTranslation } from 'react-i18next';

export default function ListOrMap() {
  const { t } = useTranslation();
  const theme = useTheme();
  const style = { borderBottom: '4px solid transparent' };
  const styleActive = { borderBottom: '4px solid' + theme.palette.primary.main };
  const { value, setFilter } = useColumnFilter('listOrMap');
  const isMap = value === 'map';

  return (
    <Card className="flex mb2">
      <ButtonGroup fullWidth variant="outlined">
        <Button
          color={!isMap ? 'primary' : 'default'}
          startIcon={<ListIcon fontSize="small" />}
          children={t('filter_list')}
          // style={!isMap ? styleActive : style}
          onClick={() => setFilter()}
        />
        <Button
          color={isMap ? 'primary' : 'default'}
          startIcon={<MapIcon fontSize="small" />}
          children={t('filter_map')}
          // style={isMap ? styleActive : style}
          onClick={() => setFilter('map')}
        />
      </ButtonGroup>
    </Card>
  );
}
