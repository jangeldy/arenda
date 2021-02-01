import React from 'react';
import { StyledSearchFilter } from './SearchFilterStyle';
import Select from '../../Select';
import { DDM } from '../../../_helpers/constants';
import useLocalization from '../../_hooks/useLocalization';
import Price from './Price';
import OtherFilters from './OtherFilters';
import './SearchFilterTranslate';

function SearchFilter({ widthStyle }) {
  const localization = useLocalization();
  return (
    <StyledSearchFilter>
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
    </StyledSearchFilter>
  );
}

export default SearchFilter;
