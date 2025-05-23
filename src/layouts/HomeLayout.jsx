import React from 'react';
import { Outlet } from 'react-router';

import Navbar from '../components/Header/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header className='max-w-screen-xl mx-auto my-3'>
                <Navbar></Navbar>
            </header>
            <main>
                <Banner></Banner>
                
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;