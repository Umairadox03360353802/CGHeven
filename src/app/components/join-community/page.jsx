import React from 'react'
import { BsDiscord } from "react-icons/bs";
import { SiPatreon } from "react-icons/si";
import { IoLogoPinterest } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";








function JoinCommunity() {
  return (
    <>
    <section className="py-10 sm:py-18 relative">
  <div className='bg-[#0a1022] flex flex-col justify-between items-center rounded-xl md:rounded-2xl mx-4 sm:mx-10 md:mx-20 px-4 sm:px-6 md:px-10 py-6 border border-gray-800'>
    <div className='px-4 sm:px-6 md:px-10 py-5 flex flex-col justify-center items-center rounded-2xl md:rounded-3xl'>
      <h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold p-3 sm:p-5 mb-2 sm:mb-4 font-Oswald text-center'>
        Join the Community
      </h1>
      <p className='text-slate-400 px-2 sm:px-6 md:px-20 max-w-xs sm:max-w-md md:max-w-xl text-center pt-2 sm:pt-3 font-Alumni font-extrabold text-lg sm:text-xl'>
        Thanks to your donations, we can work sustainably on growing our library of assets and improving our standard of quality.
      </p>
    </div>
    
    <div className="relative w-full py-4 sm:py-6 flex flex-wrap justify-center items-center gap-3 sm:gap-5 text-white">
      <div className="p-2 sm:p-0">
        <BsDiscord size={28} className="sm:w-9 sm:h-9 md:w-11 md:h-11" />
      </div>
      <div className="p-2 sm:p-0">
        <SiPatreon size={28} className="sm:w-9 sm:h-9 md:w-11 md:h-11" />
      </div>
      <div className="p-2 sm:p-0">
        <IoLogoPinterest size={28} className="sm:w-9 sm:h-9 md:w-11 md:h-11" />
      </div>
      <div className="p-2 sm:p-0">
        <IoLogoLinkedin size={28} className="sm:w-9 sm:h-9 md:w-11 md:h-11" />
      </div>
      <div className="p-2 sm:p-0">
        <FaFacebook size={28} className="sm:w-9 sm:h-9 md:w-11 md:h-11" />
      </div>
      <div className="p-2 sm:p-0">
        <FaXTwitter size={28} className="sm:w-9 sm:h-9 md:w-11 md:h-11" />
      </div>
      <div className="p-2 sm:p-0">
        <FaInstagram size={28} className="sm:w-9 sm:h-9 md:w-11 md:h-11" />
      </div>
      <div className="p-2 sm:p-0">
        <IoLogoYoutube size={28} className="sm:w-9 sm:h-9 md:w-11 md:h-11" />
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default JoinCommunity