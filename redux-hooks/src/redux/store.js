import { applyMiddleware, legacy_createStore } from "redux";
import { registerReducer } from "./Register/registerReducer";
import ReduxThunk from "redux-thunk";

// const middleware = (store) => (next) => (action) => {
//     if (typeof action === "function") {
//         return action(store.dispatch);
//     }
//     next(action);
// };

export const store = legacy_createStore(
    registerReducer,
    applyMiddleware(ReduxThunk)
);
