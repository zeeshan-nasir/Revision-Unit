import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavbarComp = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Ecommerce App</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/user">User</Nav.Link>
                    <Nav.Link href="/product">Products</Nav.Link>
                    <Nav.Link href="/brand">Brands</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarComp;
