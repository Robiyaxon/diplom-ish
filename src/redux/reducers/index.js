import { combineReducers } from "redux";
import authReducer from "./authReducer";

const appReducer = combineReducers({
  authReducer
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
