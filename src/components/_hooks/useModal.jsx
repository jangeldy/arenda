import { useLocation, useHistory } from 'react-router-dom';

export default function useModal(name) {
  const { pathname, search } = useLocation();
  const { replace } = useHistory();
  const params = new URLSearchParams(search);
  return {
    data: params.get(name),
    isOpen: !!params.get(name),
    open: data => {
      params.set(name, data);
      replace(`${pathname}?${params.toString()}`);
    },
    close: () => {
      params.delete(name);
      replace(`${pathname}?${params.toString()}`);
    }
  };
}
