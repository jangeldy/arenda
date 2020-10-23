import React from 'react';
import { Logo } from './HeaderStyle';
import paths from '../../_helpers/paths';
import Button from '@material-ui/core/Button';
import LocationIcon from '@material-ui/icons/NearMe';
import { AppBar, Toolbar, useTheme } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useLocalization from '../_hooks/useLocalization';
import './HeaderTranslate';

function HeaderDesktop() {
  const { t } = useTranslation();
  const { palette } = useTheme();
  const localization = useLocalization();

  return (
    <div className="desktop">
      <AppBar style={{ borderBottom: `1px solid ${palette.divider}`}}>
        <Toolbar style={{ padding: 0 }}>
          <div className="web-site-width flex items-center">
            <Logo className="color-secondary" to={paths.homePage} children="zhai.kz" />
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
    </div>
  );
}

export default HeaderDesktop;
