import React, { useState } from 'react';
import { Divider, InputAdornment, TextField, Typography } from '@material-ui/core';
import PriceChart from '../Filter/PriceChart';
import Slider from '../../../components/Slider';
import { useTranslation } from 'react-i18next';

function Price() {
  const { t } = useTranslation();
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(500000);

  return (
    <>
      <Divider style={{ margin: '20px 0' }} />
      <h2 children={t('filter_features')} />
      <div>
        <Typography>Средняя цена за ночь: ₸ 150 000</Typography>
        <div className="mt3">
          <PriceChart priceFrom={priceFrom} priceTo={priceTo} />
          <Slider
            value={[priceFrom, priceTo]}
            onChange={(event, newPrice) => {
              setPriceFrom(newPrice[0]);
              setPriceTo(newPrice[1]);
            }}
            max={500000}
          />
        </div>
        <div className="flex mt2 items-center">
          <TextField
            fullWidth
            label={t('filter_from')}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <span className="color-primary">₸</span>
                </InputAdornment>
              ),
            }}
            value={priceFrom}
            onBlur={() => {
              if (priceFrom > priceTo) {
                setPriceTo(priceFrom);
              }
            }}
            onChange={(event, value) => setPriceFrom(value)}
          />
          <TextField
            fullWidth
            label={t('filter_to')}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <span className="color-primary">₸</span>
                </InputAdornment>
              ),
            }}
            style={{ marginLeft: 10 }}
            value={priceTo === 500000 ? '500000+' : priceTo}
            onBlur={() => {
              if (priceTo < priceFrom) {
                setPriceFrom(priceTo);
              }
              if (parseInt(priceTo) > 300000) {
                setPriceTo(300000);
              }
            }}
            onChange={(event, value) => setPriceTo(value)}
          />
        </div>
      </div>
    </>
  );
}

export default Price;
