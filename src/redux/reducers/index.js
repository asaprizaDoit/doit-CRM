import { combineReducers } from "redux";
import requestLeaves from "./requestLeaveReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({ requestLeaves, apiCallsInProgress });

export default rootReducer;
