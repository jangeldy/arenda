import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import './SortingTranslate';

const Item = styled.div`
  opacity: ${(props) => (props.active ? 1 : 0.6)};
  background: ${(props) => (props.active ? '#d9d9d9' : 'none')};
  border-radius: 16px;
  line-height: 30px;
  height: 30px;
  padding: 0 10px;
  margin: ${(props) => (props.active ? '0 5px' : 0)};

  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;

function Sorting() {
  const { t } = useTranslation();
  const [sorting, setSorting] = useState('byDateAdded');
  return (
    <div className="flex items-center">
      <span>{t('sorting_title')}: </span>
      <Item
        active={sorting === 'byDateAdded'}
        onClick={() => setSorting('byDateAdded')}
        children={t('sorting_byDateAdded')}
      />
      <Item
        active={sorting === 'byPrice'}
        onClick={() => setSorting('byPrice')}
        children={t('sorting_byPrice')}
      />
      <Item
        active={sorting === 'byArea'}
        onClick={() => setSorting('byArea')}
        children={t('sorting_byArea')}
      />
    </div>
  );
}

export default Sorting;
