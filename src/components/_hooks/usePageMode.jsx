import { useState, useEffect } from 'react';
import { PAGE_MODE } from '../../_helpers/constants';
import { history } from '../../_helpers/history';

function usePageMode(match, urlOnInvalid) {
  const [pageMode, setPageMode] = useState();
  const mode = match.params.mode;
  useEffect(() => {
    switch (mode) {
      case 'create':
        setPageMode(PAGE_MODE.CREATE);
        break;
      case 'edit':
        setPageMode(PAGE_MODE.EDIT);
        break;
      case 'view':
        setPageMode(PAGE_MODE.VIEW);
        break;
      default: {
        if (urlOnInvalid) {
          history.push(urlOnInvalid);
        } else {
          setPageMode(PAGE_MODE.INVALID);
        }
      }
    }
  }, [mode, urlOnInvalid]);
  return pageMode;
}

export default usePageMode;
