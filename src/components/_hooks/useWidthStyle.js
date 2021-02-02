import { useLocation, matchPath } from 'react-router-dom';
import paths from '../../_helpers/paths';

export default function useWidthStyle() {
  const { pathname } = useLocation();
  const advert = matchPath(pathname, { path: paths.advertPage });

  if (advert && advert.isExact) {
    return {
      width: '100%',
      maxWidth: 1200,
      paddingLeft: 80,
      paddingRight: 80,
      margin: 'auto',
    };
  }

  return {
    width: '100%',
    maxWidth: 1750,
    paddingLeft: 80,
    paddingRight: 80,
    margin: 'auto',
  };
}
