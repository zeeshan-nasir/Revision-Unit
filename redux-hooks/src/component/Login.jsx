import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerFunc } from "../redux/Register/action";
import { store } from "../redux/store";

const Login = () => {
    const [register, setRegister] = useState({
        name: "",
        email: "",
        password: "",
        username: "",
        mobile: "",
        description: "",
    });

    const [login, setLogin] = useState({
        username: "",
        password: "",
    });

    const dispatch = useDispatch();
    const registeration = useSelector(() => store.userRegisteration);

    const handleRegister = (e) => {
        const { id, value } = e.target;

        setRegister({
            ...register,
            [id]: value,
        });
    };

    const handleLogin = (e) => {
        const { id, value } = e.target;

        setLogin({
            ...login,
            [id]: value,
        });
    };

    const submitRegister = () => {
        dispatch(registerFunc(register));
    };

    const submitLogin = async () => {
        let fetched = await fetch(
            "https://masai-api-mocker.herokuapp.com/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(login),
            }
        );
        let data = await fetched.json();
        console.log(data);
    };

    return (
        <div className="login">
            <div>
                <div className="loginDiv">
                    <h1>Register</h1>
                    <input
                        onClick={handleRegister}
                        type="text"
                        placeholder="Enter name"
                        id="name"
                    />
                    <input
                        onClick={handleRegister}
                        type="text"
                        placeholder="Enter email"
                        id="email"
                    />
                    <input
                        onClick={handleRegister}
                        type="text"
                        placeholder="Enter password"
                        id="password"
                    />
                    <input
                        onClick={handleRegister}
                        type="text"
                        placeholder="Enter username"
                        id="username"
                    />
                    <input
                        onClick={handleRegister}
                        type="text"
                        placeholder="Enter phone number"
                        id="mobile"
                    />
                    <input
                        onClick={handleRegister}
                        type="text"
                        placeholder="Enter description"
                        id="description"
                    />
                    <button onClick={submitRegister}>Register</button>

                    <div>{registeration ? <h3>registeration</h3> : null}</div>
                </div>
            </div>
            <div>
                <div className="loginDiv">
                    <h1>Login</h1>
                    <input
                        onClick={handleLogin}
                        type="text"
                        placeholder="Enter username"
                    />
                    <input
                        onClick={handleLogin}
                        type="text"
                        placeholder="Enter password"
                    />
                    <button onClick={submitLogin}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
