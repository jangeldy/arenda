import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';

function TermType() {
  const { t } = useTranslation();
  const [term, setTerm] = useState();

  return (
    <ToggleButtonGroup
      exclusive
      style={{ width: '100%', marginTop: 10 }}
      value={term}
      onChange={(ev, value) => setTerm(value)}
    >
      <ToggleButton value="month" children={t('filter_termMonth')} />
      <ToggleButton value="day" children={t('filter_termDay')} />
      <ToggleButton value="hour" children={t('filter_termHour')} />
    </ToggleButtonGroup>
  );
}

export default TermType;
