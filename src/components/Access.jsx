import React from 'react';
import { loginModule } from '../pages/LoginPage/LoginDucks';
import { connect } from 'react-redux';

/**
 * @param ps - permissions
 * @param userPermissions
 * @param accessible
 * @param children
 * @return {null}
 */
function Access({ ps, userPermissions, accessible = false, children }) {
  if (accessible) {
    return <>{children}</>;
  } else if (ps instanceof Array) {
    if (userPermissions.some(item => ps.includes(item))) {
      return <>{children}</>;
    }
  } else if (userPermissions.includes(ps)) {
    return <>{children}</>;
  }
  return null;
}

const mapStateToProps = state => ({
  userPermissions: state[loginModule].permissions
});

export default connect(mapStateToProps)(Access);
