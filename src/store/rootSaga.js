// third-party libraries
import { all } from 'redux-saga/effects';

// modules
import { watchSignUpRequest, watchLoginRequest } from 'modules/auth';
import { watchAllLoanRequest } from 'modules/loans';
import { watchAllClientsRequest } from 'modules/clients';

export default function* rootSaga() {
  yield all([
    watchSignUpRequest(),
    watchLoginRequest(),
    watchAllLoanRequest(),
    watchAllClientsRequest()
  ]);
}
