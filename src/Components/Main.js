import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Shared/Footer';
import Header from './Shared/Header';

const Main = () => {
    return (
        <main>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </main>
    );
};

export default Main;