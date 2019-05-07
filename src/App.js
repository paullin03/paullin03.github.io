import React, { Component } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProjectCard from './ProjectCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="body">
        <Navbar style={{background: "#011f4b"}} expand="lg" variant="dark" id="NavigationBar">
          <Navbar.Brand href="#AboutMe">
            Paul Lin
          </Navbar.Brand>
          <NavDropdown title="Projects">
            <NavDropdown.Item href="#Software">
              Software
            </NavDropdown.Item>
            <NavDropdown.Item href="#Hardware">
              Hardware
            </NavDropdown.Item>
          </NavDropdown>
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

        <div id="AboutMe"class="sectionContainer">          
          <h1>About Me</h1>
          <Container>
            Lorem Ipsum
          </Container>
          <Container>
          </Container>
        </div>

        <div id="Software" class="sectionContainer">
          <h1>Software</h1>
          <div class="tabWrapper">
            <Tabs id="SoftwareProjects" defaultActiveKey="taskOrganizer">
                <Tab eventKey="taskOrganizer" title="Task Organizer">
                  <ProjectCard title="Task Organizer" subtitle="Android App for helping users prioritize their tasks"/>
                </Tab>
                <Tab eventKey="foodCam" title="Food Cam">
                  <ProjectCard title="Food Cam" subtitle="Android App for scanning and reading nutrition labels"
                  text="Scan nutrition" href="https://github.com/paullin03/foodcamera_xd2019" 
                  src={require("./images/FoodCamUse.jpg")}/>
                </Tab>
            </Tabs>
          </div>
        </div>



        <div id="Hardware" class="sectionContainer">
          <h1>Hardware</h1>
          <div class="tabWrapper">
            <Tabs id="HardwareProjects" defaultActiveKey="RISCMachine" style={{color: "#black"}}>
                <Tab eventKey="RISCMachine" title="Simple RISC Machine">
                  <ProjectCard title="Task Organizer" subtitle="Android App for helping users prioritize their tasks"/>
                </Tab>
                <Tab eventKey="OS" title="Operating System Components">
                  <ProjectCard title="Food Cam" subtitle="Android App for scanning and reading nutrition labels"
                  text="Scan nutrition" href="https://github.com/paullin03/foodcamera_xd2019" 
                  src={require("./images/FoodCamUse.jpg")}/>
                </Tab>
            </Tabs>
          </div>
        </div>

        <footer id="Contact">
          <h4>Contact</h4>
          <a class="footerLink" href="https://www.linkedin.com/in/paul-lin-3aa17b15a/" target="_blank">
            <img src={require("./images/linkedin.png")}/>
          </a>

          <a class="footerLink" href="https://github.com/paullin03" target="_blank">
            <img src={require("./images/github.png")}/>
          </a>

        </footer>
      </div>
      
    );
  }
}

export default App;
