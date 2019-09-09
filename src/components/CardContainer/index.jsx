/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

export default class CardContainer extends React.Component {
  render() {
    return (
      <div className="row card-container">
        {this.props.children}
      </div>
    );
  }
}
