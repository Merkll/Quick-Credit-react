/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

export default (props) => {
  const { color = 'gray', text = 'Loading...' } = props;

  return (
    <div className={`spinner-grow text-${color}`} style={{ color }} role="status">
      <span className="sr-only">{text}</span>
    </div>
  );
};
