import React, { Component } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavigationBar extends Component {

    render() {
        return (
            <Navbar style={{background: "#011f4b"}} expand="lg" variant="dark" id="NavigationBar">
                <Navbar.Brand href="#AboutMe">
                Paul Lin
                </Navbar.Brand>
                <Nav.Link href="#WorkExperience">
                Work Experience
                </Nav.Link>
                <NavDropdown title="Projects">
                <NavDropdown.Item href="#Software">
                    Software
                </NavDropdown.Item>
                <NavDropdown.Item href="#Hardware">
                    Hardware
                </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#RelevantCourses">
                Courses
                </Nav.Link>
                <Nav.Link href="#Contact">
                Contact
                </Nav.Link>
            </Navbar>
        );
    }
}

export default NavigationBar;