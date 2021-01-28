import React, { useEffect, useRef, useState } from 'react';
import Popper from '@material-ui/core/Popper';
import { Button } from '@material-ui/core';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuItem from '@material-ui/core/MenuItem';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';

export default function Select({ label }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleClose = (event) => {
    if (!(anchorRef.current && anchorRef.current.contains(event.target))) {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button ref={anchorRef} onClick={() => setOpen(!open)} children={label} fullWidth />
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        transition
        disablePortal
        placement="bottom-start"
        style={{ width: anchorRef.current ? anchorRef.current.offsetWidth : 200 }}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: 'center top' }}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  <MenuItem value="1" onClick={handleClose}>
                    Profile
                  </MenuItem>
                  <MenuItem value="2" onClick={handleClose}>
                    My account
                  </MenuItem>
                  <MenuItem value="3" onClick={handleClose}>
                    Logout
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
