import React from 'react';
import { FaCheck } from 'react-icons/fa'

const MobileSection = () => {
    return (
        <section className='py-5 bg-light'>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <img src="mobile.gif" className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1 className="fw-bolder fs-1">
                            Have you tried My mobile app?
                        </h1>
                        <p>
                            World's leading tour and travels management website. Book travel packages and enjoy your holidays with distinctive experience
                        </p>
                        <div className="details-of-apps">
                            <div className='py-2'>
                                <FaCheck className='me-2'></FaCheck>
                                Easy Hotel Booking
                            </div>
                            <div className='py-2'>
                                <FaCheck className='me-2'></FaCheck>
                                Tour and Travel Packages
                            </div>
                            <div className='py-2'>
                                <FaCheck className='me-2'></FaCheck>
                                Package Reviews and Ratings          
                            </div>
                            <div className='py-2'>
                                <FaCheck className='me-2'></FaCheck>
                                Manage your Bookings, Enquiry and Reviews           
                            </div>
                        </div>
                        <div>
                            <img src="android.png" alt=""  />
                            <img src="apple.png" alt=""  />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileSection;