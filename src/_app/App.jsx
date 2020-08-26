import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../_helpers/store';
import { history } from '../_helpers/history';
import ThemeProvider from '../components/ThemeProvider/ThemeProvider';
import DatePickerProvider from '../components/DatePickerProvider/DatePickerProvider';
import Root from './Root';
import { Router } from 'react-router-dom';
import '../_helpers/Translate';
import AppErrorMessage from '../components/AppErrorMessage';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider>
          <DatePickerProvider>
            <AppErrorMessage>
              <Root />
            </AppErrorMessage>
          </DatePickerProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}
