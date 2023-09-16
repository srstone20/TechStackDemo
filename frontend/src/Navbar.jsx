import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Route,Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicNavbar() {
    return (
        <Navbar expand="md" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">SAIO Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/view1">View 1</Nav.Link>
                        <Nav.Link href="/view2">View 2</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicNavbar;