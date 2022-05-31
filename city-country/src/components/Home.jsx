import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteCity, fetchCity, fetchCountry } from "../redux/action";

const Home = () => {
    // const [data] = useState();
    // const [country, setCountry] = useState([]);

    const dispatch = useDispatch();
    const country = useSelector((store) => store.countries);
    const data = useSelector((store) => store.cities);
    const [filter, setFilter] = useState(null);
    // console.log(data);

    useEffect(() => {
        // const getData = async () => {
        //     let fetched = await fetch("http://localhost:8080/cities");
        //     fetched = await fetched.json();
        //     // console.log(fetched);
        //     setData(fetched);
        //     setFilter(fetched);
        // };
        // getData();

        dispatch(fetchCity());
        dispatch(fetchCountry());
    }, []);

    // useEffect(() => {
    // const getCountry = async () => {
    //     let fetched = await fetch("http://localhost:8080/countries");
    //     fetched = await fetched.json();
    //     // console.log(fetched);
    //     setCountry(fetched);
    // };
    // getCountry();
    // }, []);

    const handleChange = (e) => {
        const { value } = e.target;
        setFilter(
            data.filter((e) => {
                return e.country === value;
            })
        );
    };

    const handleSort = (e) => {
        const { value } = e.target;
        // console.log(value);
        if (value === "lth") {
            setFilter([
                ...data.sort((a, b) => {
                    return (
                        +a.population.split(",").join("") -
                        +b.population.split(",").join("")
                    );
                }),
            ]);
        } else {
            setFilter([
                ...data.sort((a, b) => {
                    return (
                        +b.population.split(",").join("") -
                        +a.population.split(",").join("")
                    );
                }),
            ]);
        }
    };

    const handleDelete = (data) => {
        dispatch(deleteCity(data));
    };

    return (
        <TableContainer
            sx={{ maxWidth: 950, margin: "auto" }}
            component={Paper}
        >
            <h1>COUNTRY DETAILS</h1>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginBottom: "20px",
                }}
            >
                <div>
                    <label htmlFor="">Filter by country:</label>
                    <select
                        style={{
                            height: "30px",
                            borderRadius: "10px",
                            marginLeft: "20px",
                        }}
                        onChange={handleChange}
                    >
                        <option value="">- - - - - - - - -</option>
                        {country.map((e) => {
                            return (
                                <option key={e.id} value={e.name}>
                                    {e.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="">Sort by population:</label>
                    <select
                        style={{
                            height: "30px",
                            borderRadius: "10px",
                            marginLeft: "20px",
                        }}
                        onChange={handleSort}
                    >
                        <option value="">- - - - - - - - -</option>
                        <option value="lth">Low to High</option>
                        <option value="htl">High to Low</option>
                    </select>
                </div>
            </div>
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
                    {(filter || data).map((e) => (
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
                                <Button
                                    variant="outlined"
                                    onClick={() => handleDelete(e)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Home;
