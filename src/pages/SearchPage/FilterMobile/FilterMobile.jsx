import React, { useState } from 'react';
import Dialog from '../../../components/Dialog';
import {
  Button,
  Checkbox as MuiCheckbox,
  FormControlLabel,
  Divider,
  TextField,
  useTheme,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Row from '../../../components/Row';
import { Dictionary } from '../../../_helpers/constants';
import { ReactComponent as FilterDarkIcon } from '../filterIconDark.svg';
import { ReactComponent as FilterIcon } from '../filterIcon.svg';
import IconButton from '@material-ui/core/IconButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import Price from './Price';

function FilterMobile() {
  const theme = useTheme();
  const { t } = useTranslation();
  const [property, setProperty] = useState();
  const [rooms, setRooms] = useState([]);
  const [term, setTerm] = useState();
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
    <div style={{ width: '100%' }}>
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
      <IconButton
        color="primary"
        style={{ marginRight: -8 }}
        onClick={() => setOpen(true)}
      >
        {theme.isDark ? <FilterDarkIcon /> : <FilterIcon />}
      </IconButton>
      <Dialog
        open={open}
        fullScreen
        handleClose={() => setOpen(false)}
        title={
          <div>
            <Button style={{ position: 'absolute', left: 12, top: 12 }}>Очистить</Button>
            {t('filter_filters')}
          </div>
        }
        fullWidth
        maxWidth="md"
        PaperProps={{ style: { maxWidth: 780 } }}
        content={
          <div className="pt1 pb3">
            <div className="flex flex-wrap">
              {/* ТИП ЖИЛЬЯ */}
              <ToggleButtonGroup
                exclusive
                style={{ width: '100%', marginTop: 10 }}
                value={property}
                onChange={(e, value) => setProperty(value)}
              >
                <ToggleButton value="flat" children={t('filter_flat')} />
                <ToggleButton value="room" children={t('filter_room')} />
              </ToggleButtonGroup>

              {/* КОЛИЧЕСТВО КОМНАТЫ */}
              <ToggleButtonGroup
                style={{ width: '100%', marginTop: 10 }}
                value={rooms}
                onChange={(ev, value) => setRooms(value)}
              >
                <ToggleButton value="1" children="1" />
                <ToggleButton value="2" children="2" />
                <ToggleButton value="3" children="3" />
                <ToggleButton value="4+" children="4+" />
              </ToggleButtonGroup>

              {/* СРОК АРЕНДЫ */}
              <ToggleButtonGroup
                exclusive
                style={{ width: '100%', marginTop: 10 }}
                value={term}
                onChange={(ev, value) => setTerm(value)}
              >
                <ToggleButton value="month" children={t('filter_termMonth')} />
                <ToggleButton value="day" children={t('filter_termDay')} />
                <ToggleButton value="hour" children={t('filter_termHour')} />
              </ToggleButtonGroup>
            </div>
            {/*** ЦЕНА ***/}
            <Price/>

            {/*** КВАРТИРА ***/}
            <Divider style={{ margin: '20px 0' }} />
            <h2 children={t('filter_apartment')} />
            {/* ПЛОЩАДЬ */}
            <Row label={t('filter_area')}>
              <div className="flex items-center mt1">
                <TextField
                  fullWidth
                  label={t('filter_from')}
                  value={areaFrom}
                  onChange={(event, value) => setAreaFrom(value)}
                />
                <TextField
                  fullWidth
                  label={t('filter_to')}
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
                  value={floorFrom}
                  onChange={(event, value) => setFloorFrom(value)}
                />
                <TextField
                  fullWidth
                  label={t('filter_to')}
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
                  value={houseFloorFrom}
                  onChange={(event, value) => setHouseFloorFrom(value)}
                />
                <TextField
                  fullWidth
                  label={t('filter_to')}
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
                  value={yearBuiltFrom}
                  onChange={(event, value) => setYearBuiltFrom(value)}
                />
                <TextField
                  fullWidth
                  label={t('filter_to')}
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
                <Item key={item.code} {...item} />
              ))}
            </div>
            {/*** УДОБСТВА ***/}
            <Divider style={{ margin: '20px 0' }} />
            <h2 children={t('filter_facilities')} />
            <div className="flex flex-wrap">
              {Dictionary.facilities.map((item) => (
                <Item key={item.code} {...item} />
              ))}
            </div>
            {/*** ПРАВИЛА ДОМА ***/}
            <Divider style={{ margin: '20px 0' }} />
            <h2 children={t('filter_houseRules')} />
            <div className="flex flex-wrap">
              {Dictionary.houseRules.map((item) => (
                <Item key={item.code} {...item} />
              ))}
            </div>
          </div>
        }
        actions={
          <Button
            fullWidth
            className="m1"
            variant="contained"
            color="primary"
            size="large"
          >
            Показать 11 389 объявлении
          </Button>
        }
      />
    </>
  );
}

export default FilterMobile;
