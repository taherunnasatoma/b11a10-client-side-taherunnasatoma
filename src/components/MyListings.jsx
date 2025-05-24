import React, { useContext, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../provider/AuthProvider';
import Navbar from './Header/Navbar';
import Footer from './Footer';
import Swal from 'sweetalert2';

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [myListings, setMyListings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/roommates?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyListings(data));
    }
  }, [user]);

  const handleDelete = (id) => {

    console.log(id)
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
    console.log(result.isConfirmed)
  if (result.isConfirmed) {

//start deleting

fetch(`http://localhost:3000/roommates/${id}`,{
    method:'DELETE'
})
.then(res=>res.json())
.then(data=>{
    if(data.deletedCount>0){
      setMyListings(prev => prev.filter(listing => listing._id !== id));
        Swal.fire({
       title: "Deleted!",
       text: "Your roommate has been deleted.",
       icon: "success"
    });
        
    }
})



    
  }
});
  
  };

  const handleUpdate = (id) => {
    navigate(`/updateRoommate/${id}`);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Listings</h2>

        {myListings.length === 0 ? (
          <p className="text-center text-gray-500">You have no roommate listings yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="py-2 px-4 border">Title</th>
                  <th className="py-2 px-4 border">Location</th>
                  <th className="py-2 px-4 border">Rent</th>
                  <th className="py-2 px-4 border">Room Type</th>
                  <th className="py-2 px-4 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {myListings.map((item) => (
                  <tr key={item._id} className="text-center">
                    <td className="py-2 px-4 border">{item.title}</td>
                    <td className="py-2 px-4 border">{item.location}</td>
                    <td className="py-2 px-4 border">${item.rent}</td>
                    <td className="py-2 px-4 border">{item.roomType}</td>
                    <td className="py-2 px-4 border flex justify-center gap-2">
                      <button
                        onClick={() => handleUpdate(item._id)}
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyListings;
