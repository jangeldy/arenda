import React, { createContext } from 'react';

export const TableFilterContext = createContext('');

function TableFilterProvider({ index = '', children }) {
  return <TableFilterContext.Provider value={index}>{children}</TableFilterContext.Provider>;
}

export default TableFilterProvider;
