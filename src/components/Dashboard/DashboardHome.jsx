// src/pages/Dashboard/DashboardHome.jsx
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [roommates, setRoommates] = useState([]);
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/roommates')
      .then(res => res.json())
      .then(data => {
        setRoommates(data);
        const userItems = data.filter(item => item.email === user?.email);
        setMyItems(userItems);
      });
  }, [user]);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Welcome to your Dashboard, {user?.displayName}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Total Listings</h3>
          <p className="text-3xl text-blue-600">{roommates.length}</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-2">My Listings</h3>
          <p className="text-3xl text-green-600">{myItems.length}</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-2">User Email</h3>
          <p className="text-md">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
