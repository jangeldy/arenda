import paths from './paths';
import LoginPage from '../pages/LoginPage/LoginPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import AdvertPage from '../pages/AdvertPage/AdvertPage';
import CreateAdvertPage from '../pages/CreateAdvertPage/CreateAdvertPage';

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
  createAdvertPage: {
    path: paths.createAdvertPage,
    component: CreateAdvertPage,
  },
};
