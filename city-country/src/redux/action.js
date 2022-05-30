export const SET_COUNTRY = "SET_COUNTRY";
export const SET_CITY = "SET_CITY";

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

export const addCountry = (data) => {
    return async () => {
        fetch("http://localhost:8080/countries", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((data) => data.json())
            .then((json) => setCountry(json));
    };
};

export const addCity = (data) => {
    return async () => {
        fetch("http://localhost:8080/cities", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((data) => data.json())
            .then((json) => setCity(json));
    };
};

export const deleteCity = (data) => {
    return () => {
        fetch(`http://localhost:8080/cities/${data.id}`, {
            method: "DELETE",
        });
    };
};
