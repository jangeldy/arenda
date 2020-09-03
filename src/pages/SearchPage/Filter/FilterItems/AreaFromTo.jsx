import React from 'react';
import Input from '@material-ui/core/OutlinedInput/OutlinedInput';
import Text from '../../../../components/Text';
import { useTranslation } from 'react-i18next';
import useColumnFilter from '../../../../components/TableFilter/useColumnFilter';

export default function AreaFromTo() {
  const { t } = useTranslation();
  const { value, setFilter } = useColumnFilter('area');
  const area = value || [];

  return (
    <div className="mt1">
      <Text text={t('filter_area')} />
      <div className="flex items-center">
        <Text text={t('filter_from')} mr={5} />
        <Input
          value={area[0]}
          onChange={(event) => setFilter([event.target.value, area[1]])}
        />
        <Text text={t('filter_to')} ml={10} mr={5} />
        <Input
          value={area[1]}
          onChange={(event) => setFilter([area[0], event.target.value])}
        />
      </div>
    </div>
  );
}
