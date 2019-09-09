import { FAILURE_MESSAGE_ALERT, SUCCESS_MESSAGE_ALERT } from 'modules/message/types';
import { GET_LOANS_SUCESS, GET_LOANS_FAILURE } from './types';

import API from './requests';


export const getLoansFailure = (payload) => ({ type: GET_LOANS_FAILURE, payload });
export const getLoansSucess = (payload) => ({ type: GET_LOANS_SUCESS, payload });

export const verifyLoan = (payload) => async (dispatch) => {
  try {
    const { data } = await API.verifyLoan({ ...payload, status: 'approved' });

    dispatch({ type: SUCCESS_MESSAGE_ALERT, payload: data });
  } catch (error) {
    dispatch({ type: FAILURE_MESSAGE_ALERT, payload: { ...error } });
  }
};

export const postLoanRepayment = (payload) => async (dispatch) => {
  try {
    const { loan } = payload;
    const { data } = await API.postLoanRepayment({ ...loan });

    dispatch(getLoansSucess({ payload, loan: data }));
  } catch (error) {
    dispatch({ type: FAILURE_MESSAGE_ALERT, payload: { ...error } });
  }
};


export const getLoanRepayment = (payload) => async (dispatch) => {
  try {
    const { data } = await API.getLoanRepayments(payload);

    dispatch(getLoansSucess({ payload, repayments: data }));
  // eslint-disable-next-line no-empty
  } catch (error) {}
};

export const getSingleLoan = (payload) => async (dispatch) => {
  try {
    const { data } = await API.getSingleLoan(payload);

    dispatch(getLoansSucess({ payload, loan: data }));
  } catch (error) {
    dispatch({ type: FAILURE_MESSAGE_ALERT, payload: { ...error } });
  }
};

export const getAllLoans = (payload) => async (dispatch) => {
  try {
    const { data } = await API.getAllLoans();

    dispatch(getLoansSucess({ payload, loans: data }));
  } catch (error) {
    dispatch({ type: FAILURE_MESSAGE_ALERT, payload: { ...error } });
  }
};

export const applyForLoan = (payload) => async (dispatch) => {
  try {
    const { data } = await API.applyForLoan(payload);

    dispatch({ type: SUCCESS_MESSAGE_ALERT, payload: { message: 'Loan application sucessfull' } });
  } catch (error) {
    dispatch({ type: FAILURE_MESSAGE_ALERT, payload: { ...error } });
  }
};

export default (state = { loans: [] }, action) => {
  const { payload = {} } = action;

  switch (action.type) {
  case GET_LOANS_SUCESS:
    return { ...state, error: false, ...payload };
  case GET_LOANS_FAILURE:
    return { ...state, error: true, ...payload };
  default:
    return state;
  }
};
