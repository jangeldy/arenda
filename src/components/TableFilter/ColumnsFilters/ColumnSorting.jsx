import React from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import useColumnOrder from '../useColumnOrder';

export default function ColumnSorting({ title, name, queryIndex = '' }) {
  const { order, setOrder } = useColumnOrder(name, queryIndex);
  return (
    <div
      className="flex items-center justify-center"
      onClick={setOrder}
      style={{ width: '100%', height: '30px', cursor: 'pointer' }}
    >
      {title}
      {order === 'asc' && <ArrowDropUpIcon color="action" />}
      {order === 'desc' && <ArrowDropDownIcon color="action" />}
    </div>
  );
}
