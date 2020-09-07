import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import useColumnFilter from '../../../../components/TableFilter/useColumnFilter';
import { useTranslation } from 'react-i18next';
import Text from '../../../../components/Text';

export default function RoomOrFlat() {
  const { t } = useTranslation();
  const isRoom = useColumnFilter('isRoom');
  const rooms = useColumnFilter('rooms');
  const value = rooms.value || [];

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
          {['1', '2', '3', '4+'].map((code) => (
            <Button
              key={code}
              color={value.includes(code) ? 'primary' : 'default'}
              children={code}
              onClick={() => {
                if (value.includes(code)) {
                  rooms.setFilter(value.filter((item) => item !== code));
                } else {
                  rooms.setFilter([...value, code]);
                }
              }}
            />
          ))}
        </ButtonGroup>
      </div>
    </>
  );
}
