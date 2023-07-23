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
     const [selectData, setSelectData] = useState([])
     useEffect(() => {
          fetch('servicesList.json')
               .then(res => res.json())
               .then(data => {
                    setServicesList(data);
               })
     }, [])


     const details = (id) => {
          fetch('servicesList.json')
               .then(res => res.json())
               .then(data => {
                    const mainData = data.filter(item => item._id === id)
                    setSelectData(mainData);
               })
     }
     const [dataOb] = selectData;
     console.log(dataOb?.name);

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
                         <Marquee pauseOnHover direction='right'>
                              <div className=' d-flex mt-5 mb-3'>
                                   {
                                        servicesList.map(data => < div className="shadow p-3 bg-body rounded cardW mx-3" key={data._id}>
                                             <div className="card-body text-center py-3">
                                                  <img className='imgW' src={data.img} alt="" />
                                                  <h3 className="card-title Text-color fw-bold my-3">{data.name}</h3>
                                                  <p className="card-text px-5">{data.bio}</p>
                                                  <Link onClick={() => details(data._id)}>
                                                       <button type="button" className='btn btn-outline-secondary border-top-0 border-end-0 border-start-0 buttonB' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            See More
                                                       </button>
                                                  </Link>
                                             </div>
                                        </div>)
                                   }
                              </div>
                         </Marquee >
                         {/* modal start  */}
                       
                         <div>
                            
                              <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                   <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                             <div className="modal-header">
                                                  <h1 className="modal-title fs-5" id="exampleModalLabel">{dataOb?.name}</h1>
                                                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                             </div>
                                             <div className="modal-body">
                                                  <p>
                                                       {dataOb?.bio}
                                                  </p>
                                             </div>
                                             <div className="modal-footer">
                                                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         {/* modal end  */}
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