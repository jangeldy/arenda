import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox as MuiCheckbox,
  FormControlLabel,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useColumnFilter from '../../../../components/TableFilter/useColumnFilter';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    <Accordion elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        children={t('filter_facilities')}
      />
      <AccordionDetails>
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
      </AccordionDetails>
    </Accordion>
  );
}
