import React, { useState } from 'react';
import Dialog from '../../../components/Dialog';
import {
  Button,
  Checkbox as MuiCheckbox,
  FormControlLabel,
  Divider,
  TextField,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Row from '../../../components/Row';
import { Dictionary } from '../../../_helpers/constants';

function OtherFilters() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [areaFrom, setAreaFrom] = useState();
  const [areaTo, setAreaTo] = useState();
  const [floorFrom, setFloorFrom] = useState();
  const [floorTo, setFloorTo] = useState();
  const [houseFloorFrom, setHouseFloorFrom] = useState();
  const [houseFloorTo, setHouseFloorTo] = useState();
  const [complex, setComplex] = useState();
  const [yearBuiltFrom, setYearBuiltFrom] = useState();
  const [yearBuiltTo, setYearBuiltTo] = useState();
  const [items, setItems] = useState([]);

  const Item = ({ code, ru_name }) => (
    <div style={{ width: '50%' }}>
      <FormControlLabel
        label={ru_name}
        control={<MuiCheckbox color="primary" checked={items.includes(code)} />}
        onChange={() => {
          items.includes(code)
            ? setItems(items.filter((item) => item !== code))
            : setItems([...items, code]);
        }}
      />
    </div>
  );

  return (
    <>
      <Button
        variant="outlined"
        style={{ marginLeft: 10 }}
        children={t('filter_other')}
        onClick={() => setOpen(true)}
      />
      <Dialog
        open={open}
        handleClose={() => setOpen(false)}
        title={t('filter_other')}
        fullWidth
        maxWidth="md"
        content={
          <div className="px3 pb2 fs-16">
            {/*** КВАРТИРА ***/}
            <h2 children={t('filter_apartment')} />

            {/* ПЛОЩАДЬ */}
            <Row label={t('filter_area')}>
              <div className="flex items-center mt1">
                <TextField
                  fullWidth
                  label={t('filter_from')}
                  inputProps={{ className: 'number-font' }}
                  value={areaFrom}
                  onChange={(event, value) => setAreaFrom(value)}
                />
                <TextField
                  fullWidth
                  label={t('filter_to')}
                  inputProps={{ className: 'number-font' }}
                  style={{ marginLeft: 10 }}
                  value={areaTo}
                  onChange={(event, value) => setAreaTo(value)}
                />
              </div>
            </Row>

            {/* ЭТАЖ */}
            <Row label={t('filter_floor')}>
              <div className="flex items-center mt1">
                <TextField
                  fullWidth
                  label={t('filter_from')}
                  inputProps={{ className: 'number-font' }}
                  value={floorFrom}
                  onChange={(event, value) => setFloorFrom(value)}
                />
                <TextField
                  fullWidth
                  label={t('filter_to')}
                  inputProps={{ className: 'number-font' }}
                  style={{ marginLeft: 10 }}
                  value={floorTo}
                  onChange={(event, value) => setFloorTo(value)}
                />
              </div>
            </Row>

            {/* ЭТАЖЕЙ В ДОМЕ */}
            <Row label={t('filter_houseFloor')}>
              <div className="flex items-center mt1">
                <TextField
                  fullWidth
                  label={t('filter_from')}
                  inputProps={{ className: 'number-font' }}
                  value={houseFloorFrom}
                  onChange={(event, value) => setHouseFloorFrom(value)}
                />
                <TextField
                  fullWidth
                  label={t('filter_to')}
                  inputProps={{ className: 'number-font' }}
                  style={{ marginLeft: 10 }}
                  value={houseFloorTo}
                  onChange={(event, value) => setHouseFloorTo(value)}
                />
              </div>
            </Row>

            {/* ГОД ПОСТРОЙКИ */}
            <Row label={t('filter_yearBuilt')}>
              <div className="flex items-center mt1">
                <TextField
                  fullWidth
                  label={t('filter_from')}
                  inputProps={{ className: 'number-font' }}
                  value={yearBuiltFrom}
                  onChange={(event, value) => setYearBuiltFrom(value)}
                />
                <TextField
                  fullWidth
                  label={t('filter_to')}
                  inputProps={{ className: 'number-font' }}
                  style={{ marginLeft: 10 }}
                  value={yearBuiltTo}
                  onChange={(event, value) => setYearBuiltTo(value)}
                />
              </div>
            </Row>

            {/* ЖИЛОЙ КОМПЛЕКС */}
            <Row label={t('filter_complex')}>
              <div className="flex items-center mt1">
                <TextField
                  fullWidth
                  placeholder={t('filter_complex')}
                  inputProps={{ className: 'number-font' }}
                  value={complex}
                  onChange={(event, value) => setComplex(value)}
                />
              </div>
            </Row>

            {/*** ОСОБЕННОСТИ ***/}
            <Divider style={{ margin: '20px 0' }} />
            <h2 children={t('filter_features')} />
            <div className="flex flex-wrap">
              {Dictionary.features.map((item) => (
                <Item {...item} />
              ))}
            </div>

            {/*** УДОБСТВА ***/}
            <Divider style={{ margin: '20px 0' }} />
            <h2 children={t('filter_facilities')} />
            <div className="flex flex-wrap">
              {Dictionary.facilities.map((item) => (
                <Item {...item} />
              ))}
            </div>

            {/*** ПРАВИЛА ДОМА ***/}
            <Divider style={{ margin: '20px 0' }} />
            <h2 children={t('filter_houseRules')} />
            <div className="flex flex-wrap">
              {Dictionary.houseRules.map((item) => (
                <Item {...item} />
              ))}
            </div>
          </div>
        }
        actions={
          <div className="p1 flex justify-between fullWidth">
            <Button>Очистить</Button>
            <Button variant="contained" color="primary" size="large">
              Показать 11 389 объявлении
            </Button>
          </div>
        }
      />
    </>
  );
}

export default OtherFilters;
