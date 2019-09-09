/* eslint-disable react/prop-types */
// react libraries
import React from 'react';

// third-party libraries

// components
import Form from 'components/Form';

// helper functions
import connect from 'utils/connect';

import validationRule from 'validations/loan';

import { applyForLoan } from 'modules/loans';

import './LoanApplication';

const { loanApplication } = validationRule;


export class PasswordResetComponent extends React.Component {
  fields = [{
    label: '',
    placeHolder: 'Loan Amount',
    type: 'text',
    name: 'amount',
  }, {
    label: '',
    placeHolder: 'Loan Tenor',
    type: 'text',
    name: 'tenor',
  }, {
    label: '',
    placeHolder: 'Purpose',
    type: 'text',
    name: 'purpose',
  }];


  handleSubmit = (formData) => {
    const { applyForLoanDispatch } = this.props;

    applyForLoanDispatch(formData);
  };

  render() {
    return (
      <>
        <div className="password-reset">
          <span>Fill in your loan details </span>
          <span>We will get Back to you</span>

          <Form fields={this.fields} buttonText="Apply" onSubmit={this.handleSubmit} validationRule={loanApplication} />
        </div>
      </>
    );
  }
}

export default connect({
  applyForLoanDispatch: applyForLoan
})(PasswordResetComponent);
