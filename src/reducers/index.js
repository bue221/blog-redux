import { combineReducers } from "redux";

import userReducers from "./userReducer";
import publiReducer from "./publiReducer";
import tareasReducer from "./tareasReducer";

export default combineReducers({
  userReducers,
  publiReducer,
  tareasReducer,
});
