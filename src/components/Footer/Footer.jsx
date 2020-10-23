import React from 'react';
import { useTheme } from '@material-ui/core';
import { Wrapper } from './FooterStyle';
import FooterDesktop from './FooterDesktop';
import FooterMobile from './FooterMobile';

function Footer() {
  const { palette, isDark } = useTheme();
  return (
    <Wrapper isDark={isDark} bgColor={palette.divider}>
      <FooterDesktop isDark={isDark} />
      <FooterMobile />
    </Wrapper>
  );
}

export default Footer;
