import React from "react";
import { Button } from 'reactstrap';

import happyFeeling from '../assests/images/undraw_happy_feeling_slmw.svg';
import discount from '../assests/images/undraw_discount_d4bd.svg';
import noTime from '../assests/images/undraw_in_no_time_6igu.svg';

export default class Home extends React.Component{
    render() {
        return (
            <div className="container">
                <Button color="danger">Danger!</Button>
                <div id="top-menu-root"></div>
                <div className="waveContainer waveAnimation">
                        <div className="overlay-text">
                            <h2> Get instant loans stress free. </h2><br />
                            <h3>All in 15 mins With the NO. 1 credit Provider </h3>          
                        </div>
                    <div className="home-bg-image"></div>
                        <div className="overlay home-overlay animate-fadein">
                            <div className="row to-front">
                                <div className="overlay-text">
                                    Get instant loans stress free. All in 15 mins With the NO. 1 credit Provider
                                </div>
                                <div className="offset-2 col-8">
                                    <div className="form login-form">
                                            <h4 className="heading">User Login</h4>
                                            <form action="" id="login">
                                                <div className="input-wrapper">
                                                    <label htmlFor="email">Email</label>
                                                    <input type="email" name="email" data-validator="email" required />
                                                </div>
                                                <div className="input-wrapper">
                                                    <label htmlFor="">Password</label>
                                                    <input type="password" name="password" data-validator="password" required />
                                                </div>
                                                <button className="btn primary-bg-color primary-color home-btn" type="submit"> Login</button>
                                                <span className="primary-color size-16">Not yet a Member? <a href="./signup.html" className="color-red">Signup here</a></span>
                                                <br />
                                                <span className="primary-color size-16">Forgot password reset? <a href="./password-reset.html" className="color-red">here</a></span>
                                            </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="waveContainerInner bgTop">
                        <div className="wave waveTop"></div>
                        </div>
                        <div className="waveContainerInner bgMiddle">
                        <div className="wave waveMiddle"></div>
                        </div>
                        <div className="waveContainerInner bgBottom">
                        <div className="wave waveBottom"></div>
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
                                    <img src={happyFeeling} alt="" srcSet="" />
                                    <p className="img-text">Happy Customers</p>
                            </div>
                        </div>
                </div>
            </div> 
            
        )
    }
}