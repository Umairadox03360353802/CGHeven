'use client'
import React from 'react'
import { useEffect, useState } from "react"
import Link from "next/link"
// import { IoSearch } from "react-icons/io5";
// from vercel 
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

// Define our image collection with attribution data
const imageCollection = [
  {
    url: "/p1.png",
    artist: "Alex Johnson",
    artistUrl: "https://example.com/alex",
  },
  {
    url: "https://wallpapers.com/images/hd/crysis-2-best-3d-gaming-ex4zj65ae0x1sow3.jpg",
    artist: "Maria Garcia",
    artistUrl: "https://example.com/maria",
  },
  {
    url: "https://static.vecteezy.com/system/resources/previews/042/195/247/non_2x/ai-generated-racing-game-background-free-photo.jpg",
    artist: "David Chen",
    artistUrl: "https://example.com/david",
  },
  {
    url: "https://wallpapercave.com/wp/wp5116556.jpg",
    artist: "Sarah Williams",
    artistUrl: "https://example.com/sarah",
  },
]

function HeroSection() {

  const [currentImage, setCurrentImage] = useState(imageCollection[0])

  useEffect(() => {
    // Select a random image on component mount (page load/refresh)
    const randomIndex = Math.floor(Math.random() * imageCollection.length)
    setCurrentImage(imageCollection[randomIndex])
  }, [])


  return (
    <>


      <div className="relative  pt-0 pb-3  xl:pt-0 sm:pb-16 lg:pb-3 xl:pb-3   ">


        {/* hero section */}
        <section className="relative h-screen flex items-center font-Oswald  justify-center bg-transparent">
          <div className="absolute inset-0 overflow-hidden">
            <img className="object-cover w-full h-full  " src={currentImage.url} alt="" />
            {/* <div className="absolute inset-0 bg-transparent bg-opacity-90 backdrop-blur-sm"></div> */}
          </div>
          {/* global seach section */}
          <div className="relative z-10 text-center space-y-2 max-w-5xl mx-auto rounded-2xl shadow-2xl py-4 px-7 backdrop-blur-md bg-white/5
                          bg-clip-padding">
            <h1 className="text-5xl font-Oswald font-bold text-teal-400">CGHEVEN</h1>
            <p className="text-2xl font-bold font-Alumni text-gray-300">Your Gateway to Free 3D & VFX Assets</p>
            <div className="flex items-center py-2 max-w-2xl mx-auto">
              <input
                type="search"
                border-none
                placeholder="Find Free 3D & VFX Assets"
                className="flex-grow py-2  px-2  focus:outline-none   bg-gray-800 rounded-r-none rounded-l-lg border border-teal-500 text-white placeholder-gray-400"
              />
              <Button className="mr-0 w-20 h-11 rounded-l-none bg-teal-500 hover:bg-teal-600 text-white">
                <Search className="w-7 h-7" />
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


          {/* Attribution in bottom left */}
          <div className="absolute bottom-4 left-4 z-10">
            <p className="text-white text-sm md:text-base font-medium">
              Art by{" "}
              <Link
                href={currentImage.artistUrl}
                className="underline hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {currentImage.artist}
              </Link>
            </p>
          </div>
        </section>

        {/* <div className="absolute z-30 mt-40 bg-gradient-to-t from-slate-950 via-slate-950 to-transparent h-[15vh] lg:h-[12vh] w-full blur-md" ></div> */}

      </div>




    </>
  )
}

export default HeroSection