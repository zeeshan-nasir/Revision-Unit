import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, MenuItem, Select } from "@mui/material";

const Home = () => {
    const [data, setData] = useState([]);
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let fetched = await fetch("http://localhost:3000/cities");
            fetched = await fetched.json();
            console.log(fetched);
            setData(fetched);
        };

        getData();
    }, []);

    useEffect(() => {
        const getCountry = async () => {
            let fetched = await fetch("http://localhost:3000/countries");
            fetched = await fetched.json();
            console.log(fetched);
            setCountry(fetched);
        };

        getCountry();
    }, []);

    return (
        <TableContainer
            sx={{ maxWidth: 950, margin: "auto" }}
            component={Paper}
        >
            <h1>COUNTRY DETAILS</h1>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                sx={{ marginBottom: "20px" }}
                label="Select Country"
                // value={age}
                // onChange={handleChange}
            >
                {country.map((e) => {
                    return (
                        <MenuItem key={e.name} value={10}>
                            {e.name}
                        </MenuItem>
                    );
                })}
            </Select>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="center">Country</TableCell>
                        <TableCell align="center">City</TableCell>
                        <TableCell align="center">Population</TableCell>
                        <TableCell align="center">Edit</TableCell>
                        <TableCell align="center">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((e) => (
                        <TableRow
                            key={e.id}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {e.id}
                            </TableCell>
                            <TableCell align="center">{e.country}</TableCell>
                            <TableCell align="center">{e.city}</TableCell>
                            <TableCell align="center">{e.population}</TableCell>
                            <TableCell align="center">
                                <Button variant="outlined">Edit</Button>
                            </TableCell>
                            <TableCell align="center">
                                <Button variant="outlined">Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Home;
