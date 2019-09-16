/* eslint-disable react/prop-types */
// react libraries
import React, { useEffect } from 'react';

import { Redirect } from 'react-router-dom';


import connect from 'utils/connect';
import { logoutUser } from 'modules/auth';

import 'scss/home';

const Logout = (props) => {
  Storage.removeItem('user');
  const { logoutUser: logoutUserDispatch } = props;

  useEffect(() => {
    logoutUserDispatch();
  }, []);

  return (
    <Redirect to="/" />
  );
};

export default connect({ logoutUser })(Logout);
