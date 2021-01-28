import { useLocation } from 'react-router-dom';
import paths from '../../_helpers/paths';

export default function useWidthStyle() {
  const { pathname } = useLocation();

  return {
    width: '100%',
    maxWidth: 1750,
    paddingLeft: 80,
    paddingRight: 80,
    margin: 'auto'
  };
}
