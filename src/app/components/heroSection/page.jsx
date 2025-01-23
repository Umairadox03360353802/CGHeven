'use client'
import React from 'react'
import { IoSearch } from "react-icons/io5";

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/autoplay';



// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

function HeroSection() {
  return (
    <>
      {/* <div className='flex flex-col justify-center items-center'>
        <div className='absolute text-white z-50'>
          
          <div className='h-[250px] w-[370px] m-auto '>
            
          </div><br />

          <div className="w-full max-w-sm min-w-[600px] h-full rounded-lg bg-white mt-16">
            <div className="relative mt-2">
              <div className="absolute top-1 left-1 flex  justify-center items-center">
                <button id="dropdownButton" className="rounded border border-transparent py-3 px-1.5 text-center flex flex-row justify-center items-center text-lg transition-all text-slate-600">
                  <span id="dropdownSpan" className="text-xl overflow-hidden">Europe</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <div className="h-6 border-l border-slate-200 ml-1"></div>
                <div id="dropdownMenu" className="min-w-[150px] overflow-hidden absolute left-0  mt-10 hidden w-full bg-white border border-slate-200 rounded-md shadow-lg z-10">
                  <ul id="dropdownOptions">
                    <li className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer" data-value="Europe">Europe</li>
                    <li className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer" data-value="Australia">Australia</li>
                    <li className="px-4 py-2 text-slate-600 hover:bg-slate-5- text-sm cursor-pointer" data-value="Africa">Africa</li>
                  </ul>
                </div>
              </div>
              <input

                type="text"
                className="w-full h-[60px]  bg-transparent placeholder:text-black text-black text-lg border border-slate-200 rounded-lg pr-12 pl-28 py-2 transition duration-300 ease focus:outline-none  focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Search here..." />

              <button className="absolute right-0 top-0 flex flex-col justify-center items-center h-[60px] w-12 rounded-l-none rounded-r-lg bg-teal-500 p-1.5 border border-transparent text-center text-xl text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 ">
                  <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>

        </div>

        <Swiper

          // spaceBetween={10}
          effect={'fade'}
          navigation={true}
          // pagination={{
          //   clickable: true,
          // }}
          autoplay={{ delay: 3000 }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}

          className="mySwiper w-full h-[70vh] relative "
        >

          <SwiperSlide>

            <img src="https://images2.alphacoders.com/237/237412.jpg" className='w-full block ' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://wallpaper.forfun.com/fetch/4f/4f6ad752090bf5ae323bab7bc37e25e9.jpeg " className='w-full block' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images2.alphacoders.com/110/1108505.png" className='w-full block' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://wallpaper-house.com/data/out/10/wallpaper2you_376499.jpg" className='w-full block' />
          </SwiperSlide>

        </Swiper>




      </div> */}

      <div className="relative  pt-48 pb-12  xl:pt-60 sm:pb-16 lg:pb-20 xl:pb-20 2xl:pb-56  ">
      
        <header className="absolute inset-x-0 top-0 z-30 py-0 xl:py-8">
        
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            
            <div className="flex items-center  justify-between">
              <div className="flex flex-shrink-0">
                <a href="#" title="BakerStreet" className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-secondary focus:ring-primary">
                <h1 className='text-5xl font-Montserrat text-white font-bold'>CGHeven</h1>                </a>
              </div>

              <div className="md:hidden">
              <h1 className='text-5xl font-Montserrat'>CGHeven</h1>
              </div>

              <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
                <a href="#" title="" className="font-Montserrat text-lg font-semibold transition-all duration-200 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"> Assets </a>

                <a href="#" title="" className="font-Montserrat text-lg font-semibold transition-all duration-200 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"> Gallery </a>

                <a href="#" title="" className="font-Montserrat text-lg font-semibold transition-all duration-200 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"> Support Us </a>
                <a href="#" title="" className="font-Montserrat text-lg font-semibold transition-all duration-200 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"> About</a>
                {/* <button type="button" className="text-gray-900 bg-gradient-to-r from-slate-200 via-pink-200 to-slate-200  shadow-[0px_0px_45px_10px_rgba(234,195,222,1)] border border-pink-200 font-Montserrat hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2">Red to Yellow</button> */}
               


              </div>
            </div>
          </div>
        </header>

        <div className="absolute  inset-0 ">
          
        {/* <div className="absolute z-30 mt-40 bg-gradient-to-t from-transparent via-slate-900 to-slate-900 h-[15vh] lg:h-[30vh] w-full opacity-90 blur-md" >
        </div> */}
          <img className="object-cover w-full h-full  " src="/p1.png" alt="" />
           
        </div>
        <div className=" absolute z-20 bg-gradient-to-t from-transparent via-transparent to-black opacity-90 rounded-lg left-[0px] top-[-5px] h-[95vh] w-full ">

          </div>
        
        <div className="relative z-30 mb-52">
          <div className="  px-6 mx-auto sm:px-8 lg:px-12 max-w-full">
            <div className=" max-w-ful mx-auto text-center ">
              <h1 className="tracking-tighter text-white mb-8">
                <span className=" font-extrabold  text-4xl font-Montserrat">Free CG Assets for Everyone </span>
              </h1>
              <div className="flex items-center justify-center mt-2 space-x-3 sm:space-x-4">
                <div className="w-full max-w-sm min-w-[600px] h-full rounded-2xl bg-white mt-6">
                  <div className="relative ">
                    {/* <div className="absolute top-1 left-1 flex  justify-center items-center">
                      <button id="dropdownButton" className="rounded border border-transparent py-3 px-1.5 text-center flex flex-row justify-center items-center text-lg transition-all text-slate-600">
                        <span id="dropdownSpan" className="text-xl overflow-hidden">Europe</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 ml-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>
                      <div className="h-6 border-l border-slate-200 ml-1"></div>
                      <div id="dropdownMenu" className="min-w-[150px] overflow-hidden absolute left-0  mt-10 hidden w-full bg-white border border-slate-200 rounded-md shadow-lg z-10">
                        <ul id="dropdownOptions">
                          <li className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer" data-value="Europe">Europe</li>
                          <li className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer" data-value="Australia">Australia</li>
                          <li className="px-4 py-2 text-slate-600 hover:bg-slate-5- text-sm cursor-pointer" data-value="Africa">Africa</li>
                        </ul>
                      </div>
                    </div> */}
                    <input

                      type="text"
                      className="w-full font-Montserrat h-[68px]  bg-transparent placeholder:text-black text-black text-lg border border-white rounded-2xl pr-12 pl-5 py-2 transition duration-300 ease focus:outline-none  focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                      placeholder="Search here..." />

                    <button className="absolute right-0 top-[0px] flex flex-col justify-center items-center h-[66px] w-16 rounded-l-none rounded-r-2xl bg-[#40E0D0] p-1.5  border border-white text-center text-xl text-white transition-all hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 ">
                  <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd"></path>
                </svg> */}
                      <IoSearch size={26}/>

                    </button>
                  </div>
                </div>



              </div>
            </div>
          </div>
        </div>

        <div className="absolute z-30 mt-40 bg-gradient-to-t from-slate-950 via-slate-950 to-transparent h-[15vh] lg:h-[12vh] w-full blur-md" ></div>

      </div>




    </>
  )
}

export default HeroSection