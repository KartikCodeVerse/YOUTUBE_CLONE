import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import Reducers from "../Reducers/Reducers.js";

const store = createStore(Reducers, compose(applyMiddleware(thunk)));

export default store;
