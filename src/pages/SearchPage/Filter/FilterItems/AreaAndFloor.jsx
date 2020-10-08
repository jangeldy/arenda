import React from 'react';
import Input from '@material-ui/core/TextField';
import Text from '../../../../components/Text';
import { useTranslation } from 'react-i18next';
import useColumnFilter from '../../../../components/TableFilter/useColumnFilter';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function AreaAndFloor() {
  const { t } = useTranslation();

  const af = useColumnFilter('area');
  const area = af.value || [];

  const ff = useColumnFilter('floor');
  const floor = ff.value || [];

  return (
    <div>
      <div>
        <Text text={t('filter_area')} />
        <div className="flex items-center mt1">
          <Input
            label={t('filter_from')}
            inputProps={{ className: 'number-font' }}
            value={area[0]}
            onChange={(event) => {
              af.setFilter([event.target.value, area[1]]);
            }}
          />
          <Input
            label={t('filter_to')}
            inputProps={{ className: 'number-font' }}
            style={{ marginLeft: 10 }}
            value={area[1]}
            onChange={(event) => {
              af.setFilter([area[0], event.target.value]);
            }}
          />
        </div>
      </div>

      <div className="mt1 mb1">
        <Text text={t('filter_floor')} />
        <div className="flex items-center">
          <Input
            label={t('filter_from')}
            inputProps={{ className: 'number-font' }}
            value={floor[0]}
            onChange={(event) => {
              ff.setFilter([event.target.value, floor[1]]);
            }}
          />
          <Input
            label={t('filter_to')}
            inputProps={{ className: 'number-font' }}
            style={{ marginLeft: 10 }}
            value={floor[1]}
            onChange={(event) => {
              ff.setFilter([floor[0], event.target.value]);
            }}
          />
        </div>
      </div>
    </div>
  );
}
