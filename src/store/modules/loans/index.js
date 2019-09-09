import { call, put, takeLatest } from 'redux-saga/effects';

import {
  GET_ALL_LOANS, GET_LOANS_SUCESS, GET_LOANS_FAILURE,
  GET_SINGLE_LOAN, POST_LOAN_REPAYMENT, VERIFY_LOAN_REQEST, GET_LOAN_REPAYMENTS,
  APPLY_FOR_LOAN
} from './types';

import API from './requests';

export const getAllLoans = (payload) => ({ type: GET_ALL_LOANS, payload });
export const getSingleLoan = (payload) => ({ type: GET_SINGLE_LOAN, payload });
export const getLoanRepayment = (payload) => ({ type: GET_LOAN_REPAYMENTS, payload });
export const getLoansFailure = (payload) => ({ type: GET_LOANS_FAILURE, payload });
export const getLoansSucess = (payload) => ({ type: GET_LOANS_SUCESS, payload });
export const postLoanRepayment = (payload) => ({ type: POST_LOAN_REPAYMENT, payload });
export const verifyLoan = (payload) => ({ type: VERIFY_LOAN_REQEST, payload });
export const applyForLoan = (payload) => ({ type: APPLY_FOR_LOAN, payload });


export function* getAllLoansWorker(action) {
  try {
    const passwordResetResponse = yield call(API.getAllLoans, action.payload);

    yield put(getLoansSucess({ ...action.payload, ...passwordResetResponse }));
  } catch (error) {
    yield put(getLoansFailure({ ...error }));
  }
}

export function* getSingleLoanWorker(action) {
  try {
    const passwordResetResponse = yield call(API.getSingleLoan, action.payload);

    yield put(getLoansSucess({ ...action.payload, ...passwordResetResponse }));
  } catch (error) {
    yield put(getLoansFailure({ ...error }));
  }
}

export function* getLoanRepaymentsWorker(action) {
  try {
    const passwordResetResponse = yield call(API.getLoanRepayments, action.payload);

    yield put(getLoansSucess({ ...action.payload, ...passwordResetResponse }));
  } catch (error) {
    yield put(getLoansFailure({ ...error }));
  }
}

export function* watchAllLoanRequest() {
  yield takeLatest(GET_ALL_LOANS, getAllLoansWorker);
  yield takeLatest(GET_SINGLE_LOAN, getSingleLoanWorker);
  yield takeLatest(GET_LOAN_REPAYMENTS, getLoanRepaymentsWorker);
}

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
