import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Footer/Footer';
import Header from '../../pages/Header/Header';
import NewHeader from '../../pages/Header/NewHeader';


const Main = () => {
    return (
        <div>
            {/* <Header /> */}
            <NewHeader/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;