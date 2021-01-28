import React from 'react';
import { Wrapper } from './FooterStyle';
import FooterDesktop from './FooterDesktop';
import FooterMobile from './FooterMobile';

function Footer() {
  return (
    <Wrapper>
      <FooterDesktop />
      <FooterMobile />
    </Wrapper>
  );
}

export default Footer;
