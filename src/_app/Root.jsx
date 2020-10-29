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
          {Object.values(routerProps).map((page) => (
            <Route key={page.path} exact {...page} />
          ))}
          <Route component={Page404} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}
