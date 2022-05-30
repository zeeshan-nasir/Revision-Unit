import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const AddCountry = () => {
    const [country, setCountry] = useState("");
    const handleChange = (e) => {
        setCountry({ ...country, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/cities", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(country),
        });
    };

    return (
        <div>
            <h1>Add Country</h1>
            <TextField
                id="outlined-basic"
                label="Enter Country Name"
                variant="outlined"
                sx={{ marginRight: "20px" }}
                name="countryName"
                onChange={handleChange}
            />
            <Button
                onClick={handleSubmit}
                sx={{ height: "55px" }}
                variant="contained"
            >
                Add
            </Button>
        </div>
    );
};

export default AddCountry;
