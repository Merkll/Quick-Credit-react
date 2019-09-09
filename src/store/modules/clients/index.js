import { call, put, takeLatest } from 'redux-saga/effects';

import {
  GET_ALL_CLIENTS, GET_CLIENTS_SUCESS, GET_CLIENTS_FAILURE, GET_SINGLE_CLIENT, UPDATE_SINGLE_CLIENT
} from './types';

import API from './requests';

export const getAllClients = (payload) => ({ type: GET_ALL_CLIENTS, payload });
export const getSingleClient = (payload) => ({ type: GET_SINGLE_CLIENT, payload });
export const updateSingleClient = (payload) => ({ type: UPDATE_SINGLE_CLIENT, payload });
export const getClientsFailure = (payload) => ({ type: GET_CLIENTS_FAILURE, payload });
export const getClientsSucess = (payload) => ({ type: GET_CLIENTS_SUCESS, payload });


export function* clientsWorker(action) {
  try {
    const passwordResetResponse = yield call(API.getAllClients, action.payload);

    yield put(getClientsSucess({ ...action.payload, ...passwordResetResponse }));
  } catch (error) {
    yield put(getClientsFailure({ ...error }));
  }
}

export function* getSingleClientWorker(action) {
  try {
    const passwordResetResponse = yield call(API.getSingleClient, action.payload);

    yield put(getClientsSucess({ ...action.payload, ...passwordResetResponse }));
  } catch (error) {
    yield put(getClientsFailure({ ...error }));
  }
}

export function* watchAllClientsRequest() {
  yield takeLatest(GET_ALL_CLIENTS, clientsWorker);
  yield takeLatest(GET_SINGLE_CLIENT, getSingleClientWorker);
}

export default (state = { Clients: [] }, action) => {
  const { payload = {} } = action;
  switch (action.type) {
  case GET_CLIENTS_SUCESS:
    return { error: false, ...payload };
  case GET_CLIENTS_FAILURE:
    return { error: true, ...payload };
  default:
    return state;
  }
};
