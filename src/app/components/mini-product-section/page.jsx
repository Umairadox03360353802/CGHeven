"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import { Lock } from "lucide-react"
import ReactPlayer from 'react-player'

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import './styles.css';






const assets = [
	{
		id: 1,
		title: "Sci-Fi Spaceship",
		description: "High-poly 3D model",
		format: "FBX, OBJ",
		compatibility: ["Blender", "Unreal"],
		isPremium: false,
	},
	{
		id: 2,
		title: "Explosion1 VFX",
		description: "Realistic particle effect",
		format: "VDB",
		compatibility: ["Houdini", "Blender"],
		isPremium: true,
	},
	{
		id: 3,
		title: "Explosion2 VFX",
		description: "Realistic particle effect",
		format: "VDB",
		compatibility: ["Houdini", "Blender"],
		isPremium: true,
	},
	{
		id: 4,
		title: "Explosion VFX",
		description: "Realistic particle effect",
		format: "VDB",
		compatibility: ["Houdini", "Blender"],
		isPremium: true,
	},
	// Add more sample assets here
]

const cards = [
	{ title: "10 EASY", subtitle: "DRAWINGS", logo: "https://www.youtube.com/yt/about/static/images/favicon.ico" },
	{ title: "20 DOODLES", subtitle: "FOR PATRONS", logo: "https://www.patreon.com/favicon.ico" },
	{ title: "PREMIUM", subtitle: "TUTORIAL", logo: "https://www.youtube.com/yt/about/static/images/favicon.ico" },
	{ title: "PREMIUM", subtitle: "TUTORIAL", logo: "https://www.patreon.com/favicon.ico" },
	{ title: "10 EASY", subtitle: "DRAWINGS", logo: "https://www.youtube.com/yt/about/static/images/favicon.ico" },
	{ title: "20 DOODLES", subtitle: "FOR PATRONS", logo: "https://www.patreon.com/favicon.ico" },
	{ title: "PREMIUM", subtitle: "TUTORIAL", logo: "https://www.youtube.com/yt/about/static/images/favicon.ico" },
	{ title: "PREMIUM", subtitle: "TUTORIAL", logo: "https://www.patreon.com/favicon.ico" }

];




function MiniProductsSection() {

	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);
	return (
		<>


<section className="px-4 sm:px-5 py-3 text-center">
  <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-5 font-Oswald font-bold text-white">
    Latest Tutorials
  </h2>
  
  <Tabs defaultValue="all" className="w-full">
    <div className="overflow-x-auto">
      <TabsList className="h-12 sm:h-16 font-Oswald font-bold mx-auto max-w-full flex-nowrap">
        <TabsTrigger
          className="text-sm sm:text-base md:text-xl px-3 sm:px-4 py-1 sm:py-2 whitespace-nowrap"
          value="all"
        >
          All
        </TabsTrigger>
        <TabsTrigger
          className="text-sm sm:text-base md:text-xl px-3 sm:px-4 py-1 sm:py-2 whitespace-nowrap"
          value="blender"
        >
          Blender
        </TabsTrigger>
        <TabsTrigger
          className="text-sm sm:text-base md:text-xl px-3 sm:px-4 py-1 sm:py-2 whitespace-nowrap"
          value="unreal"
        >
          Unreal
        </TabsTrigger>
        <TabsTrigger
          className="text-sm sm:text-base md:text-xl px-3 sm:px-4 py-1 sm:py-2 whitespace-nowrap"
          value="houdini"
        >
          Houdini
        </TabsTrigger>
        <TabsTrigger
          className="text-sm sm:text-base md:text-xl px-3 sm:px-4 py-1 sm:py-2 whitespace-nowrap"
          value="substance"
        >
          Substance
        </TabsTrigger>
      </TabsList>
    </div>
    
    <TabsContent value="all" className="mt-4 sm:mt-6">
      <div className="px-2 sm:pl-8">
        <Swiper 
          navigation={true} 
          modules={[Navigation, Pagination]} 
          className="mySwiper" 
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} className='py-8 sm:py-14 px-2 sm:px-4'>
              <Link href="/youTube/video-home">
                <div className="bg-gray-800 rounded-lg p-3 text-white shadow-lg hover:shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="aspect-video bg-gray-700 rounded-lg mb-3 relative">
                    {index % 2 === 0 && (
                      <Lock className="absolute top-2 right-2 w-4 h-4 md:w-5 md:h-5" />
                    )}
                    {isClient && (
                      <ReactPlayer
                        url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                        width='100%'
                        height='100%'
                        controls
                        className="react-player"
                      />
                    )}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg md:text-xl mb-1 sm:mb-2 line-clamp-2">
                    Tutorial Title
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-2 line-clamp-2">
                    Short description...
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm bg-gray-700 px-2 py-1 rounded">
                      10:30
                    </span>
                    <div className='h-5 w-5 sm:h-6 sm:w-6 flex flex-col justify-center items-center gap-1 m-3'>
                      <img
                        src="./youtube-logo.png"
                        alt="YouTube"
                        className="w-full h-auto"
                      />
                      <p className='font-semibold font-Montserrat text-[8px] sm:text-[10px] md:text-xs text-center '>
                        FREE <br />TUTORIAL
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </TabsContent>
  </Tabs>
</section>

			<section className="h-[2px]"></section>

		</>
	)
}

export default MiniProductsSection