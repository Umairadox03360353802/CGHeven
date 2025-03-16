import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'


function AboutUs() {
  return (
    <>
      {/* <section className="">
        <div className='bg-[#0a1022] drop-shadow-2xl flex flex-row justify-center items-center rounded-2xl mx-32 py-6  border border-gray-800'>

          <div className="gap-16 items-center justify-center  py-8 px-28 mx-auto max-w-screen-xl lg:flex lg:flex-row lg:py-16 lg:px-6">
            <div className=" text-slate-400 sm:text-lg dark:text-gray-400 w-full">
              <h2 className="mb-6 text-6xl tracking-tight font-extrabold font-Oswald  text-white">About Us</h2>
              <p className="mb-4 font-VarelaRound">CGHeven is a one-person mission to provide free, high-quality CG assets and tutorials to empower creators worldwide. Built with passion and dedication, it’s driven by a love for the CG community and a desire to make professional resources accessible to everyone. By supporting CGHeven, you’re helping to grow a platform that values creativity, learning, and collaboration.</p>
            </div>
            <div className="flex flex-col gap-1 roundded-full  mt-2">
             
               <img src="/main1.png" alt="" />
            </div>
          </div>
        </div>
      </section> */}
       <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/main1.png" alt="Ammar Khan" width={400} height={400} className="rounded-full mx-auto" />
          </div>
          <div className="md:w-1/2 text-center font-Alumni text-white md:text-left">
            <h2 className="text-6xl  font-extrabold font-Oswald mb-6">The Vision Behind CGHEVEN</h2>
            <p className="text-xl font-bold mb-8">
              CGHeven was born from a passion to democratize high-quality VFX and 3D assets. Our mission is to empower
              creators worldwide by providing free, professional-grade resources that fuel imagination and bring ideas
              to life.
            </p>
            <p className="text-2xl font-semibold mb-4">- Ammar Khan</p>
            <Link href="/about-page">
            <Button className="bg-teal-500 font-Oswald hover:bg-teal-600 text-[1.2rem]">Follow My Journey</Button>
            
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs