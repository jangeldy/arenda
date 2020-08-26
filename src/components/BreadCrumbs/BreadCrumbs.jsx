import React from 'react';
import MuiBreadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './BreadCrumbsTranslate'

const Wrapper = styled(MuiBreadcrumbs)`
  margin-bottom: 9px !important;
  a:hover {
    text-decoration: underline;
  }
`;

function BreadCrumbs({ items = [] }) {
  return (
    <Wrapper separator="›">
      {items.map((item, index) =>
        items.length - 1 !== index ? (
          <Link key={index} to={item.href} children={item.name} />
        ) : (
          <Typography key={index} color="textPrimary" children={item.name} />
        )
      )}
    </Wrapper>
  );
}

export default BreadCrumbs;
