import React, { useState } from 'react';
import Slider from '../../../components/Slider';
import {
  TextField,
  Popover,
  Button,
  Typography,
  Divider,
  InputAdornment,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import PriceChart from './PriceChart';

export default function Price() {
  const { t } = useTranslation();
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(500000);
  const [anchorEl, setAnchorEl] = useState();

  return (
    <div style={{ marginRight: 10, marginTop: 10 }}>
      <Button
        variant="outlined"
        onClick={(event) => setAnchorEl(event.currentTarget)}
        children={t('filter_price')}
      />
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
            Средняя цена за ночь: ₸ 150 000
          </Typography>
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
        <Divider />
        <div className="p2 flex justify-between">
          <Button>Очистить</Button>
          <Button variant="contained" color="primary">
            Сохранить
          </Button>
        </div>
      </Popover>
    </div>
  );
}
