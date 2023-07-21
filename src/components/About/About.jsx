import React, { useEffect, useState } from 'react';
import './About.css';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import Support from '../Home/Support/Support';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import SkillAbout from './SkillAbout/SkillAbout';
import Education from './Education/Education';

const About = () => {
     const [servicesList, setServicesList] = useState([])
     useEffect(() => {
          fetch('servicesList.json')
               .then(res => res.json())
               .then(data => {
                    setServicesList(data);
               })
     }, [])

     return (
          <div>
               <div id='about'>
                    <div data-aos="fade-up" className=' mb-lg-5 pb-lg-5'>
                         <Support></Support>
                    </div>
                    <div className=' me-2 mt-lg-5 pt-lg-5'>
                         <p className="fixed-bottom  text-end Position">
                              <a href="#" className=' text-decoration-none hoverColor'><span className=' fs-2 '><BsFillArrowUpCircleFill /></span></a>
                         </p>
                    </div>
                    <div>
                         <Marquee>
                              <div className=' d-flex mt-5 mb-3'>
                                   {
                                        servicesList.map(data => < div className="shadow p-3 bg-body rounded cardW mx-3" key={data._id}>
                                             <div className="card-body text-center py-3">
                                                  <img className='imgW' src={data.img} alt="" />
                                                  <h3 className="card-title Text-color fw-bold my-3">{data.name}</h3>
                                                  <p className="card-text px-5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                  <Link>
                                                       <button className='btn btn-outline-secondary border-top-0 border-end-0 border-start-0 buttonB'>
                                                            See More
                                                       </button>
                                                  </Link>
                                             </div>
                                        </div>)
                                   }
                              </div>
                         </Marquee >
                    </div >
                    <div className='section-1'>
                         <div data-aos="fade-up">
                              <SkillAbout></SkillAbout>
                         </div>
                         <div>
                              <Education></Education>
                         </div>
                    </div>
               </div>

          </div>
     );
};

export default About;