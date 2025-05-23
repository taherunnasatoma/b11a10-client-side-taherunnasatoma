import React from 'react';
import { Outlet, useLoaderData } from 'react-router';

import Navbar from '../components/Header/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import FeaturedRoommate from '../components/FeaturedRoommate';

const HomeLayout = () => {

    const roommates = useLoaderData();
    const availableRoommates = roommates.filter(r => r.availability === "available").slice(0, 6)
    return (
        <div>
            <header className='max-w-screen-xl mx-auto my-3'>
                <Navbar></Navbar>
            </header>
            <main>
                <Banner></Banner>
                <section className='max-w-screen-xl mx-auto px-4 py-10'>
                    <h2 className="text-3xl font-bold text-center mb-8">Featured Roommates</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100 p-12 rounded-2xl">
                        {availableRoommates.map(roommate => (
                            <FeaturedRoommate key={roommate._id} roommate={roommate} />
                        ))}
                    </div>
                </section>


            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;