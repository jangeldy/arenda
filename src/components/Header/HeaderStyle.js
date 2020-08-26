import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

export const useStyles = makeStyles(() => ({
  langBtnStyle: {
    height: '64px',
    boxShadow: 'none',
    borderRadius: 0,
    width: 64,
    border: 'none'
  },
  organizationName: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: 12
  }
}));

export const CompanyName = styled.div`
  flex-grow: 1;
  overflow: hidden;
  padding-right: 10px;
`;
