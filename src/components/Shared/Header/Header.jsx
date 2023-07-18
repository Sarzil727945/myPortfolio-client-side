import React, { useContext } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import ActiveLink from '../../ActiveLink/ActiveLink';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


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
                                   <span className=' pe-4 activeLink'>
                                        <button className=' border-0 bg-light fw-semibold'>
                                             <Link to="home" spy={true} smooth={true} offset={-50} duration={500} >Home</Link>
                                        </button>

                                   </span>
                                   <span className=' pe-4 activeLink'>

                                        <button className=' border-0 bg-light fw-semibold'><Link to="about" spy={true} smooth={true} offset={100} duration={500}>About</Link></button>

                                   </span>
                                   <span className='activeLink'>
                                        <button className=' border-0 bg-light fw-semibold'><Link to="projects" spy={true} smooth={true} offset={100} duration={500}>Projects</Link> </button>
                                   </span>
                                   <span className='activeLink'>
                                        <button className=' border-0 bg-light fw-semibold'><Link to="contact" spy={true} smooth={true} offset={100} duration={500}>Contact</Link> </button>
                                   </span>
                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     );
};

export default Header;