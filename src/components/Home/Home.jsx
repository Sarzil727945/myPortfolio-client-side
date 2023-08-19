import React from 'react';
import './Home.css';
import { TypeAnimation } from 'react-type-animation';
import img from '../../../public/sm.png'
import { BiCloudDownload } from 'react-icons/bi';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Project from '../Project/Project';
import About from '../About/About';

const Home = () => {
     return (
          <div>
               <Header></Header>
               <div>
                    <div className=' section-1 pt-5 mt-3'>
                         <div className='container' id='home'>
                              <div className='row d-flex align-items-center mt-lg-5 pt-2'>
                                   <div className='py-5 col-lg-6 px-3'>
                                        <div className='textSmCenter'>
                                             <h3 className=' org-color fw-bold ling-height'>Hi there, I'm </h3>
                                             <h1 className='fw-bold Text-color name'>Sarzil Muntaha</h1>
                                        </div>
                                        <h4 className=' Text-color fw-bold py-2 mx-lg-0 mx-2'>
                                             <span>
                                                  <span>I'm A</span>{' '}
                                                  <TypeAnimation
                                                       sequence={[
                                                            'Website Developer',
                                                            1000,
                                                            'Software Developer',
                                                            1000,
                                                       ]}
                                                       repeat={Infinity}
                                                  />
                                             </span></h4>
                                        <p className=' text-muted fw-semibold pe-lg-5 fontSize mx-lg-0 mx-2'>
                                             I'm a Sarzil Muntaha, Since Now, I have 1 years plus of extensive hands on experience of website development and Software Development. <br />
                                              I have a high level of personal morals and integrity. I am Goal oriented, self-motivated and committed to the successful outcome of the project. I am willing to work hard and have a great desire to learn. <br />
                                             I am passionate about building excellent software that improves the lives of those around me.
                                        </p>
                                        <div className='mt-5'>
                                             <button className='borderNone'>
                                                  <a className='aBtn button2' href="https://drive.google.com/file/d/1PIKZ7B3134C5FCAjGzmF0Mg1vaw4k9La/view?usp=drive_link" target='_blank'>
                                                       <span><span className='iconSize'><BiCloudDownload /></span> Resume</span>
                                                  </a>
                                             </button>
                                             <Link to="contact" spy={true} smooth={true} offset={100} duration={500}>
                                                  <button className='button1 ms-2'>Contact</button>
                                             </Link>
                                        </div>
                                   </div>
                                   <div className=' col-lg-6'>
                                        <img className='img-fluid myPic' src={img} alt="" />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className=' mt-lg-5 pt-lg-3'>
                    <About></About>
               </div>
               <div >
                    <Project></Project>
               </div>
               <div>
                    <Footer></Footer>
               </div>
          </div>
     );
};

export default Home;