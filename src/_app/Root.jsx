import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NoticeModule from 'react-notifications-component';
import Page404 from '../pages/Page404/Page404';
import routerProps from '../_helpers/routerProps';
import HeaderDesktop from '../components/Header/HeaderDesktop';
import Footer from '../components/Footer/Footer';

export default function Root() {
  return (
    <>
      <NoticeModule />
      <HeaderDesktop />
      <div id="content">
        <Switch>
          <Route exact {...routerProps.homePage} />
          <Route exact {...routerProps.loginPage} />
          <Route exact {...routerProps.searchPage} />
          <Route exact {...routerProps.advertPage} />
          <Route component={Page404} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}
