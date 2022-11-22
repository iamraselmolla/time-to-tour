import React from 'react';

const TouristsPlaces = ({info}) => {
    return (
<div className="col-md-6 col-lg-4 my-3">
                    <img src={info.url} className='img-fluid rounded-top' alt="" />
                    <div className="bg-black rounded-bottom text-white py-3 px-2 d-flex justify-content-between">
                       <span> {info.name} </span>
                       <div>
                        <img src="icon1.png" alt="" />
                        <img src="icon2.png" alt="" />
                        <img src="icon3.png" alt="" />
                        <img src="icon4.png" alt="" />
                       </div>
                    </div>
                </div>

      
    );
};

export default TouristsPlaces;