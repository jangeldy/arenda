import { useLocation, useHistory } from 'react-router-dom';

export default function useModal(name) {
  const { pathname, search } = useLocation();
  const { replace } = useHistory();
  const user = new URLSearchParams(search);
  return {
    isOpen: !!user.get(name),
    open: data => {
      user.set(name, data);
      replace(`${pathname}?${user.toString()}`);
    },
    close: () => {
      user.delete(name);
      replace(`${pathname}?${user.toString()}`);
    }
  };
}
