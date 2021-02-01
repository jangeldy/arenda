import React, { useEffect, useRef, useState } from 'react';
import Popper from '@material-ui/core/Popper';
import { Button } from '@material-ui/core';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuItem from '@material-ui/core/MenuItem';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import DropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function Select({ placeholder, multiple, options = [], className, ...rest }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const { i18n } = useTranslation();
  const [value, setValue] = useState(multiple ? [] : '');
  const valueOption = multiple
    ? options.filter((item) => value.includes(item.code)) || []
    : options.find((item) => item.code === value) || {};
  const label = multiple
    ? valueOption.map((item) => item[`${i18n.language}_name`]).join(', ')
    : valueOption[`${i18n.language}_name`];

  const onChange = (newValue) => {
    if (multiple) {
      const checked = !value.some((code) => code === newValue);
      setValue(checked ? [...value, newValue] : value.filter((code) => code !== newValue));
    } else {
      setValue(newValue);
      setOpen(false);
    }
  };

  return (
    <div className={className}>
      <Button
        ref={anchorRef}
        onClick={() => setOpen(!open)}
        children={label || rest[`${i18n.language}_name`] || placeholder}
        fullWidth
        style={{ justifyContent: 'space-between', whiteSpace: 'nowrap' }}
        endIcon={<DropDownIcon />}
        {...rest}
      />
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
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <MenuList>
                  {options.map((option, index) =>
                    multiple ? (
                      <MenuItem key={index} onClick={() => onChange(option.code)}>
                        <Checkbox
                          color="primary"
                          checked={multiple ? value.includes(option.code) : value === option.code}
                          style={{ marginLeft: 0 }}
                        />
                        <ListItemText primary={option[`${i18n.language}_name`]} />
                      </MenuItem>
                    ) : (
                      <MenuItem key={index} onClick={() => onChange(option.code)}>
                        {option[`${i18n.language}_name`]}
                      </MenuItem>
                    )
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
