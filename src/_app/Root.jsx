import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotificationContainer from 'react-notifications-component';
import ProtectedRoute from './ProtectedRoute';
import Page404 from '../pages/Page404/Page404';
import routerProps, { headerPaths } from '../_helpers/routerProps';
import Header from '../components/Header/Header';
import { Content, Color } from '../components/ThemeProvider/ThemeStyle';

export default function Root({ checkLogin, ...props }) {
  return (
    <>
      <NotificationContainer />
      <div style={{ height: Color.headerHeight }}>
        <Route exact path={headerPaths} component={Header} />
      </div>
      <Content>
        <Switch>
          <ProtectedRoute exact {...props} {...routerProps.homePage} />
          <ProtectedRoute exact {...props} {...routerProps.loginPage} />
          <Route component={Page404} />
        </Switch>
      </Content>
    </>
  );
}
