"use client"
import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function MoreTutorials() {
  return (
    <>
      <div className="bg-slate-950  top-0 p-10 mt-24  w-full">
        <h2 className="font-manrope font-serif font-bold  mb-20 text-5xl text-white mb-18 pt-10 text-center max-lg:text-center ">
          WATCH MORE TUTORIALS
        </h2>

        <div className=" pb-8 ">
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
            <SwiperSlide>
              <article class="max-w-xl w-full h-[70vh] bg-white rounded-xl shadow-lg overflow-hidden ">
                <div className="bg-emerald-500 rounded-xl p-6">
                  {/* Adjusted tablet size */}
                  <div class="relative mx-auto shadow-xl border-gray-800 dark:border-gray-800 bg-gray-800 border-[5px] rounded-[1.25rem] h-[280px] max-w-[220px] md:h-[360px] md:max-w-[270px] transform transition-transform hover:scale-[1.02]">
                    {/* Side buttons */}
                    <div class="h-[14px] w-[2px] bg-gray-800  absolute -start-[6px] top-[28px] rounded-s-lg"></div>
                    <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[64px] rounded-s-lg"></div>
                    <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[100px] rounded-s-lg"></div>
                    <div class="h-[24px] w-[2px] bg-gray-800  absolute -end-[6px] top-[84px] rounded-e-lg"></div>

                    {/* Screen area */}
                    <div class="rounded-[1rem] overflow-hidden h-[270px] md:h-[350px] bg-whit">
                      {/* <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
                                        class="dark:hidden h-full w-full object-cover"
                                        alt="dramatic sky tutorial" /> */}
                      <img
                        src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        class="hidden dark:block h-full w-full object-cover "
                        alt="dramatic sky tutorial dark"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-between items-center mt-6 px-5">
                  <div class="flex flex-col gap-1 ">
                    <h2 class="text-xl font-extrabold font-Montserrat text-black">
                      Converse Sneakers
                    </h2>
                    <span class="font-semibold font-VarelaRound text-md ">
                      High Top (Lemon Yellow)
                    </span>
                  </div>
                  <div className="h-10 w-10 flex flex-col justify-center items-center  mt-5 mr-5 gap-4">
                    <img src="./youtube-logo.png" alt="" />
                    <p className="font-bold font-Montserrat text-sm text-center">
                      FREE <br />
                      TUTORIAL
                    </p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article class="max-w-xl w-full h-[70vh] bg-white rounded-xl shadow-lg overflow-hidden ">
                <div className="bg-amber-400 rounded-xl p-6">
                  {/* Adjusted tablet size */}
                  <div class="relative mx-auto shadow-xl border-gray-800 dark:border-gray-800 bg-gray-800 border-[5px] rounded-[1.25rem] h-[280px] max-w-[220px] md:h-[360px] md:max-w-[270px] transform transition-transform hover:scale-[1.02]">
                    {/* Side buttons */}
                    <div class="h-[14px] w-[2px] bg-gray-800  absolute -start-[6px] top-[28px] rounded-s-lg"></div>
                    <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[64px] rounded-s-lg"></div>
                    <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[100px] rounded-s-lg"></div>
                    <div class="h-[24px] w-[2px] bg-gray-800  absolute -end-[6px] top-[84px] rounded-e-lg"></div>

                    {/* Screen area */}
                    <div class="rounded-[1rem] overflow-hidden h-[270px] md:h-[350px] bg-whit">
                      {/* <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
                                        class="dark:hidden h-full w-full object-cover"
                                        alt="dramatic sky tutorial" /> */}
                      <img
                        src="https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        class="hidden dark:block h-full w-full object-cover "
                        alt="dramatic sky tutorial dark"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-between items-center mt-6 px-5">
                  <div class="flex flex-col gap-1 ">
                    <h2 class="text-xl font-extrabold font-Montserrat text-black">
                      Converse Sneakers
                    </h2>
                    <span class="font-semibold font-VarelaRound text-md ">
                      High Top (Lemon Yellow)
                    </span>
                  </div>
                  <div className="h-10 w-10 flex flex-col justify-center items-center  mt-5 mr-5 gap-4">
                    <img src="./patreon.png" alt="" />
                    <p className="font-bold font-Montserrat text-sm">
                      PATREON <br />
                      TUTORIAL
                    </p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article class="max-w-xl w-full h-[70vh] bg-white rounded-xl shadow-lg overflow-hidden ">
                <div className="bg-rose-300 rounded-xl p-6">
                  {/* Adjusted tablet size */}
                  <div class="relative mx-auto shadow-xl border-gray-800 dark:border-gray-800 bg-gray-800 border-[5px] rounded-[1.25rem] h-[280px] max-w-[220px] md:h-[360px] md:max-w-[270px] transform transition-transform hover:scale-[1.02]">
                    {/* Side buttons */}
                    <div class="h-[14px] w-[2px] bg-gray-800  absolute -start-[6px] top-[28px] rounded-s-lg"></div>
                    <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[64px] rounded-s-lg"></div>
                    <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[100px] rounded-s-lg"></div>
                    <div class="h-[24px] w-[2px] bg-gray-800  absolute -end-[6px] top-[84px] rounded-e-lg"></div>

                    {/* Screen area */}
                    <div class="rounded-[1rem] overflow-hidden h-[270px] md:h-[350px] bg-whit">
                      {/* <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
                                        class="dark:hidden h-full w-full object-cover"
                                        alt="dramatic sky tutorial" /> */}
                      <img
                        src="https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        class="hidden dark:block h-full w-full object-cover "
                        alt="dramatic sky tutorial dark"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-between items-center mt-6 px-5">
                  <div class="flex flex-col gap-1 ">
                    <h2 class="text-xl font-extrabold font-Montserrat text-black">
                      Converse Sneakers
                    </h2>
                    <span class="font-semibold font-VarelaRound text-md ">
                      High Top (Lemon Yellow)
                    </span>
                  </div>
                  <div className="h-10 w-10 flex flex-col justify-center items-center  mt-5 mr-5 gap-4">
                    <img src="./youtube-logo.png" alt="" />
                    <p className="font-bold font-Montserrat text-sm text-center">
                      FREE
                      <br />
                      TUTORIAL
                    </p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article class="max-w-xl w-full h-[70vh] bg-white rounded-xl shadow-lg overflow-hidden ">
                <div className="bg-amber-500 rounded-xl p-6">
                  {/* Adjusted tablet size */}
                  <div class="relative mx-auto shadow-xl border-gray-800 dark:border-gray-800 bg-gray-800 border-[5px] rounded-[1.25rem] h-[280px] max-w-[220px] md:h-[360px] md:max-w-[270px] transform transition-transform hover:scale-[1.02]">
                    {/* Side buttons */}
                    <div class="h-[14px] w-[2px] bg-gray-800  absolute -start-[6px] top-[28px] rounded-s-lg"></div>
                    <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[64px] rounded-s-lg"></div>
                    <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[100px] rounded-s-lg"></div>
                    <div class="h-[24px] w-[2px] bg-gray-800  absolute -end-[6px] top-[84px] rounded-e-lg"></div>

                    {/* Screen area */}
                    <div class="rounded-[1rem] overflow-hidden h-[270px] md:h-[350px] bg-whit">
                      {/* <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
                                        class="dark:hidden h-full w-full object-cover"
                                        alt="dramatic sky tutorial" /> */}
                      <img
                        src="https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        class="hidden dark:block h-full w-full object-cover "
                        alt="dramatic sky tutorial dark"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-between items-center mt-6 px-5">
                  <div class="flex flex-col gap-1 ">
                    <h2 class="text-xl font-extrabold font-Montserrat text-black">
                      Converse Sneakers
                    </h2>
                    <span class="font-semibold font-VarelaRound text-md ">
                      High Top (Lemon Yellow)
                    </span>
                  </div>
                  <div className="h-10 w-10 flex flex-col justify-center items-center  mt-5 mr-5 gap-4">
                    <img src="./patreon.png" alt="" />
                    <p className="font-bold font-Montserrat text-sm">
                      PATREON <br />
                      TUTORIAL
                    </p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article class="max-w-xl w-full h-[70vh] bg-white rounded-xl shadow-lg overflow-hidden ">
                <div className="bg-orange-200 rounded-xl p-6">
                  {/* Adjusted tablet size */}
                  <div class="relative mx-auto shadow-xl border-gray-800 dark:border-gray-800 bg-gray-800 border-[5px] rounded-[1.25rem] h-[280px] max-w-[220px] md:h-[360px] md:max-w-[270px] transform transition-transform hover:scale-[1.02]">
                    {/* Side buttons */}
                    <div class="h-[14px] w-[2px] bg-gray-800  absolute -start-[6px] top-[28px] rounded-s-lg"></div>
                    <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[64px] rounded-s-lg"></div>
                    <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[100px] rounded-s-lg"></div>
                    <div class="h-[24px] w-[2px] bg-gray-800  absolute -end-[6px] top-[84px] rounded-e-lg"></div>

                    {/* Screen area */}
                    <div class="rounded-[1rem] overflow-hidden h-[270px] md:h-[350px] bg-whit">
                      {/* <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
                                        class="dark:hidden h-full w-full object-cover"
                                        alt="dramatic sky tutorial" /> */}
                      <img
                        src="https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        class="hidden dark:block h-full w-full object-cover "
                        alt="dramatic sky tutorial dark"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-between items-center mt-6 px-5">
                  <div class="flex flex-col gap-1 ">
                    <h2 class="text-xl font-extrabold font-Montserrat text-black">
                      Converse Sneakers
                    </h2>
                    <span class="font-semibold font-VarelaRound text-md ">
                      High Top (Lemon Yellow)
                    </span>
                  </div>
                  <div className="h-10 w-10 flex flex-col justify-center items-center  mt-5 mr-5 gap-4">
                    <img
                      src="./youtube-logo.png"
                      alt=""
                      className="h-full w-full"
                    />
                    <p className="font-bold font-Montserrat text-sm text-center">
                      FREE
                      <br />
                      TUTORIAL
                    </p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article class="max-w-xl w-full h-[70vh] bg-white rounded-xl shadow-lg overflow-hidden ">
                <div className="bg-rose-300 rounded-xl p-6">
                  {/* Adjusted tablet size */}
                  <div class="relative mx-auto shadow-xl border-gray-800 dark:border-gray-800 bg-gray-800 border-[5px] rounded-[1.25rem] h-[280px] max-w-[220px] md:h-[360px] md:max-w-[270px] transform transition-transform hover:scale-[1.02]">
                    {/* Side buttons */}
                    <div class="h-[14px] w-[2px] bg-gray-800  absolute -start-[6px] top-[28px] rounded-s-lg"></div>
                    <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[64px] rounded-s-lg"></div>
                    <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[100px] rounded-s-lg"></div>
                    <div class="h-[24px] w-[2px] bg-gray-800  absolute -end-[6px] top-[84px] rounded-e-lg"></div>

                    {/* Screen area */}
                    <div class="rounded-[1rem] overflow-hidden h-[270px] md:h-[350px] bg-whit">
                      {/* <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
                                        class="dark:hidden h-full w-full object-cover"
                                        alt="dramatic sky tutorial" /> */}
                      <img
                        src="https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        class="hidden dark:block h-full w-full object-cover "
                        alt="dramatic sky tutorial dark"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-between items-center mt-6 px-5">
                  <div class="flex flex-col gap-1 ">
                    <h2 class="text-xl font-extrabold font-Montserrat text-black">
                      Converse Sneakers
                    </h2>
                    <span class="font-semibold font-VarelaRound text-md ">
                      High Top (Lemon Yellow)
                    </span>
                  </div>
                  <div className="h-10 w-10 flex flex-col justify-center items-center  mt-5 mr-5 gap-4">
                    <img src="./patreon.png" alt="" />
                    <p className="font-bold font-Montserrat text-sm">
                      PATREON <br />
                      TUTORIAL
                    </p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article class="max-w-xl w-full h-[70vh] bg-white rounded-xl shadow-lg overflow-hidden ">
                <div className="bg-emerald-500 rounded-xl p-6">
                  {/* Adjusted tablet size */}
                  <div class="relative mx-auto shadow-xl border-gray-800 dark:border-gray-800 bg-gray-800 border-[5px] rounded-[1.25rem] h-[280px] max-w-[220px] md:h-[360px] md:max-w-[270px] transform transition-transform hover:scale-[1.02]">
                    {/* Side buttons */}
                    <div class="h-[14px] w-[2px] bg-gray-800  absolute -start-[6px] top-[28px] rounded-s-lg"></div>
                    <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[64px] rounded-s-lg"></div>
                    <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[100px] rounded-s-lg"></div>
                    <div class="h-[24px] w-[2px] bg-gray-800  absolute -end-[6px] top-[84px] rounded-e-lg"></div>

                    {/* Screen area */}
                    <div class="rounded-[1rem] overflow-hidden h-[270px] md:h-[350px] bg-whit">
                      {/* <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
                                        class="dark:hidden h-full w-full object-cover"
                                        alt="dramatic sky tutorial" /> */}
                      <img
                        src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        class="hidden dark:block h-full w-full object-cover "
                        alt="dramatic sky tutorial dark"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-between items-center mt-6 px-5">
                  <div class="flex flex-col gap-1 ">
                    <h2 class="text-xl font-extrabold font-Montserrat text-black">
                      Converse Sneakers
                    </h2>
                    <span class="font-semibold font-VarelaRound text-md ">
                      High Top (Lemon Yellow)
                    </span>
                  </div>
                  <div className="h-10 w-10 flex flex-col justify-center items-center  mt-5 mr-5 gap-4">
                    <img src="./youtube-logo.png" alt="" />
                    <p className="font-bold font-Montserrat text-sm text-center">
                      FREE <br />
                      TUTORIAL
                    </p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article class="max-w-xl w-full h-[70vh] bg-white rounded-xl shadow-lg overflow-hidden ">
                <div className="bg-amber-400 rounded-xl p-6">
                  {/* Adjusted tablet size */}
                  <div class="relative mx-auto shadow-xl border-gray-800 dark:border-gray-800 bg-gray-800 border-[5px] rounded-[1.25rem] h-[280px] max-w-[220px] md:h-[360px] md:max-w-[270px] transform transition-transform hover:scale-[1.02]">
                    {/* Side buttons */}
                    <div class="h-[14px] w-[2px] bg-gray-800  absolute -start-[6px] top-[28px] rounded-s-lg"></div>
                    <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[64px] rounded-s-lg"></div>
                    <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[100px] rounded-s-lg"></div>
                    <div class="h-[24px] w-[2px] bg-gray-800  absolute -end-[6px] top-[84px] rounded-e-lg"></div>

                    {/* Screen area */}
                    <div class="rounded-[1rem] overflow-hidden h-[270px] md:h-[350px] bg-whit">
                      {/* <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
                                        class="dark:hidden h-full w-full object-cover"
                                        alt="dramatic sky tutorial" /> */}
                      <img
                        src="https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        class="hidden dark:block h-full w-full object-cover "
                        alt="dramatic sky tutorial dark"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-between items-center mt-6 px-5">
                  <div class="flex flex-col gap-1 ">
                    <h2 class="text-xl font-extrabold font-Montserrat text-black">
                      Converse Sneakers
                    </h2>
                    <span class="font-semibold font-VarelaRound text-md ">
                      High Top (Lemon Yellow)
                    </span>
                  </div>
                  <div className="h-10 w-10 flex flex-col justify-center items-center  mt-5 mr-5 gap-4">
                    <img src="./patreon.png" alt="" />
                    <p className="font-bold font-Montserrat text-sm">
                      PATREON <br />
                      TUTORIAL
                    </p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article class="max-w-xl w-full h-[70vh] bg-white rounded-xl shadow-lg overflow-hidden ">
                <div className="bg-rose-300 rounded-xl p-6">
                  {/* Adjusted tablet size */}
                  <div class="relative mx-auto shadow-xl border-gray-800 dark:border-gray-800 bg-gray-800 border-[5px] rounded-[1.25rem] h-[280px] max-w-[220px] md:h-[360px] md:max-w-[270px] transform transition-transform hover:scale-[1.02]">
                    {/* Side buttons */}
                    <div class="h-[14px] w-[2px] bg-gray-800  absolute -start-[6px] top-[28px] rounded-s-lg"></div>
                    <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[64px] rounded-s-lg"></div>
                    <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[100px] rounded-s-lg"></div>
                    <div class="h-[24px] w-[2px] bg-gray-800  absolute -end-[6px] top-[84px] rounded-e-lg"></div>

                    {/* Screen area */}
                    <div class="rounded-[1rem] overflow-hidden h-[270px] md:h-[350px] bg-whit">
                      {/* <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
                                        class="dark:hidden h-full w-full object-cover"
                                        alt="dramatic sky tutorial" /> */}
                      <img
                        src="https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        class="hidden dark:block h-full w-full object-cover "
                        alt="dramatic sky tutorial dark"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-between items-center mt-6 px-5">
                  <div class="flex flex-col gap-1 ">
                    <h2 class="text-xl font-extrabold font-Montserrat text-black">
                      Converse Sneakers
                    </h2>
                    <span class="font-semibold font-VarelaRound text-md ">
                      High Top (Lemon Yellow)
                    </span>
                  </div>
                  <div className="h-10 w-10 flex flex-col justify-center items-center  mt-5 mr-5 gap-4">
                    <img src="./youtube-logo.png" alt="" />
                    <p className="font-bold font-Montserrat text-sm text-center">
                      FREE
                      <br />
                      TUTORIAL
                    </p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article class="max-w-xl w-full h-[70vh] bg-white rounded-xl shadow-lg overflow-hidden ">
                <div className="bg-amber-500 rounded-xl p-6">
                  {/* Adjusted tablet size */}
                  <div class="relative mx-auto shadow-xl border-gray-800 dark:border-gray-800 bg-gray-800 border-[5px] rounded-[1.25rem] h-[280px] max-w-[220px] md:h-[360px] md:max-w-[270px] transform transition-transform hover:scale-[1.02]">
                    {/* Side buttons */}
                    <div class="h-[14px] w-[2px] bg-gray-800  absolute -start-[6px] top-[28px] rounded-s-lg"></div>
                    <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[64px] rounded-s-lg"></div>
                    <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[100px] rounded-s-lg"></div>
                    <div class="h-[24px] w-[2px] bg-gray-800  absolute -end-[6px] top-[84px] rounded-e-lg"></div>

                    {/* Screen area */}
                    <div class="rounded-[1rem] overflow-hidden h-[270px] md:h-[350px] bg-whit">
                      {/* <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
                                        class="dark:hidden h-full w-full object-cover"
                                        alt="dramatic sky tutorial" /> */}
                      <img
                        src="https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        class="hidden dark:block h-full w-full object-cover "
                        alt="dramatic sky tutorial dark"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-between items-center mt-6 px-5">
                  <div class="flex flex-col gap-1 ">
                    <h2 class="text-xl font-extrabold font-Montserrat text-black">
                      Converse Sneakers
                    </h2>
                    <span class="font-semibold font-VarelaRound text-md ">
                      High Top (Lemon Yellow)
                    </span>
                  </div>
                  <div className="h-10 w-10 flex flex-col justify-center items-center  mt-5 mr-5 gap-4">
                    <img src="./patreon.png" alt="" />
                    <p className="font-bold font-Montserrat text-sm">
                      PATREON <br />
                      TUTORIAL
                    </p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default MoreTutorials;
