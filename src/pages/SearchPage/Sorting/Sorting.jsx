import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SortingTranslate';
import InputBase from '@material-ui/core/InputBase';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import MapIcon from '@material-ui/icons/MapOutlined';

function Sorting() {
  const { t } = useTranslation();
  const [sorting, setSorting] = useState('date');
  return (
    <div className="flex justify-between mt2">
      <Select
        value={sorting}
        onChange={(e) => setSorting(e.target.value)}
        SelectDisplayProps={{ style: { paddingLeft: 5, borderRadius: 12 } }}
        input={<InputBase />}
      >
        <MenuItem value="date">{t('sorting_byDateAdded')}</MenuItem>
        <MenuItem value="price">{t('sorting_byPrice')}</MenuItem>
        <MenuItem value="area">{t('sorting_byArea')}</MenuItem>
      </Select>
      <Button startIcon={<MapIcon />}>Показать на карте</Button>
    </div>
  );
}

export default Sorting;
