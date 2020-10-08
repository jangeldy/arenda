import React from 'react';
import useTimeOutFilter from '../../../../components/TableFilter/useTimeOutFilter';
import { useTranslation } from 'react-i18next';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';

export default function RoomOrFlat() {
  const { t } = useTranslation();
  const property = useTimeOutFilter('property');
  const rooms = useTimeOutFilter('rooms');

  return (
    <div className="flex">
      <ToggleButtonGroup
        style={{ width: 200 }}
        exclusive
        value={property.value}
        onChange={(e, value) => property.onChange(value)}
      >
        <ToggleButton value="flat" children={t('filter_flat')} />
        <ToggleButton value="room" children={t('filter_room')} />
      </ToggleButtonGroup>

      <ToggleButtonGroup
        style={{ width: 200, marginLeft: 10 }}
        value={rooms.value || []}
        onChange={(ev, value) => rooms.onChange(value)}
      >
        <ToggleButton value="1" children={<span className="number-font">1</span>} />
        <ToggleButton value="2" children={<span className="number-font">2</span>} />
        <ToggleButton value="3" children={<span className="number-font">3</span>} />
        <ToggleButton value="4+" children={<span className="number-font">4+</span>} />
      </ToggleButtonGroup>
    </div>
  );
}
