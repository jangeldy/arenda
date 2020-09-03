import React from 'react';
import Input from '@material-ui/core/OutlinedInput/OutlinedInput';
import { useTranslation } from 'react-i18next';
import useColumnFilter from '../../../../components/TableFilter/useColumnFilter';
import Text from '../../../../components/Text';

export default function FloorFromTo() {
  const { t } = useTranslation();
  const { value, setFilter } = useColumnFilter('floor');
  const floor = value || [];

  return (
    <div className="mt1">
      <Text text={t('filter_floor')} />
      <div className="flex items-center">
        <Text text={t('filter_from')} mr={5} />
        <Input
          value={floor[0]}
          onChange={(event) => setFilter([event.target.value, floor[1]])}
        />
        <Text text={t('filter_to')} ml={10} mr={5} />
        <Input
          value={floor[1]}
          onChange={(event) => setFilter([floor[0], event.target.value])}
        />
      </div>
    </div>
  );
}
