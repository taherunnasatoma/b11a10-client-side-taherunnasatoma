import React, { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router';

import Navbar from '../components/Header/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import FeaturedRoommate from '../components/FeaturedRoommate';
import StatsCountUp from '../components/StatsCountUp';
import WhyChoose from '../components/WhyChoose';

const HomeLayout = () => {

    const initialRoommates = useLoaderData();

    const [roommates,setRoommates]=useState(initialRoommates)
    const availableRoommates = roommates.filter(r => r.availability === "available").slice(0, 6)
    return (
        <div>
            <header className='max-w-screen-xl mx-auto my-3'>
                <Navbar></Navbar>
            </header>
            <main>
                <Banner></Banner>
                <section className='max-w-screen-xl mx-auto  bg-gray-100 p-12 rounded-2xl'>
                    <h2 className="text-3xl font-bold text-center mb-8">Featured Roommates</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        {availableRoommates.map(roommate => (
                            <FeaturedRoommate key={roommate._id}
                            roommates={roommates}
                            setRoommates={setRoommates}
                            roommate={roommate} />
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