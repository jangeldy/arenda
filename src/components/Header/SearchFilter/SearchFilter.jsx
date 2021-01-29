import React, { useState } from 'react';
import { StyledSearchFilter } from './SearchFilterStyle';
import FilterDesktop from './FilterDesktop/FilterDesktop';
import Select from '../../Select';
import MenuItem from '@material-ui/core/MenuItem';
import { DDM } from '../../../_helpers/constants';
import { useTranslation } from 'react-i18next';

function SearchFilter({ widthStyle }) {
  const { i18n } = useTranslation();
  return (
    <StyledSearchFilter>
      <div style={widthStyle}>
        <Select placeholder={DDM.type[`${i18n.language}_name`]} multiple options={DDM.type.options} />
      </div>
    </StyledSearchFilter>
  );
}

export default SearchFilter;
