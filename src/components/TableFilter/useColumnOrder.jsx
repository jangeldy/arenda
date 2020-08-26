import { useState, useEffect, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { TableFilterContext } from './TableFilterProvider';

function useColumnOrder(columnName) {
  const index = useContext(TableFilterContext) || '';
  const filterName = `filter${index}`;
  const orderName = `order${index}`;
  const { pathname, search } = useLocation();
  const { push } = useHistory();
  const [columnOrder, setColumnOrder] = useState();
  const params = new URLSearchParams(search);
  const filter = params.get(filterName) ? JSON.parse(params.get(filterName)) : {};
  const order = params.get(orderName) ? JSON.parse(params.get(orderName)) : {};
  const paramColumnOrder = order[columnName];

  const changeOrder = () => {
    let requestOrder = { ...order };
    if (!columnOrder) {
      requestOrder[columnName] = 'desc';
    } else if (columnOrder === 'desc') {
      requestOrder[columnName] = 'asc';
    } else {
      delete requestOrder[columnName];
    }
    params.set(filterName, JSON.stringify({ ...filter, pageNumber: 1 }));
    params.set(orderName, JSON.stringify(requestOrder));
    push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    if (paramColumnOrder !== columnOrder) {
      setColumnOrder(paramColumnOrder);
    }
  }, [columnOrder, paramColumnOrder]);

  return {
    order: columnOrder,
    setOrder: changeOrder
  };
}

export default useColumnOrder;
