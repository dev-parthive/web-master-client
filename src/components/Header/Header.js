import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className='d-flex justify-content-between py-2'>
        <div><Navbar.Brand ><Link to="/" className='logo btn btn-primary'>Web Master</Link></Navbar.Brand></div>
        <div><Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto menu">
            <Nav.Link ><Link to="/courses" >Courses</Link></Nav.Link>
            <Nav.Link ><Link to="/blog">Blog</Link></Nav.Link>
            <Nav.Link ><Link to="/faq">FAQ</Link></Nav.Link>
          </Nav>
          <Nav>
           
          </Nav>
        </Navbar.Collapse></div>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;