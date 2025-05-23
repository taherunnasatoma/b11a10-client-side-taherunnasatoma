import React from 'react';
import CountUp from 'react-countup';
import { FaUserFriends, FaCity, FaClipboardList, FaStar } from 'react-icons/fa';

const stats = [
  {
    icon: <FaUserFriends className="text-4xl black" />,
    label: 'Roommates Connected',
    value: 4500,
  },
  {
    icon: <FaCity className="text-4xl text-black" />,
    label: 'Cities Covered',
    value: 120,
  },
  {
    icon: <FaClipboardList className="text-4xl text-black" />,
    label: 'Active Listings',
    value: 850,
  },
  {
    icon: <FaStar className="text-4xl text-black" />,
    label: '5-Star Reviews',
    value: 1300,
  },
];

const StatsCountUp = () => {
  return (
    <section className="bg-gray-100 rounded-xl max-w-screen-xl my-10 mx-auto py-16 px-12">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Community Impact</h2>
        <div className="grid md:grid-cols-4 gap-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
              {stat.icon}
              <h3 className="text-4xl font-bold text-black mt-3">
                <CountUp end={stat.value} duration={2.5} separator="," />
              </h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCountUp;
