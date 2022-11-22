import React from 'react';
import { FaBinoculars, FaHotel, FaBus, FaLuggageCart, FaCalendar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Packages = ({ data }) => {
    const { _id, name, img, description, price, ratings } = data;
    return (
        <div className="col-md-4 my-3  position-realtive">
            <div className="position-absolute bg-black px-2 py-1 text-white rounded right-0">
                {ratings}
            </div>
            <img src={img} className="img-fluid rounded-top" alt="" />
            <div className="pt-3 border border-2 rounded-bottom">
               <div className="px-2">
               <h3 className="fw-bold">
                    {name}
                </h3>
                <h5 className="fw-bolder">
                  Price:  {price}
                </h5>
                <p className="mb-2">
                    {
                        description.split(' ').length > 20 ? description.split(' ').slice(0, 20).join(' ') + ' ...' : description
                    }
                </p>
                <div className="d-flex gap-4">
                    <span style={{ width: '40px', height: '40px' }} className='bg-black justify-content-center rounded-circle d-flex align-items-center text-center text-white'>

                        <FaBinoculars></FaBinoculars>
                    </span>
                    <span style={{ width: '40px', height: '40px' }} className='bg-black justify-content-center rounded-circle d-flex align-items-center text-center text-white'>

                        <FaHotel></FaHotel>
                    </span>
                    <span style={{ width: '40px', height: '40px' }} className='bg-black justify-content-center rounded-circle d-flex align-items-center text-center text-white'>

                        <FaBus></FaBus>
                    </span>
                    <span style={{ width: '40px', height: '40px' }} className='bg-black justify-content-center rounded-circle d-flex align-items-center text-center text-white'>

                        <FaLuggageCart></FaLuggageCart>
                    </span>
                    <span style={{ width: '40px', height: '40px' }} className='bg-black justify-content-center rounded-circle d-flex align-items-center text-center text-white'>

                        <FaCalendar></FaCalendar>
                    </span>
                </div>
               </div>
          <Link to={`/services/${_id}`}>  <button className='btn py-2 mt-3 fw-bolder rounded-bottom bg-black text-white w-100 position-absoulate bottom-0'>See Details</button>
            </Link>
          </div>
        </div>
    );
};

export default Packages;