import React from 'react';
import { useTranslation } from 'react-i18next';
import useColumnFilter from '../../../../components/TableFilter/useColumnFilter';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox as MuiCheckbox,
  FormControlLabel,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    <Accordion elevation={0}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {t('filter_features')}
      </AccordionSummary>
      <AccordionDetails>
        <CheckBox name="canSmoke" />
        <CheckBox name="forEvents" />
        <CheckBox name="animalsAllowed" />
        <CheckBox name="forChildren" />
      </AccordionDetails>
    </Accordion>
  );
}
