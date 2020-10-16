import React, { useState } from 'react';
import './FilterTranslate';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import Button from '@material-ui/core/Button';
import MapIcon from '@material-ui/icons/MapOutlined';
import { useTranslation } from 'react-i18next';
import Price from './Price';
import OtherFilters from './OtherFilters';

export default function Filter() {
  const { t } = useTranslation();
  const [property, setProperty] = useState();
  const [rooms, setRooms] = useState([]);

  return (
    <div className="mb3 mt3 flex justify-between">
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

        {/* PRICE */}
        <Price />

        {/* OTHER FILTERS */}
        <OtherFilters />
      </div>
      <Button startIcon={<MapIcon />}>Показать на карте</Button>
    </div>
  );
}
