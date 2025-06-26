import React from 'react';
import { Link } from 'react-router';

const FeaturedRoommate = ({roommate}) => {

    const {
    _id,
    title,
    location,
    rent
  } = roommate;
    return (
   < div className="bg-white  rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Rent:</strong> ${rent}</p>
      {/* <p><strong>Room Type:</strong> {roomType}</p>
      <p><strong>Lifestyle:</strong> {lifestyle}</p> */}
      
      <Link
        to={`/roommate/${_id}`}
        className="inline-block mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        See More
      </Link>
    </div>
    );
};

export default FeaturedRoommate;