import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../Context/AuthProvider';
import './Header.css'
import {FaUser} from  'react-icons/fa'
const Header = () => {

  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then( () => {})
    .catch(error => console.log(error))
  }

  console.log(user)
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
          
           <Nav.Link>
              {user?.photoURL ? <img style={{height:'40px'}} className="rounded-circle" src={user.photoURL}></img> : <FaUser></FaUser>}
           </Nav.Link>

           <Nav.Link >
            {
              user?.uid? 
              <>
                <span>{user?.displayName}</span>
                <button className='ms-2 btn btn-primary' onClick={handleLogOut}>Log OUt</button>
              
              </>
             :

              <>
              
                  <Link to="/login" className='text-white text-decoration-none me-3 '>Login</Link>
                  <Link to="/register" className='text-white text-decoration-none'>Register</Link>
              </>
            }
              

           </Nav.Link>
          </Nav>
        </Navbar.Collapse></div>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;