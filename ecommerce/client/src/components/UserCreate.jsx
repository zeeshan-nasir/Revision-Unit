import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const User = () => {
    const [address] = useState({
        locality: "",
        city: "",
        state: "",
        pincode: "",
    });

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        addresses: address,
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });
    };

    const handleAddress = (e) => {
        const { id, value } = e.target;
        setForm({ ...form, addresses: { ...form.addresses, [id]: value } });
    };

    const handleClick = () => {
        console.log(form);
        fetch("http://localhost:4000/user/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });
    };

    return (
        <Form
            className="mt-5 p-5"
            style={{
                border: "1px solid #D3D3D3",
                width: "25%",
                margin: "auto",
            }}
        >
            <Form.Group style={{ fontSize: "18px" }} className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                    type="text"
                    id="fullName"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group style={{ fontSize: "18px" }} className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" id="email" onChange={handleChange} />
            </Form.Group>
            <Form.Group style={{ fontSize: "18px" }} className="mb-3">
                <Form.Label>Locality</Form.Label>
                <Form.Control
                    type="text"
                    id="locality"
                    onChange={handleAddress}
                />
            </Form.Group>
            <Form.Group style={{ fontSize: "18px" }} className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" id="city" onChange={handleAddress} />
            </Form.Group>
            <Form.Group style={{ fontSize: "18px" }} className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" id="state" onChange={handleAddress} />
            </Form.Group>
            <Form.Group style={{ fontSize: "18px" }} className="mb-3">
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                    type="text"
                    id="pincode"
                    onChange={handleAddress}
                />
            </Form.Group>
            <Button className="mt-3" variant="dark" onClick={handleClick}>
                Submit
            </Button>
        </Form>
    );
};

export default User;
