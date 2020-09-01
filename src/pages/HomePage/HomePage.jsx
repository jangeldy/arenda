import React from 'react';
import { Redirect } from 'react-router-dom';
import paths from '../../_helpers/paths';

export default function HomePage() {
  return <Redirect to={paths.searchPage} />;
}
