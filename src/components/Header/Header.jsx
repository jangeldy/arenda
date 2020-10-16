import React from 'react';
import { AppBar, Toolbar, useTheme } from '@material-ui/core';
import paths from '../../_helpers/paths';
import { Logo } from './HeaderStyle';
import './HeaderTranslate';
import Button from '@material-ui/core/Button';
import LocationIcon from '@material-ui/icons/NearMe';
import useLocalization from '../_hooks/useLocalization';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();
  const localization = useLocalization();
  const { isDark } = useTheme();

  return (
    <AppBar style={{ backgroundColor: isDark ? '#262626' : '#ffffff' }}>
      <Toolbar style={{ padding: 0 }}>
        <div className="web-site-width flex items-center">
          <Logo className="color-secondary" to={paths.homePage} children="zhai" />
          <div style={{ flexGrow: 1, textAlign: 'right' }}>
            <Button
              className="ml4"
              startIcon={<LocationIcon color="secondary" />}
              size="small"
              children={localization.name}
            />
            <Button
              className="ml2"
              color="secondary"
              variant="contained"
              children={t('header_rentApartment')}
            />
            <Button className="ml2" variant="outlined" children="Войти" />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
