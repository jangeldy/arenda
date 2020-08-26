import HomePage from '../pages/HomePage/HomePage';
import paths from './paths';
import LoginPage from '../pages/LoginPage/LoginPage';

const routerProps = {
  loginPage: {
    path: paths.loginPage,
    component: LoginPage,
    withoutHeader: true
  },
  homePage: {
    path: paths.homePage,
    component: HomePage,
  }
};

export const headerPaths = Object.values(routerProps)
  .filter(item => !item.withoutHeader)
  .map(item => item.path);

export default routerProps;
