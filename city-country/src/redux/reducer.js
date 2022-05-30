import { SET_CITY, SET_COUNTRY } from "./action";

const init = {
    countries: [],
    cities: [],
};

export const reducer = (state = init, action) => {
    switch (action.type) {
        case SET_COUNTRY:
            return {
                ...state,
                countries: [...state.countries, action.payload],
            };
        case SET_CITY:
            return { ...state, cities: [...state.cities, action.payload] };
        default:
            return state;
    }
};
