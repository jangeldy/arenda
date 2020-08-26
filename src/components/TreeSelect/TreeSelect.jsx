import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import ArrowDown from '@material-ui/icons/KeyboardArrowDown';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import treeUtils from '../../utils/tree';
import Field from '../Form/Field';
import { TreeItem } from './TreeSelectStyle';
import i18next from 'i18next';
import { CircularProgress } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

/**
 data -> [
 {
      label: 'label',
      code: 'code',
      childItems: [],
      unSelectable: true,
      expanded: false
    }
 ]
 */

const TreeSelectControl = props => {
  const {
    label,
    data,
    dataConfig = {},
    value,
    onChange,
    renderLabel,
    fullWidth,
    disabled,
    name,
    error,
    helperText,
    parentSelectable,
    clearFiled,
    onExpand,
    loadingArr,
    lookupId
  } = props;
  const { codeKey, childKey } = { ...treeUtils.defaultConfig, ...dataConfig };
  const [tree, setTree] = useState(data);
  const [treeValue, setTreeValue] = useState(value || '');
  const [open, setOpen] = useState(false);

  const stringifiedData = useMemo(() => JSON.stringify(data), [data]);

  useEffect(() => {
    setTree(treeUtils.arrayToTree(data, dataConfig));
    // eslint-disable-next-line
  }, [stringifiedData]);

  useEffect(() => {
    setTreeValue(value || '');
  }, [value]);

  const handleExpand = item => {
    if (lookupId) {
      onExpand(item);
    } else {
      let newTree = treeUtils.treeMap(
        tree,
        treeItem => {
          if (treeItem[codeKey] === item[codeKey]) {
            treeItem.expanded = !treeItem.expanded;
          }
          return treeItem;
        },
        dataConfig
      );
      setTree(newTree);
    }
  };

  const handleChange = (item, unSelectable) => {
    if (unSelectable) {
      handleExpand(item);
    } else if (typeof onChange === 'function') {
      onChange(item[codeKey], item);
    } else if (value === undefined) {
      setTreeValue(item[codeKey]);
    }
  };

  return (
    <FormControl fullWidth={fullWidth} disabled={disabled} error={!!error}>
      <InputLabel htmlFor={name} margin="dense">
        {label}
      </InputLabel>
      <Select
        value={treeValue}
        renderValue={value => {
          let item =
            treeUtils.treeFind(tree, item => item[codeKey] === value, dataConfig) || {};
          return (
            <div>
              {renderLabel
                ? renderLabel(item)
                : item.label || item[`${i18next.language}_name`]}
            </div>
          );
        }}
        open={open}
        onOpen={() => {
          setOpen(true);
          if (treeValue && !open) {
            setTimeout(() => {
              let elem = document.getElementById(`ts_anchor_${treeValue}`);
              if (elem !== null) {
                elem.scrollIntoView({ block: 'center', inline: 'end' });
              }
            }, 100);
          }
        }}
        onClose={event => {
          let isExpander = event.target.closest('.ts-item-expander');
          let isUnSelectable = event.target.closest('.unselectable');
          if (!isExpander && !isUnSelectable) {
            setOpen(false);
          }
        }}
        {...clearFiled}
      >
        {treeUtils.treeToListMap(
          tree,
          (item, level) => {
            const loading = loadingArr.includes(item.code);
            const hasChild =
              (lookupId && !item.childItems) ||
              (item.hasOwnProperty(childKey) && item[childKey].length > 0);
            const unSelectable = item.unSelectable || (!parentSelectable && hasChild);
            return (
              <TreeItem
                key={item[codeKey]}
                unSelectable={unSelectable}
                value={item[codeKey]}
                style={{ marginLeft: 30 * level }}
                id={`ts_anchor_${item[codeKey]}`}
              >
                <span
                  className="ts-item-expander"
                  onClick={() => {
                    !loading && handleExpand(item);
                  }}
                >
                  {!!hasChild && (
                    <IconButton style={{ padding: '7px' }}>
                      {loading && <CircularProgress size={18} />}
                      {!loading && item.expanded && <ArrowDown fontSize="small" />}
                      {!loading && !item.expanded && <ArrowRight fontSize="small" />}
                    </IconButton>
                  )}
                </span>
                <span
                  className={`ts-item-label ${unSelectable ? 'unselectable' : ''}`}
                  onClick={() => handleChange(item, unSelectable)}
                >
                  {renderLabel ? renderLabel(item) : item[`${i18next.language}_name`]}
                </span>
              </TreeItem>
            );
          },
          dataConfig
        )}
      </Select>
      {!!error && <FormHelperText error={!!error}>{helperText}</FormHelperText>}
    </FormControl>
  );
};

const TreeSelect = props => {
  const { withoutForm, name, ...restProps } = props;

  return withoutForm ? (
    <TreeSelectControl name={name} {...restProps} />
  ) : (
    <Field name={name}>
      {fieldProps => <TreeSelectControl name={name} {...restProps} {...fieldProps} />}
    </Field>
  );
};

TreeSelect.propsTypes = {
  withoutForm: PropTypes.bool,
  label: PropTypes.string,
  data: PropTypes.array.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  renderLabel: PropTypes.func,
  disabled: PropTypes.bool,
  parentSelectable: PropTypes.bool,
  loading: PropTypes.bool
};

TreeSelect.defaultProps = {
  withoutForm: false,
  label: '',
  disabled: false,
  loading: false,
  parentSelectable: true
};

export default TreeSelect;
