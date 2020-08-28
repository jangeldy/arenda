import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import paths from '../../_helpers/paths';
import { CenterBlock, Logo } from './HeaderStyle';
import './HeaderTranslate';
import useLanguage from './useLanguage';
import Button from '../Button/Button';

export default function Header() {
  const { lang } = useLanguage();

  return (
    <>
      <AppBar position="fixed" elevation={1} color="default">
        <Toolbar style={{ padding: 0 }}>
          <div className="web-site-width flex items-center">
            <Logo to={paths.homePage} children={'Lodger'} />
            <CenterBlock />
            <div>
              <span>Нур-Султан</span>
              <Button className="ml2" primary contained children="Сдать квартиру" />
              <Button className="ml2" children="Войти" />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
