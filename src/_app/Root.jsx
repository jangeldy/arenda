import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotificationContainer from 'react-notifications-component';
import ProtectedRoute from './ProtectedRoute';
import Page404 from '../pages/Page404/Page404';
import routerProps from '../_helpers/routerProps';
import Header from '../components/Header/Header';
import { Content } from '../components/ThemeProvider/ThemeStyle';

export default function Root() {
  return (
    <>
      <NotificationContainer />
      <Header />
      <Content>
        <Switch>
          <Route exact {...routerProps.homePage} />
          <Route exact {...routerProps.loginPage} />
          <Route component={Page404} />
        </Switch>
      </Content>
    </>
  );
}
