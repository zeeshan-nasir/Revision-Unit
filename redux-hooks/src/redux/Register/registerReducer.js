import { REGISTER_USER } from "./action";

const init = { userRegisteration: false };

export const registerReducer = (state = init, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return { userRegisteration: action.payload };
        default:
            return state;
    }
};
