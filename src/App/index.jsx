// react libraries
import 'babel-polyfill';
import React from 'react';

// third-party libraries
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';

import Loader from 'components/Loader';

// components
import Routes from './Routes';

import Storage from '../storage';

// store
import store from '../store';

global.Storage = Storage;

const App = () => (
  <Provider store={store}>
    <Loader />
    <Routes />
  </Provider>
);

export default hot(App);
