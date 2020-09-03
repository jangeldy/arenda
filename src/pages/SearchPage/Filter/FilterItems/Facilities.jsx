import React from 'react';
import Text from '../../../../components/Text';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useColumnFilter from '../../../../components/TableFilter/useColumnFilter';

export default function Facilities() {
  const { t } = useTranslation();
  const { value, setFilter } = useColumnFilter('facilities');
  const facilities = value || [];

  const CheckBox = ({ name }) => (
    <div>
      <FormControlLabel
        label={<span style={{ fontSize: '15px' }}>{t(`filter_${name}`)}</span>}
        control={<MuiCheckbox color="primary" checked={facilities.includes(name)} />}
        onChange={() => {
          facilities.includes(name)
            ? setFilter(facilities.filter((item) => item !== name))
            : setFilter([...facilities, name]);
        }}
      />
    </div>
  );

  return (
    <div className="mt1">
      <Text text={t('filter_facilities')} />
      <div>
        <CheckBox name="internet" />
        <CheckBox name="washer" />
        <CheckBox name="refrigerator" />
        <CheckBox name="dishwasher" />
        <CheckBox name="iron" />
        <CheckBox name="hairDryer" />
        <CheckBox name="furniture" />
        <CheckBox name="tv" />
        <CheckBox name="conditioning" />
        <CheckBox name="balcony" />
        <CheckBox name="closedArea" />
      </div>
    </div>
  );
}
