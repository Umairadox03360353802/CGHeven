'use client'
import React from 'react'
import { IoSearch } from "react-icons/io5";

// from vercel 
import { Search, Play, Download, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function HeroSection() {
  return (
    <>


      <div className="relative  pt-0 pb-3  xl:pt-0 sm:pb-16 lg:pb-3 xl:pb-3   ">

        <header className="absolute inset-x-0 top-0 z-30 py-2  xl:py-4">

          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">

            <div className="flex items-center font-Oswald  justify-between">
              <div className="flex flex-shrink-0">
                <a href="#" title="BakerStreet" className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-secondary focus:ring-primary">
                  <h1 className='text-5xl  text-white font-bold'>CGHeven</h1>                </a>
              </div>

              <div className="md:hidden">
                <h1 className='text-5xl f'>CGHeven</h1>
              </div>

              <div className="hidden md:flex font-Oswald md:items-center md:space-x-10 lg:ml-28">
                <a href="#" title="" className=" text-lg font-semibold transition-all duration-200 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"> Assets </a>

                <a href="#" title="" className=" text-lg font-semibold transition-all duration-200 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"> Gallery </a>

                <a href="#" title="" className=" text-lg font-semibold transition-all duration-200 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"> Support Us </a>
                <a href="#" title="" className=" text-lg font-semibold transition-all duration-200 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"> About</a>



              </div>
            </div>
          </div>
        </header>
        {/* hero section */}
        <section className="relative h-screen flex items-center font-Oswald  justify-center bg-transparent">
          <div className="absolute inset-0 overflow-hidden">
            <img className="object-cover w-full h-full  " src="/p1.png" alt="" />
            {/* <div className="absolute inset-0 bg-transparent bg-opacity-90 backdrop-blur-sm"></div> */}
          </div>
          <div className="relative z-10 text-center space-y-8 max-w-5xl mx-auto rounded-2xl shadow-2xl py-7 px-36 backdrop-blur-md bg-white/5
                          bg-clip-padding">
            <h1 className="text-5xl font-Oswald font-bold text-teal-400">CGHeven</h1>
            <p className="text-2xl  text-gray-300">Your Gateway to Free 3D & VFX Assets</p>
            <div className="flex items-center max-w-2xl mx-auto">
              <Input
                type="search"
                placeholder="Find Free 3D & VFX Assets"
                className="flex-grow py-6 bg-gray-800 border-teal-500 text-white placeholder-gray-400"
              />
              <Button className="ml-2 bg-teal-500 hover:bg-teal-600 text-white">
                <Search className="w-5 h-5" />
              </Button>
            </div>
           
           
            <div
              className="flex justify-center space-x-4"

            >
              <Button className="bg-teal-500 hover:bg-teal-600">Browse Free Assets</Button>
              <Button className="bg-orange-500 hover:bg-orange-600">Watch Tutorials</Button>
              <Button className="bg-purple-500 hover:bg-purple-600">Support Us on Patreon</Button>
            </div>
          </div>
        </section>

        {/* <div className="absolute z-30 mt-40 bg-gradient-to-t from-slate-950 via-slate-950 to-transparent h-[15vh] lg:h-[12vh] w-full blur-md" ></div> */}

      </div>




    </>
  )
}

export default HeroSection