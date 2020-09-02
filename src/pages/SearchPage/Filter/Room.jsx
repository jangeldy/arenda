import React from 'react';
import { Button } from '@material-ui/core';

const Room = ({ room, rooms, setRooms, ...rest }) => {
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
};
export default Room;
