import React from 'react';
import { Outlet } from 'react-router';

import Navbar from '../components/Header/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </div>
    );
};

export default HomeLayout;