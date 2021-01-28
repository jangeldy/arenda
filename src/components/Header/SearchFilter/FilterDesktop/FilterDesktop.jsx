import React, { useState } from 'react';
import './FilterTranslate';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { useTranslation } from 'react-i18next';
import Price from './Price';
import OtherFilters from './OtherFilters';

export default function FilterDesktop() {
  const { t } = useTranslation();
  const [property, setProperty] = useState();
  const [rooms, setRooms] = useState([]);
  const [term, setTerm] = useState();
  const style = { margin: 5, flexGrow: 1 };

  return (
    <div className="flex flex-wrap desktop" style={{ marginLeft: -5, marginRight: -5 }}>
      <div className="flex" style={{ flexGrow: 1 }}>
        {/* ТИП ЖИЛЬЯ */}
        <ToggleButtonGroup
          exclusive
          style={style}
          value={property}
          onChange={(e, value) => setProperty(value)}
        >
          <ToggleButton value="flat" children={t('filter_flat')} />
          <ToggleButton value="room" children={t('filter_room')} />
        </ToggleButtonGroup>

        {/* КОЛИЧЕСТВО КОМНАТЫ */}
        <ToggleButtonGroup
          style={style}
          value={rooms}
          onChange={(ev, value) => setRooms(value)}
        >
          <ToggleButton value="1" children="1" />
          <ToggleButton value="2" children="2" />
          <ToggleButton value="3" children="3" />
          <ToggleButton value="4+" children="4+" />
        </ToggleButtonGroup>
      </div>

      <div className="flex" style={{ flexGrow: 1 }}>
        {/* СРОК АРЕНДЫ */}
        <ToggleButtonGroup
          exclusive
          style={style}
          value={term}
          onChange={(ev, value) => setTerm(value)}
        >
          <ToggleButton value="month" children={t('filter_termMonth')} />
          <ToggleButton value="day" children={t('filter_termDay')} />
          <ToggleButton value="hour" children={t('filter_termHour')} />
        </ToggleButtonGroup>

        {/* ЦЕНА */}
        <Price />

        {/* ДРУГИЕ ФИЛЬТРЫ */}
        <OtherFilters />
      </div>
    </div>
  );
}
