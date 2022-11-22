import React from 'react';
import TouristsPlaces from './TouristsPlaces';

const TouristsPlace = () => {
    const imgArray = [
        {
            name: "RIO DE JANEIRO(Brazil)",
            url: "https://i.ibb.co/Tw3VNDY/1.png"
        },
        {
            name: "Rialto Bridge",
            url: "https://i.ibb.co/cvvXBcK/2.png"
        },
        {
            name: "Roatan, Bay Islands",
            url: "https://i.ibb.co/gZR0qQ6/3.png"
        },
        {
            name: "Agra Taj Mahal",
            url: "https://i.ibb.co/BGC4chM/4.png"
        },
        {
            name: "Nail Island",
            url: "https://i.ibb.co/Kj2PSVQ/5.png"
        },
        {
            name: "South India",
            url: "https://i.ibb.co/9mxs6Fp/6.png"
        },
    ]
    return (
        <section className='py-5'>
          <div className="container">
          <div className="row text-center">
                <div className="px-2 d-inline-block py-2 text-white rounded bg-black">
                <h2 className="fs-1 fw-bold">
                    Top Tour Places in The World
                </h2>
                <p>
                    World's leading tour and travels Places in short scenario.
                </p>
                </div>
            </div>
            <div className="row mt-3">
                {imgArray?.map(imgSingle => <TouristsPlaces key={imgSingle.url} info={imgSingle}></TouristsPlaces>)}
            </div>
          </div>
        </section>
    );
};

export default TouristsPlace;