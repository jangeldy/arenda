import { useEffect, useState } from 'react';
import React from 'react';
import useColumnFilter from '../useColumnFilter';
import InputAdornment from '@material-ui/core/InputAdornment';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { useTranslation } from 'react-i18next';

export default function FilterInputField({
  name,
  type,
  queryIndex = '',
  placeholder,
  startAdornment,
  ...rest
}) {
  const { t } = useTranslation();
  const filter = useColumnFilter(name, queryIndex);
  const [timeOutId, registerTimeOut] = useState(null);
  const [value, setValue] = useState('');
  const textType = type === 'text';

  useEffect(() => {
    setValue(filter.value || '');
    // eslint-disable-next-line
  }, []);

  const clear = () => {
    filter.setFilter(null);
    setValue('');
  };

  const handleChange = value => {
    if (textType && value.length <= 2) {
      if (filter.value) {
        clearTimeout(timeOutId);
        filter.setFilter(null);
      }
      setValue(value);
    } else {
      clearTimeout(timeOutId);
      registerTimeOut(
        setTimeout(() => {
          filter.setFilter(value === '' ? null : value);
        }, 1000)
      );
      setValue(value);
    }
  };

  const inputProps = {
    startAdornment: startAdornment && (
      <InputAdornment position="start">{startAdornment}</InputAdornment>
    ),
    endAdornment: value.length > 0 && (
      <InputAdornment position="end">
        <IconButton onClick={clear} size="small">
          <CloseIcon fontSize="small" />
        </IconButton>
      </InputAdornment>
    )
  };

  return (
    <div style={{ width: '100%' }}>
      <TextField
        fullWidth
        placeholder={placeholder}
        {...rest}
        value={value}
        InputProps={inputProps}
        onChange={e => handleChange(e.target.value)}
        inputProps={{ style: { paddingRight: 0 } }}
      />
      {textType && value.length <= 2 && value.length > 0 && (
        <div className="center" style={{ color: 'red' }}>
          {t('columnsFilters_tableFilter_minSymbol')}
        </div>
      )}
    </div>
  );
}
