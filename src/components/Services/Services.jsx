import React, { useEffect, useState } from 'react';
import './Services.css';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import SubServices from './SubServices/SubServices';

const Services = () => {
     useTitle('Services')
     const [servicesList, setServicesList] = useState([])
     useEffect(() => {
          fetch('servicesList.json')
               .then(res => res.json())
               .then(data => setServicesList(data))
     }, [])

     return (
          <div className=' mt-5 pt-5'>
               <Marquee>
                    <div className=' d-flex my-3' >
                         {
                              servicesList.map(data => < div className="shadow p-3 bg-body rounded cardW mx-3" key={data._id}>
                                   <div className="card-body text-center py-2">
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
               <div>
                    <SubServices></SubServices>
               </div>
          </div >
     );
};

export default Services;