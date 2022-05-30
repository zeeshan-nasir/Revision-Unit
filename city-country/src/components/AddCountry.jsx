import { Button, TextField } from "@mui/material";
import React from "react";

const AddCountry = () => {
    return (
        <div>
            <h1>Add Country</h1>
            <TextField
                id="outlined-basic"
                label="Enter Country Name"
                variant="outlined"
                sx={{ marginRight: "20px" }}
            />
            <Button sx={{ height: "55px" }} variant="contained">
                Add
            </Button>
        </div>
    );
};

export default AddCountry;
