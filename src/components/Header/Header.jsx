import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import paths from '../../_helpers/paths';
import { Logo } from './HeaderStyle';
import './HeaderTranslate';
import Button from '../Button/Button';
import LocationIcon from '@material-ui/icons/NearMe';
import useLocalization from '../_hooks/useLocalization';

export default function Header() {
  const localization = useLocalization();

  return (
    <>
      <AppBar>
        <Toolbar style={{ padding: 0 }}>
          <div className="web-site-width flex items-center">
            <Logo to={paths.homePage} children={'Lodger'} />
            <div style={{ flexGrow: 1, textAlign: 'right' }}>
              <Button
                className="ml4"
                startIcon={<LocationIcon color="action" />}
                small
                children={localization.name}
              />
              <Button className="ml2" primary contained children="Сдать квартиру" />
              <Button className="ml2" outlined children="Войти" />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
