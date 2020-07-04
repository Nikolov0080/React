import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Input from './input';

class Navigation extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#form">Form</Nav.Link>
                    </Nav>

                    <Switch>
                        <Route exact path="/" >
                            
                        </Route>

                        <Route exact path="#form" >
                            <Input></Input>
                        </Route>

                        <Route exact path="#home" >
                            <Router></Router>
                        </Route>
                    </Switch>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;
