import { FAILURE_MESSAGE_ALERT } from 'modules/message/types';

import {
  USER_AUTH_SUCESS, USER_AUTH_FAILURE, USER_LOGOUT
} from './types';

import Storage from '../../../storage';

import API from './requests';

export const logoutUser = () => ({ type: USER_LOGOUT });
export const authFailure = (payload) => ({ type: USER_AUTH_FAILURE, payload });

export const authSucess = (payload) => ({ type: USER_AUTH_SUCESS, payload });

export const loginUser = (payload) => async (dispatch) => {
  try {
    const { data } = await API.login(payload);

    Storage.setItem('user', data);

    dispatch({ type: USER_AUTH_SUCESS, payload: { data } });
  } catch (error) {
    dispatch(authFailure());
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



const initialState = { data: Storage.getItem('user') || {} };

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
  case USER_AUTH_SUCESS:
    return { error: false, ...payload };
  case USER_AUTH_FAILURE:
    return { error: true, ...payload };
  case USER_LOGOUT:
    return {};
  default:
    return state;
  }
};
