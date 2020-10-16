import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SortingTranslate';
import InputBase from '@material-ui/core/InputBase';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function Sorting() {
  const { t } = useTranslation();
  const [sorting, setSorting] = useState('date');
  return (
    <Select
      value={sorting}
      onChange={(e) => setSorting(e.target.value)}
      SelectDisplayProps={{ style: { paddingLeft: 10, borderRadius: 12 } }}
      input={<InputBase />}
    >
      <MenuItem value="date">{t('sorting_byDateAdded')}</MenuItem>
      <MenuItem value="price">{t('sorting_byPrice')}</MenuItem>
      <MenuItem value="area">{t('sorting_byArea')}</MenuItem>
    </Select>
  );
}

export default Sorting;
