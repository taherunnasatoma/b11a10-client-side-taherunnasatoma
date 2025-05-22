import React from 'react';
import { Outlet } from 'react-router';

import Navbar from '../components/Header/Navbar';
import Banner from '../components/Banner';

const HomeLayout = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </header>
            <main>
                <Banner></Banner>
                
            </main>
            <footer></footer>
        </div>
    );
};

export default HomeLayout;