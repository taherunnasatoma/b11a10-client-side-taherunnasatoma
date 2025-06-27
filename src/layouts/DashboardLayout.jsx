
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      
      <aside className="w-64 bg-primary text-white p-6 space-y-4">
        <Link to='/dashboard'><h2 className="text-2xl font-bold mb-6">Dashboard</h2></Link>
        <nav className="flex flex-col gap-4">
          <Link to="/dashboard">Overview</Link>
          {/* <Link to="/dashboard/all-items">All Items</Link> */}
          <Link to="/dashboard/add-item">Add Roommate</Link>
          <Link to="/dashboard/my-items">My Listings</Link>
        </nav>
      </aside>

     
      <main className="flex-1 bg-gray-50 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
