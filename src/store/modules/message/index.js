import {
  SUCCESS_MESSAGE_ALERT, FAILURE_MESSAGE_ALERT, CLEAR_MESSAGE_ALERT
} from './types';


export const clearAlertMessage = () => ({ type: CLEAR_MESSAGE_ALERT });

export default (state = {}, action) => {
  const { payload } = action;
  switch (action.type) {
  case SUCCESS_MESSAGE_ALERT:
    return { error: false, active: true, ...payload };
  case FAILURE_MESSAGE_ALERT:
    return { error: true, active: true, ...payload };
  case CLEAR_MESSAGE_ALERT:
    return { error: false };
  default:
    return state;
  }
};
