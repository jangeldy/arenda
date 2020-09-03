import React, { useState } from 'react';
import Slider from '../../../../components/Slider';
import Input from '@material-ui/core/OutlinedInput/OutlinedInput';
import Text from '../../../../components/Text';
import { useTranslation } from 'react-i18next';
import useColumnFilter from '../../../../components/TableFilter/useColumnFilter';
let timer = null;

export default function PriceFromTo() {
  const { t } = useTranslation();
  const filterPrice = useColumnFilter('price');
  const [price, setPrice] = useState(filterPrice.value || [0, 300000]);

  return (
    <div className="mt2">
      <Text text={t('filter_price')} />
      <Slider
        value={price}
        onChange={(event, newValue) => {
          setPrice(newValue);
          clearTimeout(timer);
          timer = setTimeout(function () {
            filterPrice.setFilter(newValue);
          }, 500);
        }}
        max={300000}
      />
      <div className="flex mt1 items-center">
        <Text text={t('filter_from')} mr={5} />
        <Input
          value={price[0]}
          onChange={(event) => filterPrice.setFilter([event.target.value, price[1]])}
        />
        <Text text={t('filter_to')} ml={10} mr={5} />
        <Input
          value={price[1] === 300000 ? price[1] + '+' : price[1]}
          onChange={(event) => filterPrice.setFilter([price[0], event.target.value])}
        />
      </div>
    </div>
  );
}
