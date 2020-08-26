import React from 'react';
import { CssBox } from './PageLoaderStyle';

export default function PageLoader({ className, position, opacity }) {
  return (
    <CssBox position={position || 'fixed'} className={className} opacity={opacity}>
      <div id="cube-loader">
        <div className="caption">
          <div className="cube-loader">
            <div className="cube loader-1" />
            <div className="cube loader-2" />
            <div className="cube loader-4" />
            <div className="cube loader-3" />
          </div>
        </div>
      </div>
    </CssBox>
  );
}
