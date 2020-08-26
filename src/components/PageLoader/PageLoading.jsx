import React from 'react';
import PageLoader from './PageLoader';

function PageLoading({ loading, children }) {
  if (loading) {
    return <PageLoader />;
  } else {
    return children;
  }
}

export default PageLoading;
