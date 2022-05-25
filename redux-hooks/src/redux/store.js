import { applyMiddleware, legacy_createStore } from "redux";
import { registerReducer } from "./Register/registerReducer";
import thunk from "redux-thunk";

export const store = legacy_createStore(
    registerReducer,
    applyMiddleware(thunk)
);
