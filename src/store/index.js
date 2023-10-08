// redux store is created to store the state where we can use and change the state

import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootreducer from "../reducers";

let store;
export function configureStore() {
  store = createStore(rootreducer, applyMiddleware(thunk, logger));
  return store;
}