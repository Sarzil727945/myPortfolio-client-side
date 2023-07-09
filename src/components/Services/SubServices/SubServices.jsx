import React from 'react';
import './SubServices.css'
import Contact from '../../Contact/Contact';

const SubServices = () => {
     return (
          <div className=' mt-5 pt-5 section-1 '>
               <div className=' text-center'>
                    <h3 className=' org-color fw-bold ling-height pt-5'>Why Choose Me</h3>
                    <h2 className='fw-bold Text-color mt-4'>My Coding Skills Area</h2>
               </div>
               <div className='  my-3'>
                    <div id='services'>
                         <div className=' row my-5 mx-lg-5 px-lg-4'>
                              <div className=' col-lg-6 px-5'>
                                   <div className=' d-flex justify-content-between Text-color'>
                                        <h5>HTML & CSS</h5>
                                        <p className=' fw-bold'>95%</p>
                                   </div>
                                   <div className="progress">
                                        <div className="areaBgColor areaWHtmlCss progress-line-1" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                   </div>
                              </div>
                              <div className=' col-lg-6 px-5 mtop'>
                                   <div className=' d-flex justify-content-between Text-color'>
                                        <h5>Bootstrap & Tailwind</h5>
                                        <p className=' fw-bold'>92%</p>
                                   </div>
                                   <div className="progress">
                                        <div className="areaBgColor areaWBT progress-line-2" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                   </div>
                              </div>
                         </div>
                         <div className=' row my-5 mx-lg-5 px-lg-4'>
                              <div className=' col-lg-6 px-5'>
                                   <div className=' d-flex justify-content-between Text-color'>
                                        <h5>JavaScript</h5>
                                        <p className=' fw-bold'>85%</p>
                                   </div>
                                   <div className="progress">
                                        <div className="progress-line-36 areaBgColor areaWJS" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                   </div>
                              </div>
                              <div className=' col-lg-6 px-5 mtop'>
                                   <div className=' d-flex justify-content-between Text-color'>
                                        <h5>React</h5>
                                        <p className=' fw-bold'>90%</p>
                                   </div>
                                   <div className="progress">
                                        <div className="progress-line-478 areaBgColor areaWReactFM" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div id='contact'>
                         <div className=' row my-5 mx-lg-5 px-lg-4'>
                              <div className=' col-lg-6 px-5'>
                                   <div className=' d-flex justify-content-between Text-color'>
                                        <h5>Node JS</h5>
                                        <p className=' fw-bold'>80%</p>
                                   </div>
                                   <div className="progress">
                                        <div className="progress-line-5 areaBgColor areaWNode" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                   </div>
                              </div>
                              <div className=' col-lg-6 px-5 mtop'>
                                   <div className=' d-flex justify-content-between Text-color'>
                                        <h5>Express JS</h5>
                                        <p className=' fw-bold'>85%</p>
                                   </div>
                                   <div className="progress">
                                        <div className="progress-line-36 areaBgColor areaWExpress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                   </div>
                              </div>
                         </div>
                         <div className=' row my-5 pb-5 mx-lg-5 px-lg-4'>
                              <div className=' col-lg-6 px-5'>
                                   <div className=' d-flex justify-content-between Text-color'>
                                        <h5>Firebase</h5>
                                        <p className=' fw-bold'>90%</p>
                                   </div>
                                   <div className="progress">
                                        <div className="progress-line-478 areaBgColor areaWReactFM" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                   </div>
                              </div>
                              <div className=' col-lg-6 px-5 mtop'>
                                   <div className=' d-flex justify-content-between Text-color'>
                                        <h5>MongoDB</h5>
                                        <p className=' fw-bold'>90%</p>
                                   </div>
                                   <div className="progress">
                                        <div className="progress-line-478 areaBgColor areaWReactFM" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                   </div>
                              </div>
                         </div>
                         <div className=' bg-white'>
                              <Contact></Contact>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SubServices;