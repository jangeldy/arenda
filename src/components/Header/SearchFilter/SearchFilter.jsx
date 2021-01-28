import React from 'react';
import { StyledSearchFilter } from './SearchFilterStyle';
import FilterDesktop from '../../../pages/SearchPage/FilterDesktop/FilterDesktop';

function SearchFilter({ widthStyle }) {
  return (
    <StyledSearchFilter>
      <div style={widthStyle}>
        <FilterDesktop />
      </div>
    </StyledSearchFilter>
  );
}

export default SearchFilter;
