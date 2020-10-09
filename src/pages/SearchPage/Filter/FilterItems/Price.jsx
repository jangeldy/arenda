import React, { useState } from 'react';
import Slider from '../../../../components/Slider';
import { TextField, Popover, Button, Typography } from '@material-ui/core';
import Text from '../../../../components/Text';
import { useTranslation } from 'react-i18next';

export default function Price() {
  const { t } = useTranslation();
  const [priceFrom, setPriceFrom] = useState();
  const [priceTo, setPriceTo] = useState();
  const [anchorEl, setAnchorEl] = useState();

  return (
    <div style={{ marginLeft: 10 }}>
      <Button variant="outlined" onClick={(event) => setAnchorEl(event.currentTarget)}>
        {t('filter_price')}
      </Button>
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        style={{ marginTop: 15 }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div style={{ padding: 20 }}>
          <Typography>
            Средняя цена за ночь: <span className="number-font">₸ 150 000</span>
          </Typography>

          <Slider
            value={[priceFrom, priceTo]}
            onChange={(event, newPrice) => {
              setPriceFrom(newPrice[0]);
              setPriceTo(newPrice[0]);
            }}
            max={300000}
          />
          <div className="flex mt2 items-center">
            <TextField
              label={t('filter_from')}
              inputProps={{ className: 'number-font' }}
              value={priceFrom}
              onBlur={() => {
                if (priceFrom > priceTo) {
                  setPriceTo(priceFrom);
                }
              }}
              onChange={(event, value) => setPriceFrom(value)}
            />
            <TextField
              label={t('filter_to')}
              inputProps={{ className: 'number-font' }}
              style={{ marginLeft: 10 }}
              value={priceTo}
              onBlur={() => {
                if (priceTo < priceFrom) {
                  setPriceFrom(priceTo);
                }
                if (parseInt(priceTo) > 300000) {
                  setPriceTo(priceTo);
                }
              }}
              onChange={(event, value) => setPriceTo(value)}
            />
          </div>
        </div>
      </Popover>
    </div>
  );
}
