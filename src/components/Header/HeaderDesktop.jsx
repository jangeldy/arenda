import React from 'react';
import { Logo } from './HeaderStyle';
import paths from '../../_helpers/paths';
import Button from '@material-ui/core/Button';
import LocationIcon from '@material-ui/icons/NearMe';
import { AppBar, Toolbar, useTheme } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useLocalization from '../_hooks/useLocalization';
import './HeaderTranslate';
import { ReactComponent as LogoIcon } from './logoZhai.svg';

function HeaderDesktop() {
  const { t } = useTranslation();
  const { palette } = useTheme();
  const localization = useLocalization();

  return (
    <AppBar style={{ borderBottom: `1px solid ${palette.divider}` }}>
      <Toolbar style={{ padding: 0 }}>
        <div className="flex items-center fullWidth">
          <Logo className="color-secondary" to={paths.homePage}>
            <LogoIcon style={{ height: 28, fill: palette.secondary.main }} />
          </Logo>
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

export default HeaderDesktop;
