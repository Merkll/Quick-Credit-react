// third-party libraries
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from './rootReducer';

const enhancers = [];
const initialState = {};

const customMiddleware = (store) => (next) => (action) => {
  if (action.type !== 'LOADER_REQUEST') store.dispatch({ type: 'LOADER_REQUEST' });
  return next(action);
};

const middlewares = [customMiddleware, ReduxThunk];

if (process.env.NODE_ENV === 'development') {
  /* eslint-disable import/no-extraneous-dependencies, global-require */
  const logger = require('redux-logger').default;
  middlewares.push(logger);

  const { __REDUX_DEVTOOLS_EXTENSION__ } = window;

  if (typeof __REDUX_DEVTOOLS_EXTENSION__ === 'function') {
    enhancers.push(__REDUX_DEVTOOLS_EXTENSION__());
  }
}

const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers);
const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
