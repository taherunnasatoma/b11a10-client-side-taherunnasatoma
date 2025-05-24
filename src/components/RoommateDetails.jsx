import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaDollarSign,
  FaUserFriends,
  FaPhone,
  FaInfoCircle,
  FaHeart,
} from 'react-icons/fa';
import Footer from './Footer';
import Navbar from './Header/Navbar';
import { AuthContext } from '../provider/AuthProvider';

const RoommateDetails = () => {
  const roommate = useLoaderData();
  const { user } = useContext(AuthContext);
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

  const [likeCount, setLikeCount] = useState(0);
  const [showContact, setShowContact] = useState(false);

  const handleLike = () => {
    if (user?.email === userEmail) {
      alert("You cannot like your own post!");
      return;
    }
    setLikeCount(prev => prev + 1);
    setShowContact(true);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 my-10 bg-gray-100 text-black shadow-lg rounded-xl border border-gray-700">
        <h1 className="text-3xl font-bold text-center mb-6">{title}</h1>
        <p className="text-center mb-4 font-semibold">{likeCount} people interested in</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="flex items-center gap-2"><FaMapMarkerAlt /> <strong>Location:</strong> {location}</p>
            <p className="flex items-center gap-2"><FaDollarSign /> <strong>Rent:</strong> ${rent}</p>
            <p className="flex items-center gap-2"><FaUserFriends /> <strong>Room Type:</strong> {roomType}</p>
            <p className="flex items-center gap-2"><FaInfoCircle /> <strong>Availability:</strong> {availability}</p>
          </div>

          <div>
            <p><strong>Lifestyle Preferences:</strong> {lifestyle}</p>
            <p><strong>Posted By:</strong> {userName} ({userEmail})</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="bg-gray-700 text-gray-200 p-4 rounded">{description}</p>
        </div>

        <div className="mt-6 flex flex-col gap-2 items-start">
          <button onClick={handleLike} className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded">
            <FaHeart /> Like
          </button>
          {showContact && <p><FaPhone className="inline" /> <strong>Contact:</strong> {contact}</p>}
        </div>

        <button
          onClick={() => navigate(-1)}
          className="mt-8 px-6 py-2 bg-gray-700 text-white rounded"
        >
          Go Back
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default RoommateDetails;
