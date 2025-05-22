import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
    return (
        <div className='w-11/12  mx-auto mb-8 '>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                <SwiperSlide>
                    <div className='bg-orange-200 h-[600px] flex flex-col justify-center items-center text-center p-10 rounded-xl'>
                        <h2 className='text-3xl font-bold text-blue-900'>Find Your Perfect Roommate</h2>
                        <p className='mt-2 text-blue-700'>Easily connect with like-minded individuals in your area.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='bg-orange-300 h-[600px] flex flex-col justify-center items-center text-center p-10 rounded-xl'>
                        <h2 className='text-3xl font-bold text-white'>Browse Listings Anytime</h2>
                        <p className='mt-2 text-white'>Search by location, lifestyle, and budget from anywhere.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='bg-orange-400 h-[600px] flex flex-col justify-center items-center text-center p-10 rounded-xl'>
                        <h2 className='text-3xl font-bold text-white'>Secure and Trusted</h2>
                        <p className='mt-2 text-white'>Your information is safe. Connect only with verified users.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
