import React, { useState } from 'react';
import './FilterTranslate';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { useTranslation } from 'react-i18next';
import Price from './Price';
import OtherFilters from './OtherFilters';

export default function Filter() {
  const { t } = useTranslation();
  const [property, setProperty] = useState();
  const [rooms, setRooms] = useState([]);
  const [term, setTerm] = useState();

  return (
    <div className="flex flex-wrap">
      {/* ТИП ЖИЛЬЯ */}
      <ToggleButtonGroup
        exclusive
        style={{ marginRight: 10, marginTop: 10 }}
        value={property}
        onChange={(e, value) => setProperty(value)}
      >
        <ToggleButton value="flat" children={t('filter_flat')} />
        <ToggleButton value="room" children={t('filter_room')} />
      </ToggleButtonGroup>

      {/* КОЛИЧЕСТВО КОМНАТЫ */}
      <ToggleButtonGroup
        style={{ marginRight: 10, marginTop: 10 }}
        value={rooms}
        onChange={(ev, value) => setRooms(value)}
      >
        <ToggleButton value="1" children={<span className="number-font">1</span>} />
        <ToggleButton value="2" children={<span className="number-font">2</span>} />
        <ToggleButton value="3" children={<span className="number-font">3</span>} />
        <ToggleButton value="4+" children={<span className="number-font">4+</span>} />
      </ToggleButtonGroup>

      {/* СРОК АРЕНДЫ */}
      <ToggleButtonGroup
        exclusive
        style={{ marginRight: 10, marginTop: 10 }}
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
  );
}
