"use client"
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination } from 'swiper/modules';

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
	return (
		<>
		

			<section className="space-y-0 px-5 text-center  py-3">
				<h2 className="text-6xl font-Oswald font-bold text-white">Latest Tutorials</h2>
				<Tabs defaultValue="all" className='text-left  '>
					<TabsList className='h-16  font-Oswald font-bold  mx-8'>
						<TabsTrigger className='text-xl' value="all">All</TabsTrigger>
						<TabsTrigger className='text-xl' value="blender">Blender</TabsTrigger>
						<TabsTrigger className='text-xl' value="unreal">Unreal</TabsTrigger>
						<TabsTrigger className='text-xl' value="houdini">Houdini</TabsTrigger>
						<TabsTrigger className='text-xl' value="substance">Substance</TabsTrigger>
					</TabsList>
					<TabsContent value="all" className="mt-6">
					<div className="pl-8">
							<Swiper navigation={true} modules={[Navigation,Pagination]} className="mySwiper"  spaceBetween={30}  pagination={{clickable: true,bulletClass: 'swiper-pagination-bullet !w-3 !h-3 !bg-gray-400 !opacity-100',bulletActiveClass: 'swiper-pagination-bullet-active !bg-teal-400'}}
							
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
									
									<SwiperSlide key={index} className='py-14'>
										<Link href="/youTube/video-home" key={index}>
										<div  class="max-w-xs w-full  bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
											<div class="relative">
												<img
													src="https://placehold.co/400x300"
													alt="Product"
													class="w-full h-52 object-cover"
												/>

											</div>

											<div class="p-5 space-y-4">


												<div class="flex justify-between items-center">
													<div>
														<h3 class="text-xl font-bold text-gray-900">{card.title}</h3>
														<p class="text-gray-500 mt-1">Premium cotton blend</p>
													</div>

													<div className='h-6 w-6 flex flex-col justify-center items-center  mt-2 mr-5 gap-2'>
														<img src="./youtube-logo.png" alt="" />
														<p className='font-semibold font-Montserrat text-xs text-center'>FREE <br />TUTORIAL</p>

													</div>
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

			<section className="h-[10px]"></section>

		</>
	)
}

export default MiniProductsSection