import React from 'react';
import { StyledSearchFilter } from './SearchFilterStyle';
import Select from '../../Select';
import { DDM } from '../../../_helpers/constants';
import Price from './Price';
import OtherFilters from './OtherFilters';
import './SearchFilterTranslate';
import paths from '../../../_helpers/paths';
import { useLocation } from 'react-router-dom';

function SearchFilter({ widthStyle }) {
  const { pathname } = useLocation();

  if (pathname !== paths.homePage) {
    return null;
  }

  return (
    <StyledSearchFilter>
      <div className="filter">
        <div style={widthStyle}>
          <div className="flex brl">
            <Select {...DDM.location} className="sf-item" />
            <Select multiple {...DDM.type} className="sf-item" />
            <Select multiple {...DDM.roomCount} className="sf-item" />
            <Select multiple {...DDM.rentType} className="sf-item" />
            <Price />
            <OtherFilters />
          </div>
        </div>
      </div>
    </StyledSearchFilter>
  );
}

export default SearchFilter;
