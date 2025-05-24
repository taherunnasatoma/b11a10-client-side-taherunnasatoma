import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';


const Navbar = () => {
    const { user,logOut } = use(AuthContext)

    const handleLogout=()=>{
        console.log('User trying to LogOut')
        logOut().then(()=>{
            alert("You Logged Out Successfully")
        }).catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div className='flex justify-between items-center px-4 py-3 shadow-md'>
            <div>{user && user.email}</div>
            <div className='text-2xl font-bold text-primary'>
                <NavLink to='/'>Find<span className="text-gray-200">My</span>Roomie</NavLink>
            </div>

            <div className='nav flex gap-5 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/addRoommate'>Add Roommate</NavLink>
                <NavLink to='/browseListing'>Browse Listing</NavLink>
                <NavLink to='/my-listings'>My Listing</NavLink>

            </div>

            <div className='flex gap-2'>
                <img className='w-12 rounded full' src={`${user ? user.photoURL : '/user.png'}`} alt="" />
                {
                    user ? (<button onClick={handleLogout} className='btn btn-primary px-10 text-white'>Logout</button>) : (<>
                        <Link to='/auth/login'><button className='btn btn-primary px-10 text-white'>Login</button></Link>
                        <Link to='/auth/register'> <button className='btn border-primary bg-white px-10'>Register</button></Link>
                    </>)
                }


            </div>

        </div>
    );
};

export default Navbar;