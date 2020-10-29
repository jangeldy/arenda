import React from 'react';
import { ReactComponent as FacebookIcon } from './media/facebook.svg';
import { ReactComponent as VkIcon } from './media/vk.svg';
import { ReactComponent as TwitterIcon } from './media/twitter.svg';
import { ReactComponent as InstagramIcon } from './media/instagram.svg';
import Divider from '@material-ui/core/Divider';
import AppStoreDarIcon from './media/appStoreDark.svg';
import AppStoreIcon from './media/appStore.svg';
import PlayMarketDarkIcon from './media/playMarketDark.svg';
import PlayMarketIcon from './media/playMarket.svg';
import { useTranslation } from 'react-i18next';
import './FooterTranslate';

function FooterDesktop({ isDark }) {
  const { t } = useTranslation();
  return (
    <div className="desktop">
      <div className="flex flex-wrap justify-between items-center">
        <div className="footer-items py3">
          <div className="item">{t('footer_desktopSiteMap')}</div>
          <div className="item-point mx1">·</div>
          <div className="item">{t('footer_desktopHelpCenter')}</div>
          <div className="item-point mx1">·</div>
          <div className="item">{t('footer_desktopTermUse')}</div>
          <div className="item-point mx1">·</div>
          <div className="item">{t('footer_desktopRentHouse')}</div>
          <div className="item-point mx1">·</div>
          <div className="item">{t('footer_desktopAdvertisers')}</div>
        </div>
        <div className="social-icons py3">
          <a href="https://www.facebook.com/zhaikz-100659748509478/" target="_blank">
            <FacebookIcon />
          </a>
          <a href="https://vk.com/public199568857" target="_blank">
            <VkIcon />
          </a>
          <a href="https://twitter.com/zhai93616755" target="_blank">
            <TwitterIcon />
          </a>
          <a href="https://instagram.com/zhai.kz?igshid=1nmm59bu8bwhc" target="_blank">
            <InstagramIcon />
          </a>
        </div>
      </div>
      <Divider />
      <div className="py3 flex justify-between items-center">
        <div className="store">
          <img
            width="133"
            src={isDark ? AppStoreDarIcon : AppStoreIcon}
            alt="app store"
          />
          <img
            width="133"
            src={isDark ? PlayMarketDarkIcon : PlayMarketIcon}
            alt="play market"
            className="ml2"
          />
        </div>
        <span>© 2020 «NextLevel»</span>
      </div>
    </div>
  );
}

export default FooterDesktop;
