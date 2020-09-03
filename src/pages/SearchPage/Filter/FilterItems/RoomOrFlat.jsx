import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import useColumnFilter from '../../../../components/TableFilter/useColumnFilter';
import { useTranslation } from 'react-i18next';
import Text from '../../../../components/Text';

export default function RoomOrFlat() {
  const { t } = useTranslation();
  const isRoom = useColumnFilter('isRoom');
  const rooms = useColumnFilter('rooms');
  const roomsValue = rooms.value || ['1', '2'];

  return (
    <>
      <ButtonGroup fullWidth variant="contained" disableElevation>
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
      </ButtonGroup>
      <div className="mt2">
        <Text text={t('filter_roomCount')} />
        <ButtonGroup fullWidth variant="contained" disableElevation>
          <Room room="1" rooms={roomsValue} setRooms={rooms.setFilter} />
          <Room room="2" rooms={roomsValue} setRooms={rooms.setFilter} />
          <Room room="3" rooms={roomsValue} setRooms={rooms.setFilter} />
          <Room room="4+" rooms={roomsValue} setRooms={rooms.setFilter} />
        </ButtonGroup>
      </div>
    </>
  );
}

function Room({ room, rooms, setRooms, ...rest }) {
  const onClick = () => {
    if (rooms.includes(room)) {
      setRooms(rooms.filter((item) => item !== room));
    } else {
      setRooms([...rooms, room]);
    }
  };
  return (
    <Button
      {...rest}
      onClick={onClick}
      color={rooms.includes(room) ? 'primary' : 'default'}
      children={room}
    />
  );
}
