import React, { useState } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {
  FavoriteBorder,
  ChatOutlined,
  AccountCircleOutlined,
  Search,
} from '@material-ui/icons';
import { useTranslation } from 'react-i18next';

function FooterMobile() {
  const { t } = useTranslation();
  const [navigation, setNavigation] = useState('search');
  return (
    <div className="mobile">
      <BottomNavigation
        className="navigation"
        showLabels
        value={navigation}
        onChange={(e, value) => setNavigation(value)}
      >
        <BottomNavigationAction
          label={t('footer_mobileSearch')}
          value="search"
          icon={<Search />}
        />
        <BottomNavigationAction
          label={t('footer_mobileFavorite')}
          value="favorites"
          icon={<FavoriteBorder />}
        />
        <BottomNavigationAction
          label={t('footer_mobileMessage')}
          value="message"
          icon={<ChatOutlined />}
        />
        <BottomNavigationAction
          label={t('footer_mobileProfile')}
          value="profile"
          icon={<AccountCircleOutlined />}
        />
      </BottomNavigation>
    </div>
  );
}

export default FooterMobile;
