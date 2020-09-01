import React from 'react';
import MuiButton from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core';

export default function Button({
  startIcon,
  endIcon,
  inherit,
  secondary,
  primary,
  success,
  contained,
  outlined,
  text,
  disabled,
  children,
  large,
  medium,
  small,
  className,
  ...rest
}) {
  let variant;
  let color;
  let size;

  // color
  if (primary) color = 'primary';
  if (secondary) color = 'secondary';
  if (inherit) color = 'secondary';

  // variant
  if (contained) variant = 'contained';
  if (outlined) variant = 'outlined';
  if (text) variant = 'text';

  // variant
  if (large) size = 'large';
  if (medium) size = 'medium';
  if (small) size = 'small';

  const theme = useTheme();

  return (
    <MuiButton
      className={className}
      startIcon={startIcon}
      endIcon={endIcon}
      variant={variant}
      size={size}
      color={color}
      style={
        success
          ? {
              backgroundColor: theme.palette.success.main,
              color: '#FFFFFF',
            }
          : undefined
      }
      disabled={disabled}
      {...rest}
      children={children}
    />
  );
}
