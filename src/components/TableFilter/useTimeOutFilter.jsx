import React, { useEffect, useState } from 'react';
import useColumnFilter from './useColumnFilter';

let timer = {};
function useTimeOutFilter(name) {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const filterPrice = useColumnFilter(name);
  const [value, setValue] = useState(filterPrice.value);

  const onChange = (event) => {
    let newValue = event;
    if (event && event.target && event.target.value) {
      newValue = event.target.value;
    }
    setValue(newValue);
    clearTimeout(timer[name]);
    timer[name] = setTimeout(function () {
      filterPrice.setFilter(newValue);
    }, 1500);
  };
  return { value, onChange };
}

export default useTimeOutFilter;
