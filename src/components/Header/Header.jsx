import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import paths from '../../_helpers/paths';
import { CompanyName, useStyles } from './HeaderStyle';
import { Link } from 'react-router-dom';
import i18next from 'i18next';
import './HeaderTranslate';
import GlobalMessage from '../GlobalMessage';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { i18n } = useTranslation();
  const { langBtnStyle } = useStyles();
  useEffect(() => {
    let lang = localStorage.getItem('lang');
    if (lang && lang !== i18n.language) {
      i18next.changeLanguage(lang);
    } else {
      localStorage.setItem('lang', i18n.language);
    }
  }, [i18n]);

  return (
    <>
      <AppBar position="fixed" elevation={1} color="default" style={{ zIndex: 1300 }}>
        <Toolbar style={{ padding: 0 }}>
          <CompanyName>
            <Link to={paths.homePage} style={{ color: 'inherit' }}>
              <Typography
                style={{ textTransform: 'uppercase', fontWeight: 600, marginTop: 2 }}
                children={'Arenda.kz'}
              />
            </Link>
          </CompanyName>

          <Button
            className={langBtnStyle}
            color={i18n.language === 'kk' ? 'primary' : 'default'}
            variant={i18n.language === 'kk' ? 'contained' : undefined}
            style={
              i18n.language === 'kk'
                ? undefined
                : { backgroundColor: 'rgba(125,125,125,0.25)' }
            }
            onClick={() => {
              i18next.changeLanguage('kk');
              localStorage.setItem('lang', 'kk');
            }}
            children="ҚАЗ"
          />
          <Button
            className={langBtnStyle}
            color={i18n.language === 'ru' ? 'primary' : 'default'}
            variant={i18n.language === 'ru' ? 'contained' : undefined}
            style={
              i18n.language === 'ru'
                ? undefined
                : { backgroundColor: 'rgba(125,125,125,0.25)' }
            }
            onClick={() => {
              i18next.changeLanguage('ru');
              localStorage.setItem('lang', 'ru');
            }}
            children="РУС"
          />
        </Toolbar>
      </AppBar>
      <GlobalMessage />
    </>
  );
}
