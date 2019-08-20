import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from '../reducers';


export default createStore(combineReducers(reducers), applyMiddleware(ReduxThunk));
