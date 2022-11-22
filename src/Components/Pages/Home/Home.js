import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/Usetitle';
import Packages from '../../Shared/Packages/Packages';
import Banner from './Banner';
import MobileSection from './MobileSection';
import TouristsPlace from './TouristsPlace';

const Home = () => {
    const allPackages = useLoaderData();
    useTitle('Home')
    return (
        <>
            <Banner></Banner>
            <section className="py-5 container">
                <div className="row">
                    <h2 className=" bg-black rounded text-center py-3 mb-3 fw-bolder text-white">
                        See My Recent Tour Spot and Packages
                    </h2>
                </div>
                <div className="row">
                    {allPackages?.map(packages => <Packages key={packages._id} data={packages}></Packages>)}
                </div>
                <div className="row text-center">
                    <div className="col">
                       <Link to="/services"> <div className="btn bg-black py-3 mt-3 px-4 text-white fw-bold">
                            See All Services
                        </div></Link>
                    </div>
                </div>
            </section>
            <MobileSection></MobileSection>
            <TouristsPlace></TouristsPlace>
        </>
    );
};

export default Home;