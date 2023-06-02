import React, { useContext } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import ActiveLink from '../../ActiveLink/ActiveLink';

const Header = () => {

     return (
          <div className=' fixed-top'>
               <Navbar bg="light" expand="lg" className=' mb-2'>
                    <Container fluid className='container'>
                         <Navbar.Brand href="#" className='fs-4 d-flex align-items-center'>
                              <h1 className='ms-3 Text-color fw-bold web-size'>WEB</h1>
                         </Navbar.Brand>
                         <Navbar.Toggle aria-controls="navbarScroll" />
                         <Navbar.Collapse id="navbarScroll">
                              <Nav
                                   className="mx-auto my-2 my-lg-0 me-0 fw-semibold pe-lg-5"
                                   style={{ maxHeight: '100px' }}
                                   navbarScroll
                              >
                                   <span className=' pe-4'>
                                        <ActiveLink to="/">Home</ActiveLink>
                                   </span>
                                   <span className=' pe-4'>
                                        <ActiveLink to="/services">Services</ActiveLink>
                                   </span>
                                   <span className=' pe-4'>
                                        <ActiveLink to="/works">Works</ActiveLink>
                                   </span>
                                   <span className=' pe-4'>
                                        <ActiveLink to="/blog">Blog</ActiveLink>
                                   </span>
                                   <span >
                                        <ActiveLink to="/contact">Contact</ActiveLink>
                                   </span>

                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     );
};

export default Header;