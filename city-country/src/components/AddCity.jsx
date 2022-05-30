import React, { useEffect, useState } from "react";
import {
    Button,
    FormControl,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";

const AddCity = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let fetched = await fetch("http://localhost:3000/countries");
            fetched = await fetched.json();
            console.log(fetched);
            setData(fetched);
        };

        getData();
    }, []);

    return (
        <FormControl>
            <h1>Add City Data</h1>
            <TextField
                id="outlined-basic"
                label="Enter City Name"
                variant="outlined"
                sx={{ marginBottom: "20px" }}
            />
            <TextField
                id="outlined-basic"
                label="Enter Population"
                variant="outlined"
                sx={{ marginBottom: "20px" }}
            />
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                sx={{ marginBottom: "20px" }}
                label="Select Country"
                // value={age}
                // onChange={handleChange}
            >
                {data.map((e) => {
                    return (
                        <MenuItem key={e.name} value={10}>
                            {e.name}
                        </MenuItem>
                    );
                })}
            </Select>
            <Button sx={{ height: "50px" }} variant="contained">
                Add
            </Button>
        </FormControl>
    );
};

export default AddCity;
