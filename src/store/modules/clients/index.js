/* eslint-disable no-empty */
import { call, put, takeLatest } from 'redux-saga/effects';

import {
  GET_ALL_CLIENTS, GET_CLIENTS_SUCESS, GET_CLIENTS_FAILURE, GET_SINGLE_CLIENT
} from './types';

import API from './requests';

export const getClientsFailure = (payload) => ({ type: GET_CLIENTS_FAILURE, payload });
export const getClientsSucess = (payload) => ({ type: GET_CLIENTS_SUCESS, payload });


export const updateSingleClient = (payload) => async (dispatch) => {
  try {
    const { data } = await API.verifyClient(payload);

    dispatch(getClientsSucess({ ...payload, client: data }));
  } catch (error) {
  }
};

export const getAllClients = (payload) => async (dispatch) => {
  try {
    const { data } = await API.getAllClients();

    dispatch(getClientsSucess({ ...payload, clients: data }));
  } catch (error) {
  }
};

export const getSingleClient = (payload) => async (dispatch) => {
  try {
    const { data } = await API.getSingleClient(payload);

    dispatch(getClientsSucess({ ...payload, client: data }));
  } catch (error) {
  }
};

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
