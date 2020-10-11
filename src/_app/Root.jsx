import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NoticeModule from 'react-notifications-component';
import Page404 from '../pages/Page404/Page404';
import routerProps from '../_helpers/routerProps';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

export default function Root() {
  return (
    <>
      <NoticeModule />
      <Header />
      <div className="web-site-width pt2">
        <Switch>
          <Route exact {...routerProps.homePage} />
          <Route exact {...routerProps.loginPage} />
          <Route exact {...routerProps.searchPage} />
          <Route component={Page404} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}
