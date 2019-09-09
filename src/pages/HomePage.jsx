/* eslint-disable react/prop-types */
// react libraries
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

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
class HomePage extends Component {
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
    const { auth: { message } } = this.props;

    return (
      <>
        <div className="container">
          <div className="menu">
            <a href="./index.html"><span className="logo">Quick Credit</span></a>
          </div>
          <div className="overlay-text">
            <h2> Get instant loans stress free. </h2>
            <br />
            <h3>All in 15 mins With the NO. 1 credit Provider </h3>

          </div>
          <div className="home-bg-image" />
          <div className="overlay home-overlay animate-fadein">
            <div className="row to-front">
              <div className="offset-1 col-10">
                <div className="form login-form">
                  <Form doneLoading={!!message} fields={this.fields} header={<h4 className="heading">User Login</h4>} onSubmit={this.onFormSubmit}>
                    <span className="primary-color size-16">
Not yet a Member?
                      {' '}
                      <Link to="/signup">Signup Here</Link>
                    </span>
                    <br />
                  </Form>
                </div>
              </div>
            </div>
          </div>
          <div className="waveContainer waveAnimation">
            <div className="waveContainerInner bgTop">
              <div className="wave waveTop" />
            </div>
            <div className="waveContainerInner bgMiddle">
              <div className="wave waveMiddle" />
            </div>
            <div className="waveContainerInner bgBottom">
              <div className="wave waveBottom" />
            </div>
          </div>
        </div>
        <div className="banner">
          <p className="banner-text">Why choose us?</p>
          <div className="inner">
            <div>
              <img src="./assets/images/undraw_discount_d4bd.svg" alt="" srcSet="" />
              <p className="img-text">Low Interest</p>
            </div>
            <div>
              <img src="./assets/images/undraw_in_no_time_6igu.svg" alt="" srcSet="" />
              <p className="img-text">Quick Loan Disbursement</p>
            </div>
            <div>
              <img src="./assets/images/undraw_happy_feeling_slmw.svg" alt="" srcSet="" />
              <p className="img-text">Happy Customers</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect({ loginUserDispatch: loginUser })(HomePage);
