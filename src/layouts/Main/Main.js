import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Footer/Footer';
import Header from '../../pages/Header/Header';


const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;