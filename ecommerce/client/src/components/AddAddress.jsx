import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const AddAddress = () => {
    const [address, setAddress] = useState({
        locality: "",
        city: "",
        state: "",
        pincode: "",
    });

    const { id } = useParams();

    const handleAddress = (e) => {
        const { id, value } = e.target;
        setAddress({ ...address, [id]: value });
        console.log(address);
    };

    const handleClick = () => {
        console.log(address);
        fetch(`http://localhost:4000/user/${id}/addresses/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(address),
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
                Add
            </Button>
        </Form>
    );
};

export default AddAddress;
