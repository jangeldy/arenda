import { useState, useEffect, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { TableFilterContext } from './TableFilterProvider';

function useColumnFilter(columnName) {
  const index = useContext(TableFilterContext) || '';
  const filterName = `filter${index}`;
  const { pathname, search } = useLocation();
  const { push } = useHistory();
  const params = new URLSearchParams(search);
  const filter = params.get(filterName) ? JSON.parse(params.get(filterName)) : {};
  const paramColumnFilter = filter[columnName];
  const [columnFilter, setColumnFilter] = useState(paramColumnFilter);

  const changeFilter = value => {
    if (value !== columnFilter) {
      const newFilter = { ...filter, [columnName]: value, pageNumber: 1 };
      if (!value) delete newFilter[columnName];
      params.set(filterName, JSON.stringify(newFilter));
      push(`${pathname}?${params.toString()}`);
    }
  };

  useEffect(() => {
    if (paramColumnFilter !== columnFilter) {
      setColumnFilter(paramColumnFilter);
    }
  }, [columnFilter, paramColumnFilter]);

  return {
    value: columnFilter || null,
    setFilter: changeFilter
  };
}

export default useColumnFilter;
