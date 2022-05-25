export const REGISTER_USER = "REGISTER_USER";

export const registeration = (data) => {
    return {
        type: REGISTER_USER,
        payload: data,
    };
};

export const registerFunc = () => async (dispatch, form) => {
    let fetched = await fetch(
        "https://masai-api-mocker.herokuapp.com/auth/register",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        }
    );

    let data = await fetched.json();
    console.log("data:", data);

    if (data.error === false) {
        dispatch(
            registeration({ userRegisteration: "User register successfully!" })
        );
    } else {
        dispatch(
            registeration({ userRegisteration: "User registeration failed!" })
        );
    }
};
