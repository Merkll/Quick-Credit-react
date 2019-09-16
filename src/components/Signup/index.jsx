/* eslint-disable react/prop-types */
// react libraries
import React, { Component } from 'react';

import Form from 'components/Form';

import { signUpUser } from 'modules/auth';

import validations from 'validations/auth';

import connect from 'utils/connect';

import 'scss/home';

const { signupValidation } = validations;

/**
 * @exports
 * @class HomePage
 * @extends Component
 * @classdesc Creates HomePage Component
 *
 * @returns {JSX} HomePage Component
 */
class Signup extends Component {
  fields = [{
    label: '',
    placeHolder: 'First Name',
    type: 'text',
    name: 'firstName',
    required: true
  }, {
    label: '',
    placeHolder: 'Last Name',
    type: 'text',
    name: 'lastName',
    required: true
  }, {
    label: '',
    placeHolder: 'Email',
    type: 'email',
    name: 'email',
    required: true
  }, {
    label: '',
    placeHolder: 'Mobile',
    type: 'text',
    name: 'mobile',
    required: true
  }, {
    label: '',
    placeHolder: 'Password',
    type: 'password',
    name: 'password',
  }, {
    label: '',
    placeHolder: 'Confirm Password',
    type: 'password',
    name: 'passwordConfirm',
    required: true
  }, {
    label: '',
    placeHolder: 'Contact address',
    type: 'text',
    name: 'address',
    required: true
  }]

  componentDidMount() {

  }

  onFormSubmit = (formData) => {
    const { signUpUserDispatch } = this.props;

    signUpUserDispatch(formData);
  }

  render() {
    const { message: { message } } = this.props;
    return (
      <>
        <Form
          doneLoading={!!message}
          fields={this.fields}
          header={<h4 className="heading">User Signup</h4>}
          onSubmit={this.onFormSubmit}
          validationRule={signupValidation}
        />
      </>
    );
  }
}

export default connect({ signUpUserDispatch: signUpUser })(Signup);
