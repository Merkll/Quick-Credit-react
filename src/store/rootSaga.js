// third-party libraries
import { all } from 'redux-saga/effects';

// modules
import { watchLoginRequest } from 'modules/auth';
import { watchAllClientsRequest } from 'modules/clients';

export default function* rootSaga() {
  yield all([
    watchLoginRequest(),
    watchAllClientsRequest()
  ]);
}
