import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class NavBar extends Component {
    render () {
        return(
            <div>
             <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Trevor Benavides</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#deets">Contact</Nav.Link>
                <Nav.Link eventKey={1} href="#memes">
                 LinkedIn
                </Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                 Github
                </Nav.Link>
                <Nav.Link eventKey={3} href="#memes">
                 Instagram
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
            </div>
        )
    }
}

export default NavBar;