import React from 'react';
import { Link, NavLink } from 'react-router';


const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-4 py-3 shadow-md'>
            <div className='text-2xl font-bold text-primary'>
                <NavLink to='/'>Find<span className="text-gray-200">My</span>Roomie</NavLink>
            </div>

            <div className='nav flex gap-5 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/addRoommate'>Add Roommate</NavLink>
                <NavLink to='/browseListing'>Browse Listing</NavLink>
                <NavLink to='/'>My Listing</NavLink>

            </div>

            <div className='flex gap-2'>
               <Link to='/auth/login'><button className='btn btn-primary px-10 text-white'>Login</button></Link> 
               <Link to='/auth/register'> <button className='btn border-primary bg-white px-10'>Register</button></Link>
            </div>
           
        </div>
    );
};

export default Navbar;