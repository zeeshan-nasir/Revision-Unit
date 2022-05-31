export const FETCH_COUNTRY = "FETCH_COUNTRY";
export const FETCH_CITY = "FETCH_CITY";
export const SET_COUNTRY = "SET_COUNTRY";
export const SET_CITY = "SET_CITY";

export const getCountry = (data) => {
    return {
        type: FETCH_COUNTRY,
        payload: data,
    };
};
export const getCity = (data) => {
    return {
        type: FETCH_CITY,
        payload: data,
    };
};

export const setCountry = (data) => {
    return {
        type: SET_COUNTRY,
        payload: data,
    };
};

export const setCity = (data) => {
    return {
        type: SET_CITY,
        payload: data,
    };
};

export const fetchCountry = () => {
    return async (dispatch) => {
        fetch("http://localhost:8080/countries")
            .then((data) => data.json())
            .then((json) => dispatch(getCountry(json)));
    };
};

export const fetchCity = () => {
    return async (dispatch) => {
        fetch("http://localhost:8080/cities")
            .then((data) => data.json())
            .then((json) => dispatch(getCity(json)));
    };
};

export const addCountry = (data) => {
    return async (dispatch) => {
        fetch("http://localhost:8080/countries", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((data) => data.json())
            .then((json) => dispatch(setCountry(json)));
    };
};

export const addCity = (data) => {
    return async (dispatch) => {
        fetch("http://localhost:8080/cities", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((data) => data.json())
            .then((json) => dispatch(setCity(json)));
    };
};

export const deleteCity = (data) => {
    return () => {
        fetch(`http://localhost:8080/cities/${data.id}`, {
            method: "DELETE",
        });
    };
};
