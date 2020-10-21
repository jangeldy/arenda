import React from 'react';
import AppStoreIcon from './media/appStore.svg';
import AppStoreDarIcon from './media/appStoreDark.svg';
import PlayMarketIcon from './media/playMarket.svg';
import PlayMarketDarkIcon from './media/playMarketDark.svg';
import { ReactComponent as FacebookIcon } from './media/facebook.svg';
import { ReactComponent as VkIcon } from './media/vk.svg';
import { ReactComponent as TwitterIcon } from './media/twitter.svg';
import { ReactComponent as InstagramIcon } from './media/instagram.svg';
import { useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { Wrapper } from './FooterStyle';

function Footer() {
  const { palette, isDark } = useTheme();
  return (
    <Wrapper isDark={isDark} bgColor={palette.divider}>
      <div className="web-site-width">
        <div className="flex flex-wrap justify-between items-center">
          <div className="footer-items py3">
            <div className="item">Карта сайта</div>
            <div className="item-point mx1">·</div>
            <div className="item">Центр помощи</div>
            <div className="item-point mx1">·</div>
            <div className="item">Пользовательское соглашение</div>
            <div className="item-point mx1">·</div>
            <div className="item">Сдать жилье</div>
            <div className="item-point mx1">·</div>
            <div className="item">Рекламодателям</div>
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
          <div className="app-store">
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
          <span>
            © <span className="number-font">2020</span> «NextLevel»
          </span>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;
