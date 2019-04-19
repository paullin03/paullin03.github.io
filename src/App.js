import React, { Component } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand>
            Paul Lin
          </Navbar.Brand>
          <NavDropdown title="Projects">
            <NavDropdown.Item href="#softwareHeading">
              Software
            </NavDropdown.Item>
            <NavDropdown.Item href="#hardwareHeading">
              Hardware
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar>
        <h1 id="aboutMeHeading">About Me</h1>
        <h1 id="softwareHeading">Software</h1>
        <Container>
          <Card style={{width: '18rem'}} bg="light">
            <Card.Body>
              <Card.Title>Android Task Organizer</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card>
        </Container>
        <h1 id="hardwareHeading">Hardware</h1>
        <Container>
          <Card style={{width: '18rem'}} bg="light">
            <Card.Body>
              <Card.Title>Simple RISC Machine</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card>
        </Container>
      </div>
      
    );
  }
}

export default App;
