import React from 'react';
import './SubServices.css'

const SubServices = () => {
     return (
          <div className=' mt-5 pt-5 section-1'>
               <div className=' text-center'>
                    <h3 className=' org-color fw-bold ling-height pt-4'>Why Choose Me</h3>
                    <h2 className='fw-bold Text-color mt-4'>My Coding Skills Area</h2>
               </div>
               <div className=' container my-3 py-2'>
                    <div className=' row my-5'>
                         <div className=' col-lg-6 px-5'>
                              <div className=' d-flex justify-content-between Text-color'>
                                   <h5>HTML & CSS</h5>
                                   <p className=' fw-bold'>95%</p>
                              </div>
                              <div class="progress">
                                   <div class="progress-bar areaBgColor areaWHtmlCss" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                         </div>
                         <div className=' col-lg-6 px-5 mtop'>
                              <div className=' d-flex justify-content-between Text-color'>
                                   <h5>Bootstrap & Tailwind</h5>
                                   <p className=' fw-bold'>92%</p>
                              </div>
                              <div class="progress">
                                   <div class="progress-bar areaBgColor areaWBT" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                         </div>
                    </div>
                    <div className=' row my-5'>
                         <div className=' col-lg-6 px-5'>
                              <div className=' d-flex justify-content-between Text-color'>
                                   <h5>JavaScript</h5>
                                   <p className=' fw-bold'>85%</p>
                              </div>
                              <div class="progress">
                                   <div class="progress-bar areaBgColor areaWJS" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                         </div>
                         <div className=' col-lg-6 px-5 mtop'>
                              <div className=' d-flex justify-content-between Text-color'>
                                   <h5>React</h5>
                                   <p className=' fw-bold'>90%</p>
                              </div>
                              <div class="progress">
                                   <div class="progress-bar areaBgColor areaWReactFM" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                         </div>
                    </div>
                    <div className=' row my-5'>
                         <div className=' col-lg-6 px-5'>
                              <div className=' d-flex justify-content-between Text-color'>
                                   <h5>Node JS</h5>
                                   <p className=' fw-bold'>80%</p>
                              </div>
                              <div class="progress">
                                   <div class="progress-bar areaBgColor areaWNode" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                         </div>
                         <div className=' col-lg-6 px-5 mtop'>
                              <div className=' d-flex justify-content-between Text-color'>
                                   <h5>Express JS</h5>
                                   <p className=' fw-bold'>85%</p>
                              </div>
                              <div class="progress">
                                   <div class="progress-bar areaBgColor areaWExpress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                         </div>
                    </div>
                    <div className=' row my-5'>
                         <div className=' col-lg-6 px-5'>
                              <div className=' d-flex justify-content-between Text-color'>
                                   <h5>Firebase</h5>
                                   <p className=' fw-bold'>90%</p>
                              </div>
                              <div class="progress">
                                   <div class="progress-bar areaBgColor areaWReactFM" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                         </div>
                         <div className=' col-lg-6 px-5 mtop'>
                              <div className=' d-flex justify-content-between Text-color'>
                                   <h5>MongoDB</h5>
                                   <p className=' fw-bold'>90%</p>
                              </div>
                              <div class="progress">
                                   <div class="progress-bar areaBgColor areaWReactFM" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                         </div>
                    </div>
                  
               </div>
          </div>
     );
};

export default SubServices;