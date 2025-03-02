"use client"
import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const Card = ({ title, description }) => {
  return (
    <div className=" relative flex  flex-col justify-center overflow-hidden h-40 w-full rounded-xl ">
      <div className="absolute inset-0  "></div>
      <div className="group relative m-0 flex h-52 w-[20rem] rounded-xl mx-0  ring-gray-800/5 sm:mx-auto sm:max-w-xl">
        <div className="z-10 h-full w-full overflow-hidden rounded-xl border  transition duration-300 ease-in-out group-hover:opacity-100 border-gray-700 opacity-70">
          <img src="https://images.unsplash.com/photo-1506187334569-7596f62cf93f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3149&q=80" class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
        </div>
        <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
          <h1 className="font-Oswald text-2xl font-bold text-white shadow-xl">{title}</h1>
          <h1 className="text-sm font-light text-gray-200 shadow-xl">{description}</h1>
        </div>
      </div>
    </div>
  );
};


function MoreAssets() {
  const cards = [
    { title: 'Card 1', description: 'This is the first card.' },
    { title: 'Card 2', description: 'This is the second card.' },
    { title: 'Card 3', description: 'This is the third card.' },
    { title: 'Card 4', description: 'This is the fourth card.' },
    { title: 'Card 5', description: 'This is the fifth card.' },
    { title: 'Card 6', description: 'This is the sixth card.' },
    { title: 'Card 7', description: 'This is the seventh card.' },
    { title: 'Card 8', description: 'This is the eighth card.' },


  ];
  return (
    <div>
      <div className=" mx-auto px-10 py-3  ">
        <div className='  text-white'>
          <h1 className='font-extrabold font-Oswald text-5xl text-center mb-4 mt-2'>Similar Assets</h1>

        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">




          {cards.map((card, index) => (
            <div key={index} className='py-8'>
              <Card key={index} title={card.title} description={card.description} />

            </div>


          ))}


        </div>
      </div>
    </div>
  )
}

export default MoreAssets