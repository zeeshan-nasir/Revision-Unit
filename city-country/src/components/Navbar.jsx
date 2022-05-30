import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div
            style={{
                height: "60px",
                display: "flex",
                justifyContent: "center",
                gap: "100px",
                backgroundColor: "black",
                alignItems: "center",
                marginBottom: "40px",
            }}
        >
            <Link
                style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "18px",
                }}
                to={"/"}
            >
                Home
            </Link>
            <Link
                style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "18px",
                }}
                to={"/add-city"}
            >
                Add City
            </Link>
            <Link
                style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "18px",
                }}
                to={"/add-country"}
            >
                Add Country
            </Link>
        </div>
    );
};

export default Navbar;
