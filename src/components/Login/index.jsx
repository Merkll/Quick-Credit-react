/* eslint-disable react/prop-types */
// react libraries
import React, { Component } from 'react';

import Form from 'components/Form';

import { loginUser } from 'modules/auth';

// utils
import connect from 'utils/connect';

import 'scss/home';


/**
 * @exports
 * @class HomePage
 * @extends Component
 * @classdesc Creates HomePage Component
 *
 * @returns {JSX} HomePage Component
 */
class Login extends Component {
  fields = [{
    label: '',
    placeHolder: 'Email address',
    type: 'text',
    name: 'email',
  }, {
    label: '',
    placeHolder: 'Password',
    type: 'password',
    name: 'password',
  }]

  componentDidMount() {

  }

  onFormSubmit = (formData) => {
    const { loginUserDispatch } = this.props;

    loginUserDispatch(formData);
  }

  render() {
    const { message: { message } } = this.props;
    return (
      <>
        <Form doneLoading={!!message} fields={this.fields} header={<h4 className="heading">User Login</h4>} onSubmit={this.onFormSubmit} />
      </>
    );
  }
}

export default connect({ loginUserDispatch: loginUser })(Login);
