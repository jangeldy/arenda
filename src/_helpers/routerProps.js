import paths from './paths';
import LoginPage from '../pages/LoginPage/LoginPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import AdvertPage from '../pages/AdvertPage/AdvertPage';
import CreatePage from '../pages/CreatePage/CreatePage';

export default {
  loginPage: {
    path: paths.loginPage,
    component: LoginPage,
  },
  homePage: {
    path: paths.homePage,
    component: SearchPage,
  },
  searchPage: {
    path: paths.searchPage,
    component: SearchPage,
  },
  advertPage: {
    path: paths.advertPage,
    component: AdvertPage,
  },
  createPage: {
    path: paths.createPage,
    component: CreatePage,
  },
};
