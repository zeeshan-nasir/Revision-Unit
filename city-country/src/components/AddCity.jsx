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
    const [formData, setFormData] = useState({
        city: "",
        country: "",
        population: "",
    });

    useEffect(() => {
        const getData = async () => {
            let fetched = await fetch("http://localhost:3000/countries");
            fetched = await fetched.json();
            console.log(fetched);
            setData(fetched);
        };

        getData();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/cities", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(formData),
        });
    };

    return (
        <FormControl>
            <h1>Add City Data</h1>
            <TextField
                id="outlined-basic"
                label="Enter City Name"
                variant="outlined"
                sx={{ marginBottom: "20px" }}
                name="city"
                onChange={handleChange}
            />
            <TextField
                id="outlined-basic"
                label="Enter Population"
                variant="outlined"
                sx={{ marginBottom: "20px" }}
                name="population"
                onChange={handleChange}
            />
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                sx={{ marginBottom: "20px" }}
                label="Select Country"
                onChange={handleChange}
                name="country"
            >
                {data.map((e) => {
                    return (
                        <MenuItem key={e.name} value={10}>
                            {e.name}
                        </MenuItem>
                    );
                })}
            </Select>
            <Button
                onClick={handleSubmit}
                sx={{ height: "50px" }}
                variant="contained"
            >
                Add
            </Button>
        </FormControl>
    );
};

export default AddCity;
