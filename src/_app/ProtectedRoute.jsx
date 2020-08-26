import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PageLoader from '../components/PageLoader/PageLoader';
import Page403 from '../pages/Page403/Page403';
import paths from '../_helpers/paths';

export default function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (rest.path !== paths.loginPage) {
          return <Component {...routeProps} />;
        }

        if (rest.loading) {
          return <PageLoader />;
        }

        // перенаправляем на страницу логина если не авторизован
        if (rest.user === null) {
          return <Redirect to={paths.loginPage} />;
        }

        // перенаправляем если авторизован и находися на странице логина
        if (rest.user && rest.path === paths.loginPage) {
          return <Redirect to={paths.homePage} />;
        }

        // проверяем доступ к странице
        if (
          rest.permissions &&
          rest.userPermissions &&
          !rest.userPermissions.some((item) => rest.permissions.includes(item))
        ) {
          return <Page403 />;
        }

        return <Component {...routeProps} />;
      }}
    />
  );
}
