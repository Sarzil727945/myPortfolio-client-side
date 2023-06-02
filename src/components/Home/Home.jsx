import React from 'react';
import './Home.css';
import { TypeAnimation } from 'react-type-animation';
import { BsArrowDownCircleFill } from 'react-icons/bs';
import useTitle from '../../hooks/useTitle';
import Support from './Support/Support';

const Home = () => {
     useTitle('Home')
     return (
          <div>
               <div className=' section-1 pt-5 mt-3'>
                    <div className='container'>
                         <div className='row d-flex align-items-center mt-lg-5 pt-2'>
                              <div className='py-5 col-lg-6 px-3'>
                                   <h3 className=' org-color fw-bold ling-height'>Hi, I'm </h3>
                                   <h1 className='fw-bold Text-color name'>Sarzil Muntaha</h1>

                                   <h4 className=' Text-color fw-bold py-2'>
                                        <span>
                                             <span>I'm A</span>{' '}
                                             <TypeAnimation
                                                  sequence={[
                                                       'MERN Stack Web Developer',
                                                       1000,
                                                       'Student of CSE Department',
                                                       1000,
                                                  ]}
                                                  repeat={Infinity}
                                             />
                                        </span></h4>
                                   <p className=' text-muted fw-semibold'>
                                        I am a MERN stack web developer. And I am a student of Computer Science an Engineer (CSE) department of
                                        Green University Of Bangladesh. I was a batch seven MERN stack web developer student of Programming
                                        Hero. Well-versed HTML5, CSS3, Bootstrap, Tailwind, JavaScript, React, Express.JS, MongoDB.
                                   </p>
                                   <div className='mt-5'>
                                        <button className='button1'>
                                             Download CV
                                        </button>
                                        <button className='button1 ms-2'>Contact</button>
                                   </div>
                              </div>
                              <div className=' col-lg-6'>
                                   <img className='img-fluid' src="https://wp.shsarker.xyz/dora/wp-content/uploads/2023/04/hero-person-img.png" alt="" />
                              </div>
                         </div>
                    </div>
               </div>
               <div>
                    <Support></Support>
               </div>
          </div>
     );
};

export default Home;