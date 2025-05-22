import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-4 py-3 shadow-md'>
            <div className='text-2xl font-bold text-primary'>
                <NavLink to='/'>Find<span className="text-accent">My</span>Roomie</NavLink>
            </div>

            <div className='nav flex gap-5 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>Add Roommate</NavLink>
                <NavLink to='/'>Browse Listing</NavLink>
                <NavLink to='/'>My Listing</NavLink>

            </div>

            <div className='flex gap-2'>
                <button className='btn btn-primary px-10 text-white'>Login</button>
                <button className='btn border-primary bg-amber-50 px-10'>Register</button>
            </div>
           
        </div>
    );
};

export default Navbar;