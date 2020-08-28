import HomePage from '../pages/HomePage/HomePage';
import paths from './paths';
import LoginPage from '../pages/LoginPage/LoginPage';

export default {
  loginPage: {
    path: paths.loginPage,
    component: LoginPage,
    withoutHeader: true,
  },
  homePage: {
    path: paths.homePage,
    component: HomePage,
  },
};
