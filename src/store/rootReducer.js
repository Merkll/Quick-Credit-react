// third-party libraries
import { combineReducers } from 'redux';

// modules
import auth from 'modules/auth';
import loans from 'modules/loans';
import clients from 'modules/clients';
import message from 'modules/message';
import loader from 'modules/loader';

export default combineReducers({
  auth,
  loans,
  clients,
  message,
  loader
});
