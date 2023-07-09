import React from 'react';
import { BsFillArrowUpCircleFill} from 'react-icons/bs';

const Footer = () => {
     return (
          <div className='section-1'>
               <div className="container py-4">
                    <div>
                         <div>
                              <p className=" text-center pt-3 fs-5">
                                   Developed with <span className='org-color'>Sarzil Muntaha</span> &copy; 2023
                                   <span className=" float-end">
                                        <a href="#" className=' text-decoration-none Text-color'> Back to top <span className=' fs-4 org-color'><BsFillArrowUpCircleFill/></span></a>
                                   </span>
                              </p>
                         </div>
                         <div>

                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Footer;