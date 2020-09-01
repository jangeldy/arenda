import HomePage from '../pages/HomePage/HomePage';
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
    component: HomePage,
  },
  searchPage: {
    path: paths.searchPage,
    component: SearchPage,
  },
};
