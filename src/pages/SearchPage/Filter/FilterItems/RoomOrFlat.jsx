import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import useColumnFilter from '../../../../components/TableFilter/useColumnFilter';
import { useTranslation } from 'react-i18next';
import Text from '../../../../components/Text';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';

export default function RoomOrFlat() {
  const { t } = useTranslation();
  const property = useColumnFilter('property');
  const rooms = useColumnFilter('rooms');

  return (
    <>
      {/*<ButtonGroup fullWidth variant="contained">
        <Button
          onClick={() => isRoom.setFilter()}
          color={!isRoom.value ? 'primary' : 'default'}
          children={t('filter_flat')}
        />
        <Button
          onClick={() => isRoom.setFilter('flat')}
          color={isRoom.value ? 'primary' : 'default'}
          children={t('filter_room')}
        />
      </ButtonGroup>*/}
      <ToggleButtonGroup
        className="fullWidth"
        exclusive
        value={property.value}
        onChange={(e, value) => property.setFilter(value)}
      >
        <ToggleButton value="flat" children={t('filter_flat')} />
        <ToggleButton value="room" children={t('filter_room')} />
      </ToggleButtonGroup>

      <div className="mt2">
        <Text text={t('filter_roomCount')} />
        <ToggleButtonGroup
          className="fullWidth"
          value={rooms.value || []}
          onChange={(ev, value) => rooms.setFilter(value)}
        >
          <ToggleButton value="1" children={<span className="number-font">1</span>} />
          <ToggleButton value="2" children={<span className="number-font">2</span>} />
          <ToggleButton value="3" children={<span className="number-font">3</span>} />
          <ToggleButton value="4+" children={<span className="number-font">4+</span>} />
        </ToggleButtonGroup>
      </div>
    </>
  );
}
