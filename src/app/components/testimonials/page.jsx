'use client'
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { IoMdArrowRoundForward } from "react-icons/io";
// import { IoMdArrowRoundBack } from "react-icons/io";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Testimonials() {
  return (
    <div className='bg-slate-950 absolute top-0 p-10  w-full'>

      {/* <h2 className="font-manrope font-serif font-bold  pb-5 text-5xl text-teal-500 mb-18 pt-10 text-center max-lg:text-center ">
        Testimonials
      </h2> */}

      <div className=' pb-8 '>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y, Autoplay]}
          //   style={{"--swiper-navigation-color": "#2b6777", "--swiper-pagination-color": "#2b6777"}}
          navigation={false}
          
          // pagination={{ clickable: true }}
          // autoplay={{ delay: 2000 }}
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
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}


        >
          <SwiperSlide >
            <div className="relative w-auto h-[180px] isolate flex flex-col justify-end overflow-hidden rounded-2xl  max-w-lg mx-auto mt-0 hover:bg-[#0a1022]">
              <img src="https://cdn.polyhaven.com/asset_img/primary/carved_wooden_elephant.png?height=180&width=180" alt="University of Southern California" className=" absolute inset-0 h-auto w-auto  object-cover" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div> */}
              <h3 className="z-10 mt-3 text-2xl font-bold font-Montserrat text-white">Decorative</h3>
              {/* <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <article className="relative w-auto h-[180px] isolate flex flex-col justify-end overflow-hidden rounded-2xl  max-w-lg mx-auto mt-0 hover:bg-[#0a1022]">
              <img src="https://cdn.polyhaven.com/asset_img/primary/Television_01.png?height=180&width=180" alt="University of Southern California" className="absolute inset-0 h-[180px] w-auto  object-fill" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div> */}
              <h3 className="z-10 mt-3 text-2xl font-Montserrat font-bold text-white">Electronics</h3>
              {/* <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div> */}
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="relative w-auto h-[180px] isolate flex flex-col justify-end overflow-hidden rounded-2xl  max-w-lg mx-auto mt-0 hover:bg-[#0a1022]">
              <img src="https://cdn.polyhaven.com/asset_img/primary/boombox.png?height=180&width=180" alt="University of Southern California" className="absolute inset-0 h-[180px] w-auto  object-fill" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div> */}
              <h3 className="z-10 mt-3 text-2xl font-Montserrat font-bold text-white">Appliances</h3>
              {/* <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div> */}
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="relative w-auto h-[180px] isolate flex flex-col justify-end overflow-hidden rounded-2xl  max-w-lg mx-auto mt-0 hover:bg-[#0a1022]">
              <img src="https://cdn.polyhaven.com/asset_img/primary/Drill_01.png?height=180&width=180" alt="University of Southern California" className="absolute inset-0 h-[180px] w-auto  object-fill" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div> */}
              <h3 className="z-10 mt-3 text-2xl font-bold font-Montserrat text-white">Tools</h3>
              {/* <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div> */}
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="relative w-auto h-[180px] isolate flex flex-col justify-end overflow-hidden rounded-2xl  max-w-lg mx-auto mt-0 hover:bg-[#0a1022]">
              <img src="https://cdn.polyhaven.com/asset_img/primary/jacaranda_tree.png?height=180&width=180" alt="University of Southern California" className="absolute inset-0 h-[180px] w-auto  object-fill" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div> */}
              <h3 className="z-10 mt-3 text-2xl font-Montserrat font-bold text-white">Nature</h3>
              {/* <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div> */}
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="relative w-auto h-[180px] isolate flex flex-col justify-end overflow-hidden rounded-2xl  max-w-lg mx-auto mt-0 hover:bg-[#0a1022]">
              <img src="https://cdn.polyhaven.com/asset_img/primary/utility_box_02.png?height=180&width=180" alt="University of Southern California" className="absolute inset-0 h-[180px] w-auto  object-fill" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div> */}
              <h3 className="z-10 mt-3 text-2xl font-bold font-Montserrat text-white">Industrials</h3>
              {/* <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div> */}
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="relative w-auto h-[180px] isolate flex flex-col justify-end overflow-hidden rounded-2xl  max-w-lg mx-auto mt-0 hover:bg-[#0a1022]">
              <img src="https://cdn.polyhaven.com/asset_img/primary/Camera_01.png?height=180&width=180" alt="University of Southern California" className="absolute inset-0 h-[180px] w-auto  object-fill" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div> */}
              <h3 className="z-10 mt-3 text-2xl font-bold font-Montserrat text-white">Props</h3>
              {/* <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div> */}
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="relative w-auto h-[180px] isolate flex flex-col justify-end overflow-hidden rounded-2xl  max-w-lg mx-auto mt-0 hover:bg-[#0a1022]">
              <img src="https://cdn.polyhaven.com/asset_img/primary/desk_lamp_arm_01.png?height=180&width=180" alt="University of Southern California" className="absolute inset-0 h-[180px] w-auto  object-fill" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div> */}
              <h3 className="z-10 mt-3 text-2xl font-bold font-Montserrat text-white">Lighting</h3>
              {/* <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div> */}
            </article>
          </SwiperSlide>

          ...
        </Swiper>

      </div>
    </div>
  )
}

export default Testimonials