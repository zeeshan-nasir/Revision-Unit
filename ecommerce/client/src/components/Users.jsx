import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const getUsers = async () => {
            const fetched = await fetch("http://localhost:4000/user");
            const data = await fetched.json();
            setUsers([...data]);
            console.log(data);
        };

        getUsers();
    }, []);

    return (
        <div>
            <div>
                <Link to={"/user/create"}>
                    <Button variant="dark" className="mt-4">
                        New User
                    </Button>
                </Link>
            </div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5,1fr)",
                    padding: "50px",
                }}
            >
                {users.map((e) => {
                    return (
                        <Card key={e._id} style={{ width: "18rem" }}>
                            <Card.Body
                                onClick={() => {
                                    navigate(`/user/${e._id}`);
                                }}
                            >
                                <Card.Title>{e.fullName}</Card.Title>
                                <Card.Text>{e.email}</Card.Text>
                                {e.addresses.map((item, i) => {
                                    return (
                                        <div>
                                            <p>
                                                <b>Addresses:</b>
                                            </p>
                                            <Card.Text key={i}>
                                                {i + 1 + "."} {item.locality},{" "}
                                                {item.city}, {item.state},
                                                {item.pincode}{" "}
                                            </Card.Text>
                                        </div>
                                    );
                                })}
                                <Button variant="dark" className="mt-3">
                                    Edit
                                </Button>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default Users;
