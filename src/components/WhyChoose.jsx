import React from 'react';

const WhyChoose = () => {
    return (
        <div className="max-w-screen-xl bg-gray-100 mx-auto my-16 px-4 py-12 -my-1 rounded-2xl text-center">
      <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-2">Verified Listings</h3>
          <p>All listings are reviewed for authenticity to ensure safety and trust.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-2">Advanced Filters</h3>
          <p>Find your perfect roommate match using filters like lifestyle, rent, and location.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-2">Easy Communication</h3>
          <p>Contact potential roommates quickly with built-in contact info.</p>
        </div>
      </div>
    </div>
    );
};

export default WhyChoose;