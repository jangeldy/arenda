import React from 'react';
import { history } from '../_helpers/history';
import { RecoilRoot } from 'recoil';
import ThemeProvider from '../components/ThemeProvider/ThemeProvider';
import PickerProvider from '../components/DatePicker/PickerProvider';
import Root from './Root';
import { Router } from 'react-router-dom';
import '../_helpers/Translate';

export default function App() {
  return (
    <RecoilRoot>
      <Router history={history}>
        <ThemeProvider>
          <PickerProvider>
            <Root />
          </PickerProvider>
        </ThemeProvider>
      </Router>
    </RecoilRoot>
  );
}
