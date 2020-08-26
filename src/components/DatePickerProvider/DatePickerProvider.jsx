import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import 'moment/locale/kk';
import 'moment/locale/ru';
import { useTranslation } from 'react-i18next';


export default function DatePickerProvider({ children }) {
  const { i18n } = useTranslation();
  return (
    <MuiPickersUtilsProvider utils={MomentUtils} locale={i18n.language}>
      {children}
    </MuiPickersUtilsProvider>
  );
}
