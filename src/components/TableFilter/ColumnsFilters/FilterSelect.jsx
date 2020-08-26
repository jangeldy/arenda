import React from 'react';
import { Select, FormControl, IconButton, MenuItem } from '@material-ui/core';
import useDict from '../../_hooks/useDict';
import { compose } from 'redux';
import withTranslation from '../../_hoc/withTranslation';
import useColumnFilter from '../useColumnFilter';
import CloseIcon from '@material-ui/icons/Close';

function FilterSelect({ name, lang, dictCode, options, queryIndex = '' }) {
  const { value, setFilter } = useColumnFilter(name, queryIndex);
  const dict = useDict(dictCode);

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
    <FormControl fullWidth margin="none" className="left-align">
      <Select
        MenuProps={{ MenuListProps: { style: { maxWidth: 550, minWidth: 250 } } }}
        value={value || ''}
        onChange={e => setFilter(e.target.value)}
        SelectDisplayProps={{ style: { paddingRight: 0, paddingLeft: 8 } }}
        {...clearFiled}
      >
        {(options || dict).map(
          item =>
            item && (
              <MenuItem key={item.code} value={item.code}>
                {item[`${lang}_name`]}
              </MenuItem>
            )
        )}
      </Select>
    </FormControl>
  );
}

export default compose(withTranslation)(FilterSelect);
