import React, { useState } from 'react';
import useColumnFilter from './useColumnFilter';

let timer = {};
function useTimeOutFilter(name) {
  const filterPrice = useColumnFilter(name);
  const [value, setValue] = useState();

  const onChange = (event) => {
    let newValue = event;
    if (event && event.target && event.target.value) {
      newValue = event.target.value;
    }
    setValue(newValue);
    clearTimeout(timer[name]);
    timer[name] = setTimeout(function () {
      filterPrice.setFilter(newValue);
    }, 500);
  };
  return { value, onChange };
}

export default useTimeOutFilter;
