import React from 'react';
import './AllProject.css'
import { Link } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';
import { RiLiveFill } from 'react-icons/ri';

const AllProject = ({ data }) => {
     const { _id, img, name, gitHub, liveSite, technology } = data;
     return (
          <div className='col-lg-4 mb-4'>
               <div className="card">
                    <div className='image-wrap portfolio'>
                         <div className="portfolio_wrapper">
                              <div className="portfolio_overlay text-white">
                                   <h2 className='card-title'>
                                        <b>{name}</b>
                                   </h2>
                                   <p className=' px-lg-4 px-2'><b>Technology:</b> {technology}</p>
                              </div>
                              <img src={img} className="card-img-top  " alt="..." />
                         </div>
                    </div>
                    <div className="card-body mx-2 mb-2">

                         <div className=' d-flex justify-content-between'>
                              <Link to={gitHub} className="card-text text-decoration-none pIHoverColor" target='_blank'><span className=' fs-4  me-1'><BsGithub /></span> <b>GitHub</b></Link>
                              <Link to={liveSite} className="card-text text-decoration-none pIHoverColor" target='_blank'><span className=' fs-4  me-1'><RiLiveFill /></span> <b>LiveSite</b></Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AllProject;