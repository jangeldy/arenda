import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import './SortingTranslate';
import { useTheme } from '@material-ui/core';

const Item = styled.div`
  opacity: ${(props) => (props.active ? 1 : 0.6)};
  background: ${(props) => (props.active ? props.palette.background.paper : 'none')};
  border: 1px solid ${(props) => (props.active ? props.palette.divider : 'none')};
  border-radius: 16px;
  line-height: 27px;
  height: 30px;
  padding: 0 10px;
  margin: ${(props) => (props.active ? '0 5px' : 0)};

  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;

function Sorting() {
  const { palette } = useTheme();
  const { t } = useTranslation();
  const [sorting, setSorting] = useState('byDateAdded');
  return (
    <div className="flex items-center">
      <span>{t('sorting_title')}: </span>
      <Item
        palette={palette}
        active={sorting === 'byDateAdded'}
        onClick={() => setSorting('byDateAdded')}
        children={t('sorting_byDateAdded')}
      />
      <Item
        palette={palette}
        active={sorting === 'byPrice'}
        onClick={() => setSorting('byPrice')}
        children={t('sorting_byPrice')}
      />
      <Item
        palette={palette}
        active={sorting === 'byArea'}
        onClick={() => setSorting('byArea')}
        children={t('sorting_byArea')}
      />
    </div>
  );
}

export default Sorting;
