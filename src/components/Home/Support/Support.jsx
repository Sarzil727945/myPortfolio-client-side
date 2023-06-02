import React from 'react';
import './Support.css';
import { GrProjects } from 'react-icons/gr';

const Support = () => {
     return (
          <div className=' style'>
            <div className=' container mb-5'>
               <div className='items mt-3 d-flex justify-content-center'>
                    <div className='row shadow-lg py-3 px-4 mb-5 bg-body shadow-style'>
                         <div className='col-lg-4 d-flex align-items-center py-3 px-4 border-style1'>
                              <div className='div-style p-4'>
                                <span className=' fs-1 text-white'>
                                <GrProjects/>
                                </span>
                              </div>
                              <div className=' ms-3'>
                                   <h3 className='Text-color fw-bold'>35+ Projects</h3>
                                   <p className='org-color fw-bold fs-5'>Completed</p>
                              </div>
                         </div>
                         <div className='col-lg-4 d-flex align-items-center py-3 px-4 border-style1'>
                              <div className='div-style p-4'>
                                <span className=' fs-1 text-white'>
                                <GrProjects/>
                                </span>
                              </div>
                              <div className=' ms-3'>
                                   <h3 className='Text-color fw-bold'>35+ Projects</h3>
                                   <p className='org-color fw-bold fs-5'>Completed</p>
                              </div>
                         </div>
                         <div className='col-lg-4 d-flex align-items-center py-3 px-4 border-style1'>
                              <div className='div-style p-4'>
                                <span className=' fs-1 text-white'>
                                <GrProjects/>
                                </span>
                              </div>
                              <div className=' ms-3'>
                                   <h3 className='Text-color fw-bold'>35+ Projects</h3>
                                   <p className='org-color fw-bold fs-5'>Completed</p>
                              </div>
                         </div>
                    </div>
               </div>
            </div>   
          </div>
     );
};

export default Support;