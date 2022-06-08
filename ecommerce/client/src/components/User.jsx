import React from "react";
import { Form, Button } from "react-bootstrap";

const User = () => {
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
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group style={{ fontSize: "18px" }} className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group style={{ fontSize: "18px" }} className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Button className="mt-3" variant="dark">
                Submit
            </Button>
        </Form>
    );
};

export default User;
