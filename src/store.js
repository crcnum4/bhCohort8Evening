import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const INITIAL_STATE = {};

const middleware = [thunk];

const store = createStore(
  reducers,
  INITIAL_STATE,
  compose(applyMiddleware(...middleware))
);

export default store;
