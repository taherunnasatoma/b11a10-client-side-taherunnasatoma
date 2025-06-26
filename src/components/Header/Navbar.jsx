import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';


const Navbar = () => {
    const { user,logOut } = use(AuthContext)
      const [showUserInfo, setShowUserInfo] = useState(false);

    const handleLogout=()=>{
        console.log('User trying to LogOut')
        logOut().then(()=>{
            alert("You Logged Out Successfully")
        }).catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className='flex justify-between items-center px-36 py-3  shadow-md'>
            {/* <div>{user && user.email}</div> */}
            <div className='text-2xl font-bold text-primary'>
                <NavLink to='/'>Find<span className="text-gray-200">My</span>Roomie</NavLink>
            </div>

            <div className='nav flex gap-5 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/addRoommate'>Add Roommate</NavLink>
                <NavLink to='/browseListing'>Browse Listing</NavLink>
                <NavLink to='/my-listings'>My Listing</NavLink>

            </div>

          
      <div className="relative flex items-center gap-3">
       
        <img
          className="w-10 h-10 rounded-full cursor-pointer"
          src={user?.photoURL || '/user.png'}
          alt="User"
          onClick={() => setShowUserInfo(!showUserInfo)}
        />

        {showUserInfo && user && (
          <div className="absolute right-0 top-14 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-64 z-10">
            <h3 className="text-lg font-semibold text-gray-800">{user.displayName || "Anonymous User"}</h3>
            <p className="text-sm text-gray-600">{user.email}</p>
            <button
              onClick={handleLogout}
              className="mt-4 w-full bg-black text-white py-1 px-3 rounded "
            >
              Logout
            </button>
          </div>
        )}

        
        {!user && (
          <>
            <Link to='/auth/login'>
              <button className='btn btn-primary px-6 text-white'>Login</button>
            </Link>
            <Link to='/auth/register'>
              <button className='btn border-primary bg-white px-6'>Register</button>
            </Link>
          </>
        )}
      </div>

        </div>

        </div>
    );
};

export default Navbar;