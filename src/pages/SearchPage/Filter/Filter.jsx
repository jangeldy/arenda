import React, { useState } from 'react';
import { Wrapper } from './FilterStyle';
import Card from '@material-ui/core/Card';
import { useLocation } from 'react-router-dom';
import './FilterTranslate';
import Input from '@material-ui/core/InputBase/InputBase';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { useTranslation } from 'react-i18next';
import Price from './FilterItems/Price';
import { Button } from '@material-ui/core';

export default function Filter() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const { t } = useTranslation();
  const [property, setProperty] = useState();
  const [rooms, setRooms] = useState([]);
  const [priceFrom, setPriceFrom] = useState();
  const [priceTo, setPriceTo] = useState();

  /*
  <ListOrMap />
      <Card className="p3">
        <div className="flex">
          <RoomOrFlat />
          <AreaAndFloor />
        </div>
        <div className="flex">
          <PriceFromTo />
        </div>

        <Facilities />
        <Features />
      </Card>
  */

  return (
    <div className="mb3 mt3">
      <div className="flex">
        <div className="flex">
          <ToggleButtonGroup
            style={{ width: 200 }}
            exclusive
            value={property}
            onChange={(e, value) => setProperty(value)}
          >
            <ToggleButton value="flat" children={t('filter_flat')} />
            <ToggleButton value="room" children={t('filter_room')} />
          </ToggleButtonGroup>

          <ToggleButtonGroup
            style={{ width: 200, marginLeft: 10 }}
            value={rooms}
            onChange={(ev, value) => setRooms(value)}
          >
            <ToggleButton value="1" children={<span className="number-font">1</span>} />
            <ToggleButton value="2" children={<span className="number-font">2</span>} />
            <ToggleButton value="3" children={<span className="number-font">3</span>} />
            <ToggleButton value="4+" children={<span className="number-font">4+</span>} />
          </ToggleButtonGroup>
        </div>

        <Price />

        <Button variant="outlined" style={{ marginLeft: 10 }}>
          {t('filter_other')}
        </Button>
      </div>
    </div>
  );
}
