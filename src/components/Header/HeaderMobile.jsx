import React from 'react';
import { AppBar, Toolbar, useTheme } from '@material-ui/core';
import './HeaderTranslate';

export default function HeaderMobile({ children }) {
  const { palette } = useTheme();
  return (
    <div className="mobile" style={{ minHeight: 64 }}>
      <AppBar position="fixed" style={{ borderBottom: `1px solid ${palette.divider}` }}>
        <Toolbar style={{ padding: 0 }}>
          <div className="flex items-center">{children}</div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
