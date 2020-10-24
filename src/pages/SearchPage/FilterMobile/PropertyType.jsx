import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';

function PropertyType() {
  const { t } = useTranslation();
  const [property, setProperty] = useState();

  return (
    <ToggleButtonGroup
      exclusive
      style={{ width: '100%', marginTop: 10 }}
      value={property}
      onChange={(e, value) => setProperty(value)}
    >
      <ToggleButton value="flat" children={t('filter_flat')} />
      <ToggleButton value="room" children={t('filter_room')} />
    </ToggleButtonGroup>
  );
}

export default PropertyType;
