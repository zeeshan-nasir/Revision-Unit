import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const AddCountry = () => {
    const [country, setCountry] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCountry({ ...country, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        fetch("http://localhost:3000/countries", {
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
                id="name"
                label="Enter Country Name"
                variant="outlined"
                sx={{ marginRight: "20px" }}
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
