import React from 'react'
import VideoTutorials from './video-tutorials/page'


function VideoHome() {
  return (
    <div >

      <nav class="bg-[#88e5e9]  py-2.5 ">
        <div class="flex flex-wrap items-center justify-between max-w-screen-2xl  mx-auto">
          <a href="#" class="flex items-center  ">
            <img src="./logo.png" class="h-20  mr-1 sm:h-24" alt="Landwind Logo" />
            <span class="self-center text-3xl font-Montserrat font-extrabold whitespace-nowrap text-[#003d42]">CGHEVEN</span>
          </a>
          <div class="flex items-center lg:order-2">
            <div class="hidden mt-2 mr-4 sm:inline-block">
              <span></span>
            </div>

            <a href="https://themesberg.com/product/tailwind-css/landing-page"
              class="text-black bg-[#ccfb8c] hover:bg-amber-200 focus:ring-4 focus:ring-purple-300 font-bold rounded-full text-3xl px-6 lg:px-8 py-3 lg:py-5 sm:mr-2 lg:mr-0">Become A Patron</a>
            <button data-collapse-toggle="mobile-menu-2" type="button"
              class="inline-flex items-center p-2 ml-1 text-md text-black rounded-lg lg:hidden hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:focus:ring-gray-600"
              ariaControls="mobile-menu-2" ariaExpanded="true">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
              </svg>
              <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 text-xl font-bold lg:flex-row lg:space-x-20 lg:mt-0">
              <li>
                <a href="#"
                  class="block py-2 pl-3 pr-4  bg-white rounded lg:bg-transparent lg:text-[#003d42] lg:p-0 text-[#003d42] lg:hover:text-white hover:text-white"
                  ariaCurrent="page">Home</a>
              </li>
              <li>
                <a href="#"
                  class="block py-2 pl-3 pr-4 text-[#003d42] border-b border-gray-100   lg:border-0  lg:p-0  lg:hover:text-white   font-VarelaRound">Company</a>
              </li>
              <li>
                <a href="#"
                  class="block py-2 pl-3 pr-4 text-[#003d42] border-b border-gray-100   lg:border-0  lg:p-0  lg:hover:text-white   font-VarelaRound">Marketplace</a>
              </li>
              <li>
                <a href="#"
                  class="block py-2 pl-3 pr-4 text-[#003d42] border-b border-gray-100   lg:border-0  lg:p-0  lg:hover:text-white   font-VarelaRound">Features</a>
              </li>
              <li>
                <a href="#"
                  class="block py-2 pl-3 pr-4 text-[#003d42] border-b border-gray-100   lg:border-0  lg:p-0  lg:hover:text-white   font-VarelaRound">Team</a>
              </li>
              <li>
                <a href="#"
                  class="block py-2 pl-3 pr-4 text-[#003d42] border-b border-gray-100   lg:border-0  lg:p-0  lg:hover:text-white   font-VarelaRound">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* banner */}
      <section class="bg-[#88e5e9]  py-16 md:py-32 h-screen">
        <div class="container mx-auto px-4 md:px-8 text-center mt-8">
          <h1 class="text-[#4e907c] font-extrabold font-Montserrat text-6xl md:text-8xl leading-tight mb-6">Welcome to our <br />Colorful World</h1>
          <p class="text-[#4e907c] text-xl font-VarelaRound md:text-3xl mb-12">Experience the magic of colors with our unique products and
            services.</p>

        </div>
      </section>
      <VideoTutorials />
      {/* unlock procreate treasure chest */}
      <section class="py-24 mt-16 relative">
        <div class="w-full  grid grid-cols-1 md:grid-cols-2 gap-5  md:px-32 lg:px-15 mx-auto">
          <div className='lg:mx-0 md:mx-auto h-[75vh] md:w-[75vh] w-full p-10 flex flex-col justify-center items-start gap-6 rounded-2xl bg-[#88e5e9]'>
            <h1 class="text-[#003d42] font-extrabold font-Montserrat text-3xl md:text-5xl leading-tight mb-6">UNLOCK THE <br /> PROCREATE® <br /> TREASURE CHEST</h1>
            <p class="text-[#003d42] text-lg font-VarelaRound md:text-xl mb-4">Sign up for my weekly updates and gain access to a chest full of freebies, this includes a whole bunch of Procreate® brushes,
               inspiring color palettes and my ebook about color theory! And yes, it’s completely FREE!</p> 
               <a href="https://themesberg.com/product/tailwind-css/landing-page"
              class="text-black bg-[#ccfb8c] hover:bg-amber-200 focus:ring-4 focus:ring-purple-300 font-semibold font-Montserrat rounded-full text-3xl px-6 lg:px-8 py-3 lg:py-5 sm:mr-2 lg:mr-0">YES! I NEED THAT!</a>
               </div>
          <img class="lg:mx-0 mx-auto h-full w-full   rounded-3xl object-contain" src="https://artwithflo.com/wp-content/uploads/2023/10/homepage-treasure-chest-removebg.png" alt="about Us image" />
           

        </div>
      </section>

    </div>
  )
}

export default VideoHome