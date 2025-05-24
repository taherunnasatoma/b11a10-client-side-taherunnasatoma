import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaDollarSign,
  FaUserFriends,
  FaPhone,
  FaInfoCircle,
} from 'react-icons/fa';
import Footer from './Footer';
import Navbar from './Header/Navbar';

const RoommateDetails = () => {
  const roommate = useLoaderData(); // Load data from loader
  const navigate = useNavigate();

  const {
    title,
    location,
    rent,
    roomType,
    lifestyle,
    description,
    contact,
    availability,
    userEmail,
    userName,
  } = roommate || {};

  return (
    <div>
        <Navbar></Navbar>

    <div className="max-w-4xl mx-auto p-6 my-10 bg-gray-100 text-black shadow-lg rounded-xl border border-gray-700">
      <h1 className="text-3xl font-bold text-center mb-6">{title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-700" /> <strong>Location:</strong> {location}
          </p>
          <p className="flex items-center gap-2">
            <FaDollarSign className="text-gray-700" /> <strong>Rent:</strong> ${rent}
          </p>
          <p className="flex items-center gap-2">
            <FaUserFriends className="text-gray-700" /> <strong>Room Type:</strong> {roomType}
          </p>
          <p className="flex items-center gap-2">
            <FaInfoCircle className="text-gray-700" /> <strong>Availability:</strong> {availability}
          </p>
        </div>

        <div>
          <p><strong>Lifestyle Preferences:</strong> {lifestyle}</p>
          <p><strong>Contact Info:</strong> {contact}</p>
          <p><strong>Posted By:</strong> {userName} ({userEmail})</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="bg-gray-700 text-gray-200 p-4 rounded">{description}</p>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-8 px-6 py-2 bg-gray-700 text-white rounded "
      >
        Go Back
      </button>
    </div>
    <Footer></Footer>
    </div>

  );
};

export default RoommateDetails;
