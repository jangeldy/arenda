import React, { useRef, useState } from 'react';
import Slider from '../../Slider';
import {
  TextField,
  Popper,
  Button,
  Typography,
  Divider,
  InputAdornment,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import PriceChart from './PriceChart';
import DropDownIcon from '@material-ui/icons/ArrowDropDown';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export default function Price() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(500000);
  const anchorRef = useRef(null);

  return (
    <div className="sf-item">
      <Button
        ref={anchorRef}
        onClick={() => setOpen(!open)}
        style={{ justifyContent: 'space-between' }}
        fullWidth
        children={t('filter_price')}
        endIcon={<DropDownIcon />}
      />
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        transition
        disablePortal
        placement="bottom-start"
        style={{ marginTop: 10 }}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: 'center top' }}>
            <Paper variant="outlined" className="shadow">
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <div>
                  <div style={{ padding: 20 }}>
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
                        variant="outlined"
                        color="secondary"
                        label={t('filter_from')}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start" children="₸" />
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
                            <InputAdornment position="start" children="₸" />
                          ),
                        }}
                        color="secondary"
                        style={{ marginLeft: 10 }}
                        value={priceTo === 500000 ? '500000+' : priceTo}
                        onBlur={() => {
                          if (priceTo < priceFrom) {
                            setPriceFrom(priceTo);
                          }
                          if (parseInt(priceTo) > 500000) {
                            setPriceTo(500000);
                          }
                        }}
                        onChange={(event, value) => setPriceTo(value)}
                      />
                    </div>
                  </div>
                  <Divider />
                  <div className="p2 flex justify-between">
                    <Button>Очистить</Button>
                    <Button variant="contained" color="secondary">
                      Сохранить
                    </Button>
                  </div>
                </div>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
