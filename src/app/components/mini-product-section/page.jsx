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


			<section className="space-y-0 px-5 text-center  py-3">
				<h2 className="text-6xl mb-5 font-Oswald font-bold text-white">Latest Tutorials</h2>
				<Tabs defaultValue="all" className='md:text-left text-center  '>
					<TabsList className='h-12 sm:h-16 font-Oswald font-bold mx-2 sm:mx-4 md:mx-8  overflow-x-auto'>
						<TabsTrigger
							className='text-base sm:text-xl px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap'
							value="all"
						>
							All
						</TabsTrigger>
						<TabsTrigger
							className='text-base sm:text-xl px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap'
							value="blender"
						>
							Blender
						</TabsTrigger>
						<TabsTrigger
							className='text-base sm:text-xl px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap'
							value="unreal"
						>
							Unreal
						</TabsTrigger>
						<TabsTrigger
							className='text-base sm:text-xl px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap'
							value="houdini"
						>
							Houdini
						</TabsTrigger>
						<TabsTrigger
							className='text-base sm:text-xl px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap'
							value="substance"
						>
							Substance
						</TabsTrigger>
					</TabsList>
					<TabsContent value="all" className="mt-6">
						<div className="pl-8">
							<Swiper navigation={true} modules={[Navigation, Pagination]} className="mySwiper" spaceBetween={30}

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
										slidesPerView: 4,
										spaceBetween: 0,
									},
								}}
							>



								{cards.map((card, index) => (

									<SwiperSlide key={index} className='py-14 px-4'>
										<Link href="/youTube/video-home" key={index}>
										<div 
  key={index} 
  className="bg-gray-800 rounded-lg p-3 sm:p-4 text-white shadow-lg hover:shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-1"
>
  <div className="aspect-video bg-gray-700 rounded-lg mb-3 sm:mb-4 mx-auto relative">
    {index % 2 === 0 && <Lock className="absolute top-1 right-1 h-4 w-4 sm:top-2 sm:right-2 sm:h-5 sm:w-5" />}
    {isClient && (
      <ReactPlayer 
        url='https://www.youtube.com/watch?v=LXb3EKWsInQ' 
        width='100%' 
        height='100%' 
        controls 
        className="!h-full !w-full"
      />
    )}
  </div>
  <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Tutorial Title</h3>
  <p className="text-xs sm:text-sm text-gray-400 mb-2">Short description...</p>
  <div className="flex justify-between items-center">
    <span className="text-[10px] sm:text-xs bg-gray-700 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
      10:30
    </span>
    <div className="h-4 w-4 sm:h-5 sm:w-5 flex flex-col justify-center items-center mb-1 sm:mb-3 mr-2 sm:mr-5 gap-1 sm:gap-2">
      <img 
        src="./youtube-logo.png" 
        alt="YouTube" 
        className="w-3 h-3 sm:w-4 sm:h-4"
      />
      <p className="font-semibold font-Montserrat text-[8px] sm:text-xs text-center">
        FREE <br className="hidden sm:block" /> TUTORIAL
      </p>
    </div>
  </div>
</div>




											{/* <div className="aspect-auto  bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
												<div className="relative">
													<img
														src="https://placehold.co/400x300"
														alt="Product"
														className="w-full h-full object-cover"
													/>

												</div>

												<div className="p-5  space-y-4">


													<div className="flex justify-between items-center">
														<div>
															<h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
															<p className="text-gray-500 mt-1">Premium cotton blend</p>
														</div>

														<div className='h-6 w-6 flex flex-col justify-center items-center  mt-2 mr-5 gap-2'>
															<img src="./youtube-logo.png" alt="" />
															<p className='font-semibold font-Montserrat text-xs text-center'>FREE <br />TUTORIAL</p>

														</div>
													</div>


												</div>
											</div> */}

										</Link>
									</SwiperSlide>

								))}
							</Swiper>
						</div>
					</TabsContent>
				</Tabs>
			</section>

			<section className="h-[10px]"></section>

		</>
	)
}

export default MiniProductsSection