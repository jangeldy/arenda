import React from 'react';
import { Logo } from './HeaderStyle';
import paths from '../../_helpers/paths';
import LocationIcon from '@material-ui/icons/NearMe';
import { AppBar, Toolbar, useTheme, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useLocalization from '../_hooks/useLocalization';
import './HeaderTranslate';
import { ReactComponent as LogoIcon } from './media/logoZhai.svg';
import SearchFilter from './SearchFilter/SearchFilter';
import useWidthStyle from '../_hooks/useWidthStyle';

function Header() {
  const { t } = useTranslation();
  const { palette, isDark } = useTheme();
  const widthStyle = useWidthStyle();

  return (
    <>
      <div style={{ height: 64 }}>
        <AppBar elevation={0} style={{ backgroundColor: isDark ? '#282828' : '#d7d7d7' }}>
          <Toolbar style={{ padding: 0, margin: 'auto', ...widthStyle }}>
            <div className="flex items-center fullWidth">
              <Logo to={paths.homePage}>
                <LogoIcon style={{ height: 26, fill: palette.primary.main }} />
              </Logo>
              <div style={{ flexGrow: 1, textAlign: 'right' }}>
                <Button className="ml2 bold" children={t('header_rentApartment')} />
                <Button className="ml2" variant="outlined" children="Войти" />
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <SearchFilter widthStyle={widthStyle} />
    </>
  );
}

export default Header;
