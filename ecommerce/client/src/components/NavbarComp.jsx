import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavbarComp = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Ecommerce App</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/users">User</Nav.Link>
                    <Nav.Link href="/products">Product</Nav.Link>
                    <Nav.Link href="/brands">Brand</Nav.Link>
                    <Nav.Link href="/categories">Category</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarComp;
