import React, { useCallback, useEffect, useState } from 'react';
import { KeyboardDateTimePicker } from '@material-ui/pickers';
import useColumnFilter from '../useColumnFilter';
import CloseIcon from '@material-ui/icons/Close';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { useTranslation } from 'react-i18next';

function FilterDatePicker({ name, style }) {
  const { i18n } = useTranslation();
  const { value: filterValue, setFilter } = useColumnFilter(name);
  const [value, setValue] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    if (filterValue && !value) {
      setValue(filterValue);
    }
    // eslint-disable-next-line
  }, [filterValue, setValue]);

  const textFieldComponent = useCallback(props => {
    return (
      <TextField
        {...props}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {props.value && (
                <IconButton
                  className="show-on-hover"
                  onClick={() => {
                    setFilter(null);
                    setValue(null);
                  }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              )}
              {props.InputProps.endAdornment.props.children}
            </InputAdornment>
          )
        }}
      />
    );
    // eslint-disable-next-line
  }, []);

  return (
    <KeyboardDateTimePicker
      name={name}
      value={value}
      error={!!error}
      onError={error => setError(error)}
      variant="inline"
      format="DD.MM.YYYY HH:mm"
      autoOk
      invalidDateMessage={
        i18n.language === 'ru' ? 'Недопустимый формат даты' : 'Қате күн мәні'
      }
      minDateMessage={
        i18n.language === 'ru'
          ? 'Дата не должна быть раньше минимальной даты'
          : 'Қате күн мәні'
      }
      maxDateMessage={
        i18n.language === 'ru'
          ? 'Дата не должна быть после максимальной даты'
          : 'Қате күн мәні'
      }
      onChange={(date, dateString) => {
        setValue(
          date && date.isValid() ? date.format('YYYY-MM-DDTHH:mm:ss') : dateString
        );
        setFilter(date && date.isValid() ? date.format('YYYY-MM-DDTHH:mm:ss') : null);
      }}
      TextFieldComponent={textFieldComponent}
      style={style}
    />
  );
}

export default FilterDatePicker;
