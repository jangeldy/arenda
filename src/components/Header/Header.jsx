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
          <div className="web-site-width flex items-center px3">
            <div className="flex items-center">
              <Logo to={paths.homePage} children={'Lodger'} />
              <Button className="ml4" small>Нур-Султан</Button>
            </div>
            <CenterBlock>
              <Button className="ml2" success contained children="Сдать квартиру" />
              <Button className="ml2" outlined children="Войти" />
            </CenterBlock>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
