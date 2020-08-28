import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CenterBlock = styled.div`
  flex-grow: 1;
  overflow: hidden;
  padding-right: 10px;
`;

export const Logo = styled(Link)`
  color: inherit;
  font-family: "Segoe UI", sans-serif !important;
  text-transform: uppercase;
  font-size: 29px;
  font-weight: bold;
  padding-left: 20px;
`;
