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
    <section className="py-18 relative">
        <div className='bg-[#0a1022]  flex flex-col justify-between items-center  rounded-2xl mx-20 px-10 py-6  border border-gray-800'>
          <div className='px-10 py-5   flex flex-col justify-center items-center  rounded-3xl'>
            <h1 className='text-white text-6xl font-extrabold p-5 mb-4 font-Oswald'>Join the Community</h1>
            <p className='text-slate-400 text-lg px-20 max-w-xl text-center pt-3 font-VarelaRound'>Thanks to your donations, we can work sustainably on growing our library of assets and improving our standard of quality.</p>
          </div>
          <div className="relative w-100 py-6 flex flex-row justify-start items-center gap-5  text-start text-white">


           <div>
           <BsDiscord size={46}/>
           </div>
           <div>
           <SiPatreon size={46}/>
           </div>
           <div>
           <IoLogoPinterest size={46} />
           </div>
           <div>
           <IoLogoLinkedin size={46}/>
           </div>
           <div>
           <FaFacebook size={46}/>
           </div>
           <div>
           <FaXTwitter size={46}/>
           </div>
           <div>
           <FaInstagram size={46}/>
           </div>
           <div>
           <IoLogoYoutube size={46}/>
           </div>


          </div>

        </div>
      </section>
    </>
  )
}

export default JoinCommunity