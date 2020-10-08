import React from 'react';
import Input from '@material-ui/core/TextField';
import { useTranslation } from 'react-i18next';
import useTimeOutFilter from '../../../../components/TableFilter/useTimeOutFilter';

export default function PriceFromTo() {
  const { t } = useTranslation();
  const priceFrom = useTimeOutFilter('priceFrom');
  const priceTo = useTimeOutFilter('priceTo');

  return (
    <div className="flex mt2 items-center">
      <Input
        label={t('filter_priceFrom')}
        inputProps={{ className: 'number-font' }}
        value={priceFrom.value}
        onChange={priceFrom.onChange}
      />
      <Input
        label={t('filter_priceTo')}
        inputProps={{ className: 'number-font' }}
        style={{ marginLeft: 10 }}
        value={priceTo.value}
        onChange={priceTo.onChange}
      />
    </div>
  );
}
