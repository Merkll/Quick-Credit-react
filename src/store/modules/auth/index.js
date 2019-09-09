import { call, put, takeLatest } from 'redux-saga/effects';


import { FAILURE_MESSAGE_ALERT } from 'modules/message/types';

import {
  USER_LOGIN_REQUEST, USER_AUTH_SUCESS, USER_AUTH_FAILURE
} from './types';

import Storage from '../../../storage';

import API from './requests';

export const loginUser = (payload) => async (dispatch) => {
  try {
    const { data } = await API.login(payload);

    Storage.setItem('user', data);

    dispatch({ type: USER_AUTH_SUCESS, payload: { data } });
  } catch (error) {
    dispatch({ type: FAILURE_MESSAGE_ALERT, payload: { ...error } });
  }
};

export const signUpUser = (payload) => async (dispatch) => {
  try {
    const { data } = await API.signUp(payload);

    Storage.setItem('user', data);

    dispatch({ type: USER_AUTH_SUCESS, payload: { data } });
  } catch (error) {
    dispatch({ type: FAILURE_MESSAGE_ALERT, payload: { ...error } });
  }
};

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


const initialState = { data: Storage.getItem('user') || {} };

export default (state = initialState, action) => {
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
