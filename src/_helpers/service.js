import axios from 'axios';
import { history } from './history';
import paths from './paths';

const unauthorizedResponse = async error => {
  if (error.response && error.response.status === 401) {
    if (error.response.config.url.indexOf('login') === -1) {
      if (window.location.pathname !== paths.loginPage) {
        history.go(paths.loginPage);
      }
    }
  }
  return Promise.reject(error);
};
axios.interceptors.response.use(r => r, unauthorizedResponse);
