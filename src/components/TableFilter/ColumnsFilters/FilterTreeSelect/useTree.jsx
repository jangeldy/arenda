import { useEffect, useState } from 'react';
import {
  addChildren,
  arrayToTree,
  loadChildLevel,
  loadTree,
  treeFind,
  treeMap
} from './FilterTreeSelectUtils';

function useTree({
  value = '',
  onChange,
  parentSelectable,
  lookupId,
  filterCode = '',
  options = []
}) {
  const [loadingArr, setLoadingArr] = useState([]);
  const [tree, setTree] = useState(arrayToTree(options, value, true));
  const [status, setStatus] = useState(null);

  useEffect(() => {
    loadTree(lookupId, value, filterCode).then(tree => {
      if (!isCancelled) {
        setTree(tree);
        setStatus('loaded');
      }
    });

    let isCancelled = false;
    if (status !== null) {
      if (status === 'loading' || !treeFind(tree, item => item.code === value)) {
        loadTree(lookupId, value, filterCode).then(tree => {
          if (!isCancelled) {
            setTree(tree);
            setStatus('loaded');
          }
        });
      }
    }
    return () => {
      isCancelled = true;
    };
    // eslint-disable-next-line
  }, [lookupId, value, filterCode, status]);

  const handleExpand = (item, changeTrigger) => {
    let newTree = treeMap(tree, treeItem => {
      if (treeItem.code === item.code) {
        treeItem.expanded = !treeItem.expanded;
      }
      return treeItem;
    });
    if (lookupId && !item.childItems) {
      setLoadingArr([...loadingArr, item.code]);
      loadChildLevel(lookupId, item.code).then(children => {
        if (changeTrigger && children.length === 0) {
          if (typeof onChange === 'function') {
            onChange(item.code);
          }
        }
        addChildren(newTree, item.code, children);
        setTree(newTree);
        let arr = loadingArr.filter(code => code === item.code);
        setLoadingArr(arr);
      });
    } else {
      setTree(newTree);
    }
  };

  return {
    tree,
    loadingArr,
    onExpand: handleExpand
  };
}

export default useTree;
