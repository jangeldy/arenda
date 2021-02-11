import { useLocation, matchPath } from 'react-router-dom';
import paths from '../../_helpers/paths';

export default function useWidthStyle() {
  const { pathname } = useLocation();
  const homePage = matchPath(pathname, { path: paths.homePage });
  const createPage = matchPath(pathname, { path: paths.createPage });

  if (homePage && homePage.isExact) {
    return {
      width: '100%',
      maxWidth: 1748,
      paddingLeft: 80,
      paddingRight: 80,
      margin: 'auto',
    };
  }

  if (createPage && createPage.isExact) {
    return {
      width: '100%',
      maxWidth: 900,
      paddingLeft: 80,
      paddingRight: 80,
      margin: 'auto',
    };
  }

  return {
    width: '100%',
    maxWidth: 1348,
    paddingLeft: 80,
    paddingRight: 80,
    margin: 'auto',
  };
}
