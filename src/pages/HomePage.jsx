/* eslint-disable react/prop-types */
// react libraries
import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import Message from 'components/Message';
import Signup from 'components/Signup';
import Login from 'components/Login';

import { loginUser } from 'modules/auth';

// utils
import connect from 'utils/connect';

import discount from 'assets/images/undraw_discount_d4bd.svg';
import noTime from 'assets/images/undraw_in_no_time_6igu.svg';
import happy from 'assets/images/undraw_happy_feeling_slmw.svg';

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
  constructor(props) {
    super(props);
    this.state = { isSignup: false };
  }

  componentDidMount() {

  }

  onFormSubmit = (formData) => {
    const { loginUserDispatch } = this.props;

    loginUserDispatch(formData);
  }

  changeForm = () => this.setState(({ isSignup }) => ({ isSignup: !isSignup }))

  render() {
    const { auth: { data = {} } } = this.props;

    const { isSignup } = this.state;

    return (
      <>
        {data.id && <Redirect to="/client" />}
        <Message />
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
                  {isSignup ? <Signup /> : <Login />}
                  <span className="primary-color size-16">
                      Not yet a Member?
                    <button className="button-link" type="button" onClick={this.changeForm}>Signup Here</button>
                  </span>
                  <br />
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
              <img src={discount} alt="" srcSet="" />
              <p className="img-text">Low Interest</p>
            </div>
            <div>
              <img src={noTime} alt="" srcSet="" />
              <p className="img-text">Quick Loan Disbursement</p>
            </div>
            <div>
              <img src={happy} alt="" srcSet="" />
              <p className="img-text">Happy Customers</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect({ loginUserDispatch: loginUser })(HomePage);
