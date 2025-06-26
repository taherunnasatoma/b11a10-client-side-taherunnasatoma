import React, { useEffect, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router';

import Navbar from '../components/Header/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import FeaturedRoommate from '../components/FeaturedRoommate';
import StatsCountUp from '../components/StatsCountUp';
import WhyChoose from '../components/WhyChoose';
import BlogCard from '../components/Blog/BlogCard';

const HomeLayout = () => {

    const initialRoommates = useLoaderData();

    const [blogs, setBlogs] = useState([]);

    const [sortOrder, setSortOrder] = useState("asc");
    const [filterType, setFilterType] = useState("all");


    useEffect(() => {
        fetch('blogData.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);


    const [roommates, setRoommates] = useState(initialRoommates)
    let availableRoommates = roommates.filter(r => r.availability === "available");

    
    if (filterType !== "all") {
        availableRoommates = availableRoommates.filter(r => r.roomType === filterType);
    }

   
    availableRoommates = availableRoommates.sort((a, b) => {
        return sortOrder === "asc" ? a.rent - b.rent : b.rent - a.rent;
    });

    
    availableRoommates = availableRoommates.slice(0, 8);

    return (
        <div>
            <header className=' mx-auto sticky top-0 z-50 bg-white shadow-md '>
                <Navbar></Navbar>
            </header>
            <main>
                <Banner></Banner>
                <section className='max-w-screen-xl mx-auto px-4 py-8 bg-gray-100  rounded-2xl'>
                    <h2 className="text-3xl font-bold text-center mb-4">Featured Roommates</h2>

                   
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                        
                        <div>
                            <label className="font-semibold mr-2">Sort by Rent:</label>
                            <select
                                className="select select-bordered"
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                            >
                                <option value="asc">Low to High</option>
                                <option value="desc">High to Low</option>
                            </select>
                        </div>

                       
                        <div>
                            <label className="font-semibold mr-2">Room Type:</label>
                            <select
                                className="select select-bordered"
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                            >
                                <option value="all">All</option>
                                <option value="Single">Single</option>
                                <option value="Shared">Shared</option>
                            </select>
                        </div>
                    </div>

                
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                        {availableRoommates.map(roommate => (
                            <FeaturedRoommate
                                key={roommate._id}
                                roommates={roommates}
                                setRoommates={setRoommates}
                                roommate={roommate}
                            />
                        ))}
                    </div>
                </section>

                <section className="max-w-screen-xl mx-auto bg-gray-100 my-10 p-12 rounded-2xl ">
                    <h2 className="text-3xl font-bold text-center mb-8">Roommate Tips & Advice</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {blogs.map(blog => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </div>
                </section>

                <WhyChoose></WhyChoose>
                <StatsCountUp></StatsCountUp>


            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;