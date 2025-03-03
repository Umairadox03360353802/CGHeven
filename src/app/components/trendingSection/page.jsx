"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Card = ({ title, description }) => {
  return (
    <div class=" relative flex  flex-col justify-center overflow-hidden h-48 w-[22rem]  ">
      <div class="absolute inset-0  "></div>
      <div class="group relative m-0 flex h-52 w-[20rem] rounded-xl mx-0  ring-gray-800/5 sm:mx-auto sm:max-w-xl">
        <div class="z-10 h-full w-full overflow-hidden rounded-xl border  transition duration-300 ease-in-out group-hover:opacity-100 border-gray-700 opacity-70">
          <img src="https://images.unsplash.com/photo-1506187334569-7596f62cf93f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3149&q=80" class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
        </div>
        <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
          <h1 class="font-Oswald text-2xl font-bold text-white shadow-xl">{title}</h1>
          <h1 class="text-sm font-light text-gray-200 shadow-xl">{description}</h1>
        </div>
      </div>
    </div>
  );
};

function TrendingSection() {
  const cards = [
    { title: 'Card 1', description: 'This is the first card.' },
    { title: 'Card 2', description: 'This is the second card.' },
    { title: 'Card 3', description: 'This is the third card.' },
    { title: 'Card 4', description: 'This is the fourth card.' },
    { title: 'Card 5', description: 'This is the fifth card.' },
    { title: 'Card 6', description: 'This is the sixth card.' },
    { title: 'Card 7', description: 'This is the seventh card.' },
    { title: 'Card 8', description: 'This is the eighth card.' },
    { title: 'Card 9', description: 'This is the ninth card.' },
    { title: 'Card 10', description: 'This is the tenth card.' },
    { title: 'Card 11', description: 'This is the eleventh card.' },
    { title: 'Card 12', description: 'This is the twelfth card.' },
  ];
  return (
    <>
      <div className=" mx-auto px-10 py-3  ">
        <div className='  text-white'>
          <h1 className='font-extrabold font-Oswald text-6xl text-center mb-8 mt-2'>Trending Assets</h1>

        </div>
        <div className="">
          <Swiper navigation={true} modules={[Navigation, Pagination]} className="mySwiper" spaceBetween={30} pagination={{ clickable: true, bulletClass: 'swiper-pagination-bullet !w-3 !h-3 !bg-gray-400 !opacity-100', bulletActiveClass: 'swiper-pagination-bullet-active !bg-teal-400' }}

            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
          >



            {cards.map((card, index) => (
              <SwiperSlide key={index} className='py-12'>
                <Link href="/productDetails">
                <Card key={index} title={card.title} description={card.description} />
                </Link>

              </SwiperSlide>


            ))}
          </Swiper>

        </div>
      </div>

    </>
  )
}

export default TrendingSection