import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardDatePicker } from '@material-ui/pickers';
import Field from '../Form/Field';

function DatePicker(props) {
  const { withoutForm, name, onChange, value, lang, ...restProps } = props;

  return withoutForm ? (
    <KeyboardDatePicker
      name={name}
      variant="inline"
      disableToolbar
      strictCompareDates
      format="DD.MM.YYYY"
      autoOk
      KeyboardButtonProps={{ style: { marginRight: 0 } }}
      invalidDateMessage={lang === 'ru' ? 'Недопустимый формат даты' : 'Қате күн мәні'}
      onChange={date => onChange(date ? date.format('YYYY-MM-DDTHH:mm:ss') : '')}
      value={value}
      {...restProps}
    />
  ) : (
    <Field name={name}>
      {({ onChange, value, ...fieldProps }) => (
        <KeyboardDatePicker
          name={name}
          variant="inline"
          disableToolbar
          format="DD.MM.YYYY"
          autoOk
          KeyboardButtonProps={{ style: { marginRight: 0 } }}
          invalidDateMessage={
            lang === 'ru' ? 'Недопустимый формат даты' : 'Қате күн мәні'
          }
          onChange={date => onChange(date ? date.format('YYYY-MM-DDTHH:mm:ss') : '')}
          value={value || null}
          {...restProps}
          {...fieldProps}
        />
      )}
    </Field>
  );
}

DatePicker.propsTypes = {
  withoutForm: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired
};

DatePicker.defaultProps = {
  withoutForm: false
};

export default DatePicker;
