import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import MainFooter from '../components/MainFooter';

const MainLayout = () => {
    return (
        <>
           <Navbar/>
           <Outlet/>
           <MainFooter/> 
        </>
    );
};

export default MainLayout;