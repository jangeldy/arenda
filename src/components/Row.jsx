import React from 'react';

function Row({ label, children, className }) {
  return (
    <div className={className || "flex items-center"}>
      <div className="col-5 line-height-1 mt1">{label}</div>
      <div className="col-7">{children}</div>
    </div>
  );
}

export default Row;
