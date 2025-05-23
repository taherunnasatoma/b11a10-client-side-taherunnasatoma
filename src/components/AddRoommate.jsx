import React from 'react';
import Navbar from './Header/Navbar';
import Footer from './Footer';
import Swal from 'sweetalert2';

const AddRoommate = () => {

  const handleAddRoommate = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newRoommate = Object.fromEntries(formData.entries())
    console.log(newRoommate);

    //send roommate data to the db
    fetch('http://localhost:3000/roommates', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'

      },
      body: JSON.stringify(newRoommate)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          console.log('added successfully')
          Swal.fire({
            title: "Successfully Added!",
            icon: "success",
            draggable: true
          });

          form.reset()
        }
      })

  }
  return (
    <div className="p-6 md:p-12 lg:px-24 py-10 bg-gray-50 min-h-screen">
      <Navbar></Navbar>
      <div className="max-w-screen-xl mx-auto my-5 bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">Add Roommate Listing</h1>
          <p className="text-gray-500 mt-2">
            Fill out the form below to share your room availability and preferences.
          </p>
        </div>

        <form onSubmit={handleAddRoommate} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-1">Title</label>
              <input type="text" name="title" placeholder="Looking for a roommate in NYC" className="input input-bordered w-full" required />
            </div>

            <div>
              <label className="block font-medium mb-1">Location</label>
              <input type="text" name="location" placeholder="City or area" className="input input-bordered w-full" required />
            </div>

            <div>
              <label className="block font-medium mb-1">Rent Amount</label>
              <input type="number" name="rent" placeholder="500" className="input input-bordered w-full" required />
            </div>

            <div>
              <label className="block font-medium mb-1">Room Type</label>
              <select name="roomType" className="select select-bordered w-full" required>
                <option value="">Select type</option>
                <option value="Single">Single</option>
                <option value="Shared">Shared</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Lifestyle Preferences</label>
              <input type="text" name="lifestyle" placeholder="Pets, Smoking, Night Owl, etc." className="input input-bordered w-full" required />
            </div>

            <div>
              <label className="block font-medium mb-1">Contact Info</label>
              <input type="text" name="contact" placeholder="Phone or email" className="input input-bordered w-full" required />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea name="description" rows="4" placeholder="Describe the place and your preferences" className="textarea textarea-bordered w-full" required></textarea>
          </div>

          <div>
            <label className="block font-medium mb-1">Availability</label>
            <select name="availability" className="select select-bordered w-full" required>
              <option value="available">Available</option>
              <option value="not-available">Not Available</option>
            </select>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-1">User Email</label>
              <input type="email" value={userEmail} className="input input-bordered w-full bg-gray-100" readOnly />
            </div>
            <div>
              <label className="block font-medium mb-1">User Name</label>
              <input type="text" value={userName} className="input input-bordered w-full bg-gray-100" readOnly />
            </div>
          </div> */}

          <div>
            <button type="submit" className="btn btn-primary w-full text-white text-lg font-semibold">
              Add Listing
            </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddRoommate;