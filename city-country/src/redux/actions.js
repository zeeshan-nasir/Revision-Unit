export const ADD_COUNTRY = "ADD_COUNTRY";

export const addCountry = (data) => async () => {
    fetch("http://localhost:3000/countries", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    });
};
