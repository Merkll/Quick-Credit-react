/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

export default (props) => {
  const { header, children } = props;
  return (
    <div className="card">
      <div className="card-header">
        {header}
      </div>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};
