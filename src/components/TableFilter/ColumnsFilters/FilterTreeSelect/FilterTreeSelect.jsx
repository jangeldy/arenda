import React from 'react';
import useColumnFilter from '../../useColumnFilter';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import TreeSelect from '../../../TreeSelect/TreeSelect';
import useTree from './useTree';

function FilterTreeSelect({ name, lang, options, queryIndex = '', lookupId }) {
  const { value, setFilter } = useColumnFilter(name, queryIndex);
  const { tree, onExpand, loadingArr } = useTree({
    value: value,
    lookupId: lookupId,
    options: [
      {
        code: value
      }
    ]
  });

  const clearFiled = value && {
    IconComponent: () => (
      <IconButton
        onClick={() => setFilter(null)}
        size="small"
        style={{ marginRight: 5 }}
        children={<CloseIcon fontSize="small" />}
      />
    )
  };

  return (
    <TreeSelect
      lookupId={lookupId}
      loadingArr={loadingArr}
      onExpand={onExpand}
      fullWidth
      withoutForm
      data={options || tree}
      value={value || ''}
      onChange={value => setFilter(value)}
      clearFiled={clearFiled}
    />
  );
}

export default FilterTreeSelect;
