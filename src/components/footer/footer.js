import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
class Footer extends Component {
    render(){
        return (
            <div>
                <Navbar fixed="bottom" bg="dark" variant="dark">
                <Nav className="mx-auto">
                            <Nav.Link>
                            Space Trev
                            </Nav.Link>
                </Nav>
                    {/* <Nav.Link className="mx-auto">
                        Trev
                    </Nav.Link> */}
                </Navbar>
            </div>
       
        )
    } 
 }

 export default Footer;