import React from "react";
import MuiIconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

function IconButton({ icon, tooltip, ...rest }) {
  if (tooltip) {
    return (
      <Tooltip title={tooltip} placement="top" className="right">
        <MuiIconButton {...rest} children={icon} />
      </Tooltip>
    );
  }

  return <MuiIconButton {...rest} children={icon} />;
}

export default IconButton;
