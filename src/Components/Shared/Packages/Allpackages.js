import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/Usetitle';
import Packages from './Packages';

const Allpackages = () => {
    const data  = useLoaderData()
    useTitle('All services')
    return (
        <section className='py-5'>
            <div className="container">
            <div className="row">
                    <h2 className=" bg-black rounded text-center py-3 mb-3 fw-bolder text-white">
                        See my all Services
                    </h2>
                </div>
                <div className="row mt-2">
                    {data?.map(singleData => <Packages key={singleData._id} data={singleData}></Packages>)}
                </div>
            </div>
        </section>
    );
};

export default Allpackages;