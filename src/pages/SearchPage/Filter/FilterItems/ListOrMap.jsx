import React from 'react';
import { Button, Card } from '@material-ui/core';
import ListIcon from '@material-ui/icons/CalendarViewDayOutlined';
import MapIcon from '@material-ui/icons/MapOutlined';
import useColumnFilter from '../../../../components/TableFilter/useColumnFilter';
import { useTranslation } from 'react-i18next';

export default function ListOrMap() {
  const { t } = useTranslation();
  const { value, setFilter } = useColumnFilter('listOrMap');
  const isMap = value === 'map';

  return (
    <Card className="flex mb2">
      {isMap && (
        <Button
          fullWidth
          startIcon={<ListIcon fontSize="small" />}
          children={t('filter_list')}
          onClick={() => setFilter()}
        />
      )}

      {!isMap && (
        <Button
          fullWidth
          startIcon={<MapIcon fontSize="small" />}
          children={t('filter_map')}
          onClick={() => setFilter('map')}
        />
      )}
    </Card>
  );
}
