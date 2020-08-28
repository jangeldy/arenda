import React from 'react';
import MuiButton from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  ${props => (props.fullWidth ? 'width: 100%;' : '')}
  [class^=MuiCircularProgress-root] {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -12px;
    margin-left: -12px;
  }
`;

function EButton({ text, icon, loading, disabled, style, ...rest }) {
  if (loading) {
    return (
      <Wrapper fullWidth={rest.fullWidth}>
        <MuiButton
          variant="contained"
          color="primary"
          style={disabled || loading ? undefined : style}
          disabled={disabled || loading}
          {...rest}
        >
          {icon}
          {text}
        </MuiButton>
        {loading && <CircularProgress size={24} />}
      </Wrapper>
    );
  }
  return (
    <MuiButton
      variant="contained"
      color="primary"
      disabled={disabled || loading}
      style={disabled || loading ? undefined : style}
      {...rest}
    >
      {icon}
      {text}
    </MuiButton>
  );
}

export default EButton;
