import React, { Component } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import WorkExperience from './WorkExperience';
import Software from './Software';
import Hardware from './Hardware';
import './App.css';
import RelevantCourses from './RelevantCourses';

class App extends Component {
  render() {
    return (
      <div class="body">
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

        <div id="bannerContainer">
          <img id="bannerImage" src={require("./images/StanleyLandscape.jpg")}/>
          <div id="bannerText">
            Paul Lin
          </div>
          <div id="bannerSubtext">
            3rd Year Computer Engineering Student
          </div>
        </div>

        <div id="AboutMe" class="sectionContainer">          
          <h1>About Me</h1>
          <Container style={{background: "#b3cde0"}}>
            <div class="row align-items-center" id="aboutMeRow">
              <Col xs={4}>
                <Image src={require("./images/PaulHeadShot.jpg")} fluid />             
              </Col>
              <Col>
                I am currently a 3rd year student studying Computer Engineering at UBC, with 1 term of co-op work experience.
                I have experience with a both high-level languages such as Java, Python, and C++, as well as assembly languages like ARM
                and x86, along with Verilog.
              </Col>
            </div>
          </Container>
        </div>

        <WorkExperience/>

        <Software/>

        <Hardware/>

        <RelevantCourses/>

        <footer id="Contact">
          <h4>Contact</h4>
          <a class="footerLink" href="https://www.linkedin.com/in/paul-lin-3aa17b15a/" target="_blank">
            <img src={require("./images/linkedin.png")}/>
          </a>

          <a class="footerLink" href="https://github.com/paullin03" target="_blank">
            <img src={require("./images/github.png")}/>
          </a>

          <a class="footerLink" href="mailto:linpaul0328@gmail.com" target="_blank">
            <img src={require("./images/email.png")}/>
          </a>
        </footer>
      </div>
      
    );
  }
}

export default App;
