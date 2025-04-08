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


      <div className="relative pt-0 pb-3 xl:pt-0 sm:pb-16 lg:pb-3 xl:pb-3">

        {/* Hero section */}
        <section className="relative h-screen flex items-center font-Oswald justify-center bg-transparent">
          <div className="absolute inset-0 overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src={currentImage.url}
              alt="Background"
            />
          </div>

          {/* Global search section */}
          <div className="relative z-10 text-center space-y-2 max-w-5xl mx-auto rounded-2xl shadow-2xl py-4 px-4 sm:px-7 backdrop-blur-md bg-white/5 bg-clip-padding
                    w-11/12 sm:w-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-Oswald font-bold text-teal-400">CGHEVEN</h1>
            <p className="text-xl sm:text-2xl font-bold font-Alumni text-gray-300">Your Gateway to Free 3D & VFX Assets</p>

            <div className="flex items-center py-2 max-w-2xl mx-auto w-full relative">
              <input
                type="search"
                placeholder="Find Free 3D & VFX Assets"
                className="flex-grow py-3 relative  px-2 focus:outline-none bg-gray-800  rounded-lg border border-teal-500 text-white placeholder-gray-400
                     text-sm sm:text-base"
              />
              <Button className="mr-0 w-14 absolute right-0 sm:w-20 h-11 sm:h-12 rounded-l-none bg-teal-500 hover:bg-teal-600 text-white">
                <Search className="w-5 h-10 md:w-7 md:h-7" />
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 px-0">
              <Button className="bg-teal-500 hover:bg-teal-600 text-sm sm:text-base">
                Browse Free Assets
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-sm sm:text-base">
                Watch Tutorials
              </Button>
              <Button className="bg-purple-500 hover:bg-purple-600 text-sm sm:text-base">
                Support Us on Patreon
              </Button>
            </div>
          </div>

          {/* Attribution in bottom left */}
          <div className="absolute bottom-4 left-2 sm:left-4 z-10">
            <p className="text-white text-xs sm:text-sm md:text-base font-medium">
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
      </div>




    </>
  )
}

export default HeroSection