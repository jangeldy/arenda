import React from 'react';
import Text from '../../../../components/Text';
import { useTranslation } from 'react-i18next';
import useColumnFilter from '../../../../components/TableFilter/useColumnFilter';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@material-ui/core';

export default function Features() {
  const { t } = useTranslation();
  const { value, setFilter } = useColumnFilter('features');
  const features = value || [];

  const CheckBox = ({ name }) => (
    <div>
      <FormControlLabel
        label={<span style={{ fontSize: '15px' }}>{t(`filter_${name}`)}</span>}
        control={<MuiCheckbox color="primary" checked={features.includes(name)} />}
        onChange={() => {
          features.includes(name)
            ? setFilter(features.filter((item) => item !== name))
            : setFilter([...features, name]);
        }}
      />
    </div>
  );

  return (
    <div className="mt1">
      <Text text={t('filter_features')} />
      <div>
        <CheckBox name="canSmoke" />
        <CheckBox name="forEvents" />
        <CheckBox name="animalsAllowed" />
        <CheckBox name="forChildren" />
      </div>
    </div>
  );
}
