import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CenterBlock = styled.div`
  flex-grow: 1;
  text-align: right;
`;

export const Logo = styled(Link)`
  color: inherit;
  font-family: "Segoe UI", sans-serif !important;
  text-transform: uppercase;
  font-size: 27px;
  font-weight: bold;
`;
