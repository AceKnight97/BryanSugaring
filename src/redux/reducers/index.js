import { combineReducers } from "redux";
import AppFlowActions from "../../constants";
import auth from "../../helper/auth";
import initialState from "./initialState";
import login from "./login";

const appReducer = combineReducers({
  login,
});

function rootReducer(state, action) {
  if (action.type === AppFlowActions.LOGOUT_REQUEST) {
    console.log("heare");
    auth.logout();
    return initialState;
  }

  return appReducer(state, action);
}

export default rootReducer;
