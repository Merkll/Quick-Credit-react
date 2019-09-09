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


Storage.setItem('user', { isAdmin: false });

global.Storage = Storage;

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default hot(App);
