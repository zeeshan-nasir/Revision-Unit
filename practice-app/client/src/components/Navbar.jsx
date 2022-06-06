import React from "react";
import { Navbar, Container } from "react-bootstrap";

const NavbarFunc = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" >
            <Container>
                <Navbar.Brand href="#home">Food App</Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavbarFunc;
