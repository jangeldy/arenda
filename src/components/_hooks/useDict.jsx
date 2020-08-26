import { useState, useEffect } from 'react';
import Dict from '../../utils/Dict';

export default function useDict(code) {
  const [dictList, setDictList] = useState([]);
  useEffect(() => {
    if (code) {
      let isCancelled = false;
      Dict.items(code).then(list => {
        if (!isCancelled) setDictList(list);
      });
      return () => {
        isCancelled = true;
      };
    }
  }, [code]);
  return dictList;
}
