import React from 'react';
import './Support.css';
import { GrProjects } from 'react-icons/gr';

const Support = () => {
     return (
          <div className=' style'>
               <div className=' container mb-5'>
                    <div className='items mt-3 d-flex justify-content-center'>
                         <div className='row shadow-lg py-3 px-4 mb-5 bg-body shadow-style'>
                              <div className='col-lg-4'>
                                   <div className='d-flex align-items-center py-3 px-lg-4 border-style1'>
                                        <div className=' p-1'>
                                           <img className='img-sizes' src="https://img.freepik.com/free-vector/business-people-isometric-human-characters-recruitment-consultant-job-candidate-with-editable-text-vector-illustration_1284-30147.jpg?w=740&t=st=1685693825~exp=1685694425~hmac=216443fc100d3111d7bf6e35f2fafa3b0a72f127e6b4adc625d315de902f06bf" alt="" />
                                        </div>
                                        <div className=' ps-2'>
                                             <h3 className='Text-color fw-bold'>No Job</h3>
                                             <p className='org-color fw-semibold fs-5'>Experience</p>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-lg-4 '>
                                   <div className='d-flex align-items-center py-3 pe-lg-5 border-style1'>
                                        <div className=' p-1'>
                                             <img className='img-sizes' src="https://img.freepik.com/premium-photo/close-up-businessman-is-analyzing-data-office_33799-4480.jpg?w=1060" alt="" />
                                        </div>
                                        <div className=' ps-2'>
                                             <h3 className='Text-color fw-bold'>35+Projects</h3>
                                             <p className='org-color fw-bold fs-5'>Completed</p>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-lg-4 '>
                                   <div className='d-flex align-items-center py-3  border-style1'>
                                   <div className=' p-1'>
                                   <img className='img-sizes' src="https://img.freepik.com/free-psd/marketing-concept-with-laptop_23-2149835023.jpg?w=740&t=st=1685693961~exp=1685694561~hmac=80d1c29dfb98e34d75f8bde89f6c6138705183dbabf897b5bd66a647aa6a9624" alt="" />
                                   </div>
                                   <div className=' ps-2'>
                                        <h3 className='Text-color fw-bold'>5 Online</h3>
                                        <p className='org-color fw-bold fs-5'>Support</p>
                                   </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Support;