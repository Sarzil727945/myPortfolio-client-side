import React from 'react';
import './Education.css'
import { FaCertificate, FaGraduationCap } from 'react-icons/fa';


const Education = () => {
     return (
          <div>
               <div>
                    <div className=' text-center'>
                         <h2 className='fw-bold Text-color my-4 pt-lg-5'>EDUCATION <span className='org-color'>&</span> TRAINING</h2>
                    </div>
                    <div className=' container px-5'>
                         <hr />
                         <div className=' row mt-5 pt-3'>
                              <div className=' col-lg-6 border-start border-secondary paddingStart position-relative'>
                                   <div className=' position-absolute weightHeight'>
                                        <FaGraduationCap />
                                   </div>
                                   <p className=" bRadius bPadding inputBackground pWeight1">GREEN UNIVERSITY OF BANGLADESH - 2020</p>
                                   <h5 className='poppins-font text-uppercase mb-2 mt-3'>BSC in Computer Science and Engineering (CSE) - CSE</h5>
                                   <b className='place open-sans-font '>CSE (Appeared)</b>
                              </div>
                              <div className=' col-lg-6 mt-lg-0 mt-5 border-start border-secondary paddingStart position-relative'>
                                   <div className=' position-absolute weightHeight'>
                                        <FaCertificate />
                                   </div>
                                   <p className=" bRadius bPadding inputBackground pWeight2">PROGRAMMING HERO - JAVASCRIPT, REACT JS, EXPRESS JS</p>
                                   <h5 className='poppins-font text-uppercase mb-2 mt-3'>COMPLETE WEB DEVELOPMENT</h5>
                                   <b className='place open-sans-font '>2022 (6 month)</b>
                              </div>
                         </div>
                         <div className=' row py-5'>
                              <div className=' col-lg-6 border-start border-secondary paddingStart position-relative'>
                                   <div className=' position-absolute weightHeight'>
                                        <FaGraduationCap />
                                   </div>
                                   <p className=" bRadius bPadding inputBackground pWeight">PARANPUR KAMIL MADRASAH - 2020</p>
                                   <h5 className='poppins-font text-uppercase mb-2 mt-3'>HIGHER SECONDARY SCHOOL CERTIFICATE (HSC) - SCIENCE</h5>
                                   <b className='place open-sans-font '>Science (4.44)</b>
                              </div>
                              <div className=' col-lg-6 mt-lg-0 mt-5 border-start border-secondary paddingStart position-relative'>
                                   <div className=' position-absolute weightHeight'>
                                        <FaCertificate />
                                   </div>
                                   <p className=" bRadius bPadding inputBackground pWeight3">TRENDUP IT - HTML, CSS, BOOTSTRAP, JAVASCRIPT</p>
                                   <h5 className='poppins-font text-uppercase mb-2 mt-3'>WEB DESIGN</h5>
                                   <b className='place open-sans-font '>2021 (4 month)</b>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Education;