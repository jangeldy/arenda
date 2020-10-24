import React, { useState } from 'react';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';

function RoomCount() {
  const [rooms, setRooms] = useState([]);

  return (
    <ToggleButtonGroup
      style={{ width: '100%', marginTop: 10 }}
      value={rooms}
      onChange={(ev, value) => setRooms(value)}
    >
      <ToggleButton value="Студия" children="Студия" />
      <ToggleButton value="1" children="1" />
      <ToggleButton value="2" children="2" />
      <ToggleButton value="3" children="3" />
      <ToggleButton value="4+" children="4+" />
    </ToggleButtonGroup>
  );
}

export default RoomCount;
