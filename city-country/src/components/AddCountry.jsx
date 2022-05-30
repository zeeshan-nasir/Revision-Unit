import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCountry } from "../redux/action";

const AddCountry = () => {
    const [country, setCountry] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCountry({ ...country, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(addCountry(country));
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
