import paths from './paths';
import LoginPage from '../pages/LoginPage/LoginPage';
import SearchPage from '../pages/SearchPage/SearchPage';

export default {
  loginPage: {
    path: paths.loginPage,
    component: LoginPage,
    withoutHeader: true,
  },
  homePage: {
    path: paths.homePage,
    component: SearchPage,
  },
  searchPage: {
    path: paths.searchPage,
    component: SearchPage,
  },
};
