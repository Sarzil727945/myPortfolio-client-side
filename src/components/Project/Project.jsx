import React, { useEffect, useState } from 'react';
import { FaCertificate, FaGraduationCap } from 'react-icons/fa';
import AllProject from './AllProject/AllProject';
import Contact from '../Contact/Contact';


const Project = () => {
     const [isLoading, setIsLoading] = useState(true);
     const [projectData, setProjectData] = useState([])
     useEffect(() => {
          fetch('projectData.json')
               .then(res => res.json())
               .then(data => {
                    setProjectData(data);
                    setIsLoading(false)
               })
     }, [])

     return (
          <div>
               <div id='projects'>
                    <div className=' section-1'>
                         <div className='container px-5'>
                              <div className=' row pb-5'>
                                   <div className=' col-lg-6 border-start border-secondary paddingStart position-relative'>
                                        <div className=' position-absolute weightHeight'>
                                             <FaGraduationCap />
                                        </div>
                                        <p className=" bRadius bPadding inputBackground pWeight">PARANPUR KAMIL MADRASAH - 2018</p>
                                        <h5 className='poppins-font text-uppercase mb-2 mt-3'>SECONDARY SCHOOL CERTIFICATE (SSC) - SCIENCE</h5>
                                        <b className='place open-sans-font '>Science (5)</b>
                                   </div>
                                   <div className=' col-lg-6 mt-lg-0 mt-5 border-start border-secondary paddingStart position-relative'>
                                        <div className=' position-absolute weightHeight'>
                                             <FaCertificate />
                                        </div>
                                        <p className=" bRadius bPadding inputBackground pWeight">UNIVERSE IT - HTML, CSS, BOOTSTRAP</p>
                                        <h5 className='poppins-font text-uppercase mb-2 mt-3'>WEB DESIGN</h5>
                                        <b className='place open-sans-font '>2021 (4 month)</b>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className=' text-center my-5 pt-4'>
                         <h2 className='fw-bold Text-color mt-2 display-4'>SOME OF <span className='org-color'>PROJECTS</span></h2>
                    </div>
                    <div className='row mt-2 mx-lg-5 px-lg-3'>
                         {
                              projectData?.map(data => <AllProject
                                   key={data._id}
                                   data={data}
                              ></AllProject>)
                         }
                    </div>
                    {
                         isLoading && <div className="text-center my-5">
                              <div className="spinner-border text-warning" role="status">
                                   <span className="visually-hidden">Loading...</span>
                              </div>
                         </div>
                    }
               </div>
               <div id='contact'>
                    <div className=' mt-lg-5 pt-lg-5'>
                         <div className=' pt-lg-5 mt-lg-3'>
                              <Contact></Contact>
                         </div>
                    </div>
               </div>

          </div>
     );
};

export default Project;