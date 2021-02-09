import React from 'react';
import Button from '@material-ui/core/Button';
import MuiPagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import ArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeftOutlined';
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRightOutlined';

function Pagination(props) {
  return (
    <MuiPagination
      {...props}
      color="secondary"
      renderItem={(item) => {
        if (item.type === 'previous') {
          return <Arrow {...item} icon={<ArrowLeftIcon />} />;
        }
        if (item.type === 'next') {
          return <Arrow {...item} icon={<ArrowRightIcon />} />;
        }
        return <PaginationItem {...item} />;
      }}
      count={10}
    />
  );
}

function Arrow({ icon, ...props }) {
  return (
    <Button
      {...props}
      color="default"
      style={{
        opacity: props.disabled ? 0 : 1,
        borderRadius: '50%',
        minWidth: 'inherit',
        padding: 4,
      }}
      variant="contained"
      children={icon}
    />
  );
}
export default Pagination;
