import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Banner = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto py-10">
            
            <div className="bg-orange-200 p-6 rounded-xl flex flex-col items-center text-center shadow">
                <Player
                    autoplay
                    loop
                    src="/public/Animation - 1747949362266.json"
                    style={{ height: '300px', width: '200px' }}
                />
                <h2 className="text-xl font-bold text-blue-900 mt-4">Find Roommates Easily</h2>
                <p className="text-blue-700">Search by location, lifestyle & budget in seconds.</p>
            </div>

            <div className="bg-green-100 p-6 rounded-xl flex flex-col items-center text-center shadow">
                <Player
                    autoplay
                    loop
                    src="https://assets6.lottiefiles.com/packages/lf20_1pxqjqps.json"
                    style={{ height: '300px', width: '200px' }}
                />
                <h2 className="text-xl font-bold text-green-900 mt-4">Safe & Secure Profiles</h2>
                <p className="text-green-700">Connect with verified users only.</p>
            </div>

            <div className="bg-pink-100 p-6 rounded-xl flex flex-col items-center text-center shadow">
                <Player
                    autoplay
                    loop
                    src="https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json"
                    style={{ height: '300px', width: '200px' }}
                />
                <h2 className="text-xl font-bold text-pink-900 mt-4">Browse Listings Anytime</h2>
                <p className="text-pink-700">Search by location, lifestyle, and budget from anywhere.</p>
            </div>
        </div>
    );
};

export default Banner;
