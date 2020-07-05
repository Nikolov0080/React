import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class Navigation extends Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/form">Form</Nav.Link>
                        <Nav.Link href="/counters">Counters</Nav.Link>
                        <Nav.Link href="/convertor">Convertor</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;
