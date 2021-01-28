import React, { useState } from 'react';
import { StyledSearchFilter } from './SearchFilterStyle';
import FilterDesktop from './FilterDesktop/FilterDesktop';
import Select from '../../Select';
import MenuItem from '@material-ui/core/MenuItem';

function SearchFilter({ widthStyle }) {
  const [type, setType] = useState();
  return (
    <StyledSearchFilter>
      <div style={widthStyle}>
        <Select />
      </div>
    </StyledSearchFilter>
  );
}

export default SearchFilter;
