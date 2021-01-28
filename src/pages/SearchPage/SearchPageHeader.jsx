import React from 'react';
import Select from '@material-ui/core/Select/Select';
import InputBase from '@material-ui/core/InputBase/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import FilterMobile from './FilterMobile/FilterMobile';

export default function SearchPageHeader({ isMobile }) {
  const style = {
    paddingLeft: 10,
    borderRadius: 4,
    marginLeft: -10,
    fontSize: 14,
    fontWeight: 600,
  };
  if (isMobile) {
    return (
      <>
        <div className="fw-6">
          <Select defaultValue="nst" SelectDisplayProps={{ style }} input={<InputBase />}>
            <MenuItem value="nst">Нур-Султан</MenuItem>
            <MenuItem value="alm">Алматы</MenuItem>
            <MenuItem value="shm">Шымкент</MenuItem>
            <MenuItem value="kzl">Кызылорда</MenuItem>
            <MenuItem value="ars">Арыс</MenuItem>
          </Select>
        </div>
        <div style={{ flexGrow: 1, textAlign: 'right' }}>
          <FilterMobile />
        </div>
      </>
    );
  }
  return null;
}
