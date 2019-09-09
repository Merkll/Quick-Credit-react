import { call, put, takeLatest } from 'redux-saga/effects';

import {
  USER_LOGIN_REQUEST, USER_SIGNUP_REQUEST, USER_AUTH_SUCESS, USER_AUTH_FAILURE
} from './types';

import API from './requests';

export const loginUser = (payload) => ({ type: USER_LOGIN_REQUEST, payload });
export const signUpUser = (payload) => ({ type: USER_AUTH_SUCESS, payload });
export const authFailure = (payload) => ({ type: USER_AUTH_FAILURE, payload });
export const authSucess = (payload) => ({ type: USER_AUTH_SUCESS, payload });


const requestHandlers = {
  USER_SIGNUP_REQUEST: API.signUp,
  USER_LOGIN_REQUEST: API.login
};

export function* loginUserWorker(action) {
  try {
    const actionHandler = requestHandlers[action.type];

    const passwordResetResponse = yield call(actionHandler, action.payload);

    yield put(authSucess({ ...action.payload, ...passwordResetResponse }));
  } catch (error) {
    yield put(authFailure({ ...error }));
  }
}

export function* watchLoginRequest() {
  yield takeLatest(USER_LOGIN_REQUEST, loginUserWorker);
}

export function* watchSignUpRequest() {
  yield takeLatest(USER_SIGNUP_REQUEST, loginUserWorker);
}

export default (state = {}, action) => {
  const { payload } = action;
  switch (action.type) {
  case USER_AUTH_SUCESS:
    return { error: false, ...payload };
  case USER_AUTH_FAILURE:
    return { error: true, ...payload };
  default:
    return state;
  }
};
