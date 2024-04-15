import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="rgba(5, 12, 12, 0.705)" variant="dark">
      <Container>
        <Navbar.Brand href="#home" bg="rgba(5, 12, 12, 0.705)" variant="dark">The Digital India </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
         
            
          </Nav>
          <Nav>
          <Nav.Link href="#deetss">Home</Nav.Link>
            <Nav.Link href="#deets">About us</Nav.Link>
            <Nav.Link href="#deetsss">Premimum-Member</Nav.Link>
            <Nav.Link href="#deetssss">contact us</Nav.Link>
          
            <Nav.Link eventKey={2} href="#memes">
            <Link to="/login">
              Login
             </Link>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;