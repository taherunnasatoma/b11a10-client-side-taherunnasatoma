import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Header/Navbar';
import Footer from './Footer';

const BrowseListings = () => {
  const [roommates, setRoommates] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/roommates')
      .then(res => res.json())
      .then(data => setRoommates(data));
  }, []);

  return (
    <div>
      <Navbar></Navbar>
    <div className="max-w-screen-xl mx-auto px-4 py-8">
        
      <h1 className="text-3xl mt-6 font-bold mb-6 text-center">Browse All Roommate Listings</h1>
      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th>Title</th>
              <th>Location</th>
              <th>Rent</th>
              <th>Room Type</th>
              <th>Availability</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {roommates.map((item) => (
              <tr key={item._id} className="border-b hover:bg-gray-50 transition">
                <td>{item.title}</td>
                <td>{item.location}</td>
                <td>${item.rent}</td>
                <td>{item.roomType}</td>
                <td>
                  <span className={`px-2 py-1 rounded text-sm ${item.availability === 'available' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {item.availability}
                  </span>
                </td>
                <td>
                  <Link to={`/roommate/${item._id}`}>
                    <button className="btn btn-sm btn-primary">See More</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      
    </div>
    <Footer></Footer>
    </div>

  );
};

export default BrowseListings;
