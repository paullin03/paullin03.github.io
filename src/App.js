import React, { Component } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{background: "#222222"}}>
        <Navbar bg="dark" expand="lg" variant="dark" id="NavigationBar">
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
        </Navbar>          
        <h1 id="AboutMe">About Me</h1>
        <Container>
        </Container>
        <Container>
        </Container>

        <h1 id="Software">Software</h1>
        <div style={{padding:"1.5rem"}}>
          <Tab.Container id="SoftwareProjects" defaultActiveKey="taskOrganizer">
            <Row>
              <Col md="auto">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="taskOrganizer">Task Organizer</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="apps">Apps</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col>
                <Tab.Content>
                  <Tab.Pane eventKey="taskOrganizer">
                    {this.generateCard("Task Organizer", "Android App for Organizing Tasks", "Lorem Ipsum", "https://github.com/paullin03/TaskOrganizer")}
                  </Tab.Pane>
                  <Tab.Pane eventKey="apps">
                    {this.generateCard("apps", "apps", "Lorem Ipsum", "#AboutMe")}
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>

        <h1 id="Hardware">Hardware</h1>

        <Container>
          <Row>
            {this.generateCard("Simple RISC Machine", "Turing-Complete Computer", "Lorem Ipsum", "#AboutMe")}
          </Row>
        </Container>
      </div>
      
    );
  }


  generateCard(title, subtitle, text, href) {
    return(
      <Card bg="light">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
          <Card.Text>
            {text}
          </Card.Text>
          <Card.Link href={href} target="_blank">GitHub Link</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default App;
