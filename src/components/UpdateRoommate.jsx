import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Navbar from './Header/Navbar';
import Footer from './Footer';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateRoommate = () => {
  const roommate = useLoaderData();
  const {
    _id,
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

  const { user } = useContext(AuthContext);

  const handleUpdateRoommate = e => {
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form);
    const updatedRoommate = Object.fromEntries(formData.entries())
    console.log(updatedRoommate);

    //send updated roommate to the db

    fetch(`http://localhost:3000/roommates/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedRoommate)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Roommate List Updated Successfully!",
            showConfirmButton: false,
            timer: 1500
          });

        }
      })


  }
  return (
    <div>
      <div className="p-6 md:p-12 lg:px-24 py-10 bg-gray-50 min-h-screen">
        <Navbar></Navbar>
        <div className="max-w-screen-xl mx-auto my-5 bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-10">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-800">Update Roommate Listing</h1>
            <p className="text-gray-500 mt-2">
              Fill out the form below to share your room availability and preferences.
            </p>
          </div>

          <form onSubmit={handleUpdateRoommate} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-1">Title</label>
                <input type="text" name="title" defaultValue={title} placeholder="Looking for a roommate in NYC" className="input input-bordered w-full" required />
              </div>

              <div>
                <label className="block font-medium mb-1">Location</label>
                <input type="text" name="location" defaultValue={location} placeholder="City or area" className="input input-bordered w-full" required />
              </div>

              <div>
                <label className="block font-medium mb-1">Rent Amount</label>
                <input type="number" name="rent" defaultValue={rent} placeholder="500" className="input input-bordered w-full" required />
              </div>

              <div>
                <label className="block font-medium mb-1">Room Type</label>
                <select name="roomType" defaultValue={roomType} className="select select-bordered w-full" required>
                  <option value="">Select type</option>
                  <option value="Single">Single</option>
                  <option value="Shared">Shared</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-1">Lifestyle Preferences</label>
                <input type="text" name="lifestyle" defaultValue={lifestyle} placeholder="Pets, Smoking, Night Owl, etc." className="input input-bordered w-full" required />
              </div>

              <div>
                <label className="block font-medium mb-1">Contact Info</label>
                <input type="text" name="contact" defaultValue={contact} placeholder="Phone or email" className="input input-bordered w-full" required />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">Description</label>
              <textarea name="description" defaultValue={description} rows="4" placeholder="Describe the place and your preferences" className="textarea textarea-bordered w-full" required></textarea>
            </div>

            <div>
              <label className="block font-medium mb-1">Availability</label>
              <select name="availability" defaultValue={availability} className="select select-bordered w-full" required>
                <option value="available">Available</option>
                <option value="not-available">Not Available</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-1">User Email</label>
                <input type="email" value={user?.email || ''} className="input input-bordered w-full bg-gray-100" readOnly />
              </div>
              <div>
                <label className="block font-medium mb-1">User Name</label>
                <input type="text" value={user?.displayName || ''} className="input input-bordered w-full bg-gray-100" readOnly />
              </div>
            </div>


            <div>
              <button type="submit" className="btn btn-primary w-full text-white text-lg font-semibold">
                Update Listing
              </button>
            </div>
          </form>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default UpdateRoommate;