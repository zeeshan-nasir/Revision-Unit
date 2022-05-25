import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate("/login")}>Login</button>
        </div>
    );
};

export default Home;
