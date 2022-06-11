import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const User = () => {
    const { id } = useParams();
    // console.log(id);

    const [user, setUser] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        const getUsers = async () => {
            const fetched = await fetch(`http://localhost:4000/user/${id}`);
            const data = await fetched.json();
            setUser({ ...data });
            // console.log(data);
        };
        getUsers();
    }, [id]);

    const handleDelete = (i) => {
        fetch(`http://localhost:4000/user/${id}/addresses/${i}/edit`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    };

    return (
        <div className="mt-5">
            <Card style={{ width: "25rem", margin: "auto" }}>
                <Card.Body>
                    <Card.Title>{user.fullName}</Card.Title>
                    <Card.Text>{user.email}</Card.Text>
                    <div>
                        <p>
                            <b>Addresses:</b>
                        </p>
                        {user.addresses?.map((item, i) => {
                            return (
                                <div
                                    key={i}
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginBottom: "10px",
                                    }}
                                >
                                    <Card.Text>
                                        {i + 1 + "."} {item.locality},{" "}
                                        {item.city}, {item.state},{item.pincode}{" "}
                                    </Card.Text>
                                    <Button
                                        onClick={() => handleDelete(i)}
                                        variant="dark"
                                    >
                                        Delete
                                    </Button>
                                </div>
                            );
                        })}
                    </div>
                    <Button
                        onClick={() => {
                            navigate(`/user/${id}/edit`);
                        }}
                        variant="dark"
                        className="mt-3"
                    >
                        Edit User
                    </Button>
                    <Button
                        onClick={() => {
                            navigate(`/user/${id}/addresses/create`);
                        }}
                        variant="dark"
                        style={{ marginLeft: "10px" }}
                        className="mt-3"
                    >
                        Add Address
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default User;
