import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function requestLeaveReducer(
  state = initialState.requestLeaves,
  action
) {
  switch (action.type) {
    case types.SEND_REQUESTLEAVE_SUCCESS:
      return [...state, { ...action.requestLeave }];
    default:
      return state;
  }
}
