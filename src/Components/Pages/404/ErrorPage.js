import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/Usetitle';

const ErrorPage = () => {
    useTitle('404 page')
    return (
        <section className="container py-5 text-center">
            <div className="row">
                <div className="col">
                    <h1 className="fs-bolder fs-1">
                        404 NOT FOUND
                    </h1>
                    <Link to="/">
                        <div className="btn text-white fw-bolder bg-black px-5 py-3">
                            Go Back Home
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;