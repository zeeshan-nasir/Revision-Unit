import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavbarComp = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Ecommerce App</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/user">User</Nav.Link>
                    <Nav.Link href="/product">Product</Nav.Link>
                    <Nav.Link href="/brand">Brand</Nav.Link>
                    <Nav.Link href="/category">Category</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarComp;
