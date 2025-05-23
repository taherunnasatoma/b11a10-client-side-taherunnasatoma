import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Player } from '@lottiefiles/react-lottie-player';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Banner = () => {
  const slides = [
    {
      bg: "bg-amber-100",
      src: "/Animation - 1747949362266.json",
      title: "Find Roommates Easily",
      desc: "Search by location, lifestyle & budget in seconds.",
      textColor: "text-blue-900",
      descColor: "text-blue-700",
    },
    {
      bg: "bg-gray-100",
      src: "https://assets6.lottiefiles.com/packages/lf20_1pxqjqps.json",
      title: "Safe & Secure Profiles",
      desc: "Connect with verified users only.",
      textColor: "text-gray-600",
      descColor: "text-gray-600",
    },
    {
      bg: "bg-blue-50",
      src: "https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json",
      title: "Browse Listings Anytime",
      desc: "Search by location, lifestyle, and budget from anywhere.",
      textColor: "text-pink-900",
      descColor: "text-pink-700",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-10 px-4">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className={`p-8 rounded-xl flex flex-col items-center text-center shadow ${slide.bg}`}>
              <Player
                autoplay
                loop
                src={slide.src}
                style={{ height: '400px', width: '300px' }} // ⬆️ Bigger animation
              />
              <h2 className={`text-3xl md:text-4xl font-extrabold mt-6 ${slide.textColor}`}>{slide.title}</h2>
              <p className={`text-lg md:text-xl mt-2 ${slide.descColor}`}>{slide.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
