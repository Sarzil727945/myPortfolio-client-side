import React from 'react';
import './AllProject.css'

const AllProject = ({ data }) => {
     const { _id, img, name, price, rating } = data;
     return (
          <div className='col-lg-4 mb-4'>
               <div className="card">
                    <div className='image-wrap'>
                         <img src={img} className="card-img-top  " alt="..." />
                    </div>
                    <div className="card-body">
                         <h5 className="card-title"> <b>Name:</b> {name}</h5>
                         <div className=' d-flex justify-content-between'>
                              <p className="card-text"><b>Price:</b> {price} Tk</p>
                              <p className="card-text"><b>Rating:</b> {rating}</p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AllProject;