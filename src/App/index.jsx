// react libraries
import 'babel-polyfill';
import React from 'react';

// third-party libraries
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';

// components
import Routes from './Routes';

import Storage from '../storage';

// store
import store from '../store';

// const user = {
//   address: '684 Beahan View',
//   createdon: '2019-09-09',
//   email: 'demouser@demo.com',
//   firstname: 'demo',
//   id: 3,
//   isadmin: true,
//   lastname: 'user',
//   status: 'unverified',
//   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaXNBZG1pbiI6dHJ1ZSwiZW1haWwiOiJkZW1vdXNlckBkZW1vLmNvbSIsImlhdCI6MTU2ODAzMTQyMSwiZXhwIjoxNTY4MDc0NjIxfQ.X2ffV_Gt2yGM8-4PpUTuY09KjyzMLM7nyC3HPGopp-8',
//   updatedon: null,
// };

global.Storage = Storage;

// Storage.setItem('user', user);

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default hot(App);
