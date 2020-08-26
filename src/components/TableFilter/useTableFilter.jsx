import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import './ColumnsFilters/ColumnsFilterTranslate';

export const DEFAULT_FILTER = { pageNumber: 1, pageSize: 20 };

export default function useTableFilter(
  loadData,
  index = '',
  defaultFilter = DEFAULT_FILTER
) {
  const filterName = `filter${index}`;
  const orderName = `order${index}`;
  const [tableFilter, setTableFilter] = useState(null);
  const { pathname, search } = useLocation();
  const { replace, push } = useHistory();
  const params = new URLSearchParams(search);
  const filter = params.get(filterName)
    ? JSON.parse(params.get(filterName))
    : defaultFilter;
  const order = params.get(orderName) ? JSON.parse(params.get(orderName)) : {};

  const nextPage = () => {
    const newFilter = { ...filter, pageNumber: filter.pageNumber + 1 };
    params.set(filterName, JSON.stringify(newFilter));
    push(`${pathname}?${params.toString()}`);
  };

  const reloadPage = () => {
    let requestFilter = { ...defaultFilter, ...filter, pageNumber: 1 };
    if (Object.keys(order).length > 0) requestFilter.sorting = order;
    loadData(requestFilter);
  };

  useEffect(() => {
    let requestFilter = { ...defaultFilter, ...filter };
    if (Object.keys(order).length > 0) requestFilter.sorting = order;
    if (JSON.stringify(requestFilter) !== tableFilter) {
      if (tableFilter === null) {
        requestFilter.pageNumber = 1;
        params.set(filterName, JSON.stringify(requestFilter));
        replace(`${pathname}?${params.toString()}`);
      }
      loadData(requestFilter);
      setTableFilter(JSON.stringify(requestFilter));
    }
    // eslint-disable-next-line
  }, [search]);

  useEffect(
    () => () => {
      if (window.location.search) {
        if (pathname === window.location.pathname) {
          const params = new URLSearchParams(search);
          params.delete(filterName);
          params.delete(orderName);
          replace(`${pathname}?${params.toString()}`);
        }
      }
    },
    // eslint-disable-next-line
    []
  );

  return { filter, order, nextPage, reloadPage, index };
}
