import React, { useState } from 'react';
import useWidthStyle from '../../components/_hooks/useWidthStyle';
import { useTranslation } from 'react-i18next';
import {
  Checkbox as MuiCheckbox,
  Divider,
  FormControlLabel,
  TextField,
} from '@material-ui/core';
import Row from '../../components/Row';
import { DDM } from '../../_helpers/constants';
import YandexMap from '../AdvertPage/YandexMap/YandexMap';

function CreatePage(props) {
  const widthStyle = useWidthStyle();
  const { t } = useTranslation();
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
        control={<MuiCheckbox color="secondary" checked={items.includes(code)} />}
        onChange={() => {
          items.includes(code)
            ? setItems(items.filter((item) => item !== code))
            : setItems([...items, code]);
        }}
      />
    </div>
  );

  return (
    <div className="py3" style={widthStyle}>
      <div className="fs-24 fw-6">Новое объявление</div>

      <div className="pb2 fs-16">
        <Divider style={{ margin: '30px 0' }} />
        <h2 children="Местоположение" />
        <div className="mb1">Нур-Султан, Казахстан</div>
        <div className="mt3">
          <YandexMap />
        </div>

        {/*** КВАРТИРА ***/}
        <h2 children={t('filter_apartment')} />

        {/* ПЛОЩАДЬ */}
        <Row label={t('filter_area')}>
          <div className="flex items-center mt1">
            <TextField
              color="secondary"
              fullWidth
              label={t('filter_from')}
              value={areaFrom}
              onChange={(event, value) => setAreaFrom(value)}
            />
            <TextField
              fullWidth
              color="secondary"
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
              color="secondary"
              label={t('filter_from')}
              value={floorFrom}
              onChange={(event, value) => setFloorFrom(value)}
            />
            <TextField
              fullWidth
              color="secondary"
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
              color="secondary"
              label={t('filter_from')}
              value={houseFloorFrom}
              onChange={(event, value) => setHouseFloorFrom(value)}
            />
            <TextField
              fullWidth
              color="secondary"
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
              color="secondary"
              label={t('filter_from')}
              value={yearBuiltFrom}
              onChange={(event, value) => setYearBuiltFrom(value)}
            />
            <TextField
              fullWidth
              color="secondary"
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
              color="secondary"
              placeholder={t('filter_complex')}
              value={complex}
              onChange={(event, value) => setComplex(value)}
            />
          </div>
        </Row>

        {/*** ОСОБЕННОСТИ ***/}
        <Divider style={{ margin: '30px 0 20px 0' }} />
        <h2 children={t('filter_features')} />
        <div className="flex flex-wrap">
          {DDM.features.map((item) => (
            <Item key={item.code} {...item} />
          ))}
        </div>

        {/*** УДОБСТВА ***/}
        <Divider style={{ margin: '30px 0 20px 0' }} />
        <h2 children={t('filter_facilities')} />
        <div className="flex flex-wrap">
          {DDM.facilities.map((item) => (
            <Item key={item.code} {...item} />
          ))}
        </div>

        {/*** ПРАВИЛА ДОМА ***/}
        <Divider style={{ margin: '30px 0 20px 0' }} />
        <h2 children={t('filter_houseRules')} />
        <div className="flex flex-wrap">
          {DDM.houseRules.map((item) => (
            <Item key={item.code} {...item} />
          ))}
        </div>

        {/*** БЕЗОПАСНОСТЬ ***/}
        <Divider style={{ margin: '30px 0 20px 0' }} />
        <h2 children={t('filter_security')} />
        <div className="flex flex-wrap">
          {DDM.security.map((item) => (
            <Item key={item.code} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreatePage;
