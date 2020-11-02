import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "../reducers/index";

const store = createStore(
  reducers, //reducers
  {}, // initialstate
  applyMiddleware(reduxThunk)
);

export default store;
