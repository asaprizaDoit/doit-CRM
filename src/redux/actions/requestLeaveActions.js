import * as types from "./actionTypes";
import * as requestLeaveApi from "../../api/requestLeaveApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function sendRequestLeaveSuccess(requestLeave) {
  return { type: types.SEND_REQUESTLEAVE_SUCCESS, requestLeave };
}

export function saveRequestLeave(requestLeave) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return requestLeaveApi
      .saveRequestLeave(requestLeave)
      .then((savedRequestLeave) => {
        dispatch(sendRequestLeaveSuccess(savedRequestLeave));
      })
      .catch((error) => {
        dispatch(apiCallError());
        throw error;
      });
  };
}
