/* eslint-disable no-empty */
import {
  GET_CLIENTS_SUCESS, GET_CLIENTS_FAILURE
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
