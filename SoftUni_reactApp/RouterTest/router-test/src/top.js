import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';


const Top = () => {
    return (
        <div>
            <Nav>
                <Navbar bg="dark" variant="dark">
                    <Button variant='danger'>
                        <Link to="/" >go to Home Page</Link>
                    </Button>
                    
                    <Button variant='danger' >
                        <Link to="/search" > go to Search Page</Link>
                    </Button>
                </Navbar>
            </Nav>
        </div>
    )
}
export default Top