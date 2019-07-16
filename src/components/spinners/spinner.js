import React from "react";
import { MDBSpinner } from 'mdbreact';

export default (props) => {
    const { color = 'red' } = props;
  return (
      <MDBSpinner {color} />
  );
}
