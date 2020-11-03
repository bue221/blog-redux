import { combineReducers } from "redux";
import userReducers from "./userReducer";
import publiReducer from "./publiReducer";

export default combineReducers({
  userReducers,
  publiReducer,
});
