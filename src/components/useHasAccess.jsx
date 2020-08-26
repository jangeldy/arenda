import { useSelector } from 'react-redux';
import { loginModule } from '../pages/LoginPage/LoginDucks';

function useHasAccess(permissions) {
  const userPermissions = useSelector(state => state[loginModule].permissions) || [];
  return permissions instanceof Array
    ? userPermissions.some(item => permissions.includes(item))
    : userPermissions.includes(permissions);
}

export default useHasAccess;