import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
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
			{/* <section className="bg-slate-950 mt-10">
				<div className='bg-[#0a1022] drop-shadow-2xl  rounded-2xl mx-32 py-4  border border-gray-800'>


					<div className="py-34 px-0 mx-auto max-w-screen-xl sm:py-4 lg:px-4 ml-16">
						<div className=" grid grid-cols-4 sm:grid-cols-2 md:grid-cols-6 gap-4  h-full">


							<div className=" col-span-3 sm:col-span-1 md:col-span-3 shadow-[0px_0px_69px_8px_rgba(204,128,150,0.3)] rounded-2xl h-auto md:h-full flex flex-col ">
								<a href="" className="group relative flex flex-col overflow-hidden rounded-2xl px-4 pb-4 pt-40 flex-grow">
									<img src="https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=2048,f=jpeg,q=85/posts/images/633490247455356525/213f2944-6f19-463c-ae94-3a08438390a4.jpg" alt="" className="absolute inset-0 top-1 rounded-2xl z-10 h-[49vh] w-full px-2 py-1 object-cover " />
									<div className="absolute z-20 inset-2 bg-gradient-to-r from-slate-950 via-slate-950 to-transparent p-36  rounded-2xl "></div>
									<div className='z-30 absolute top-0 flex flex-col p-10 justify-start w-[80vh] h-[10vh]  '>

										<h3 className=" text-5xl  text-white font-extrabold font-Montserrat  xs:text-xl md:text-5<h1 className='text-5xl font-Montserrat'>CGHeven</h1>xl">Lorem ipsum </h3><br />
										<h3 className=" text-5xl mb-8 text-white font-extrabold font-Montserrat  xs:text-xl md:text-5xl"> dollor? </h3>
										<p className='text-slate-400 pr-32 font-VarelaRound'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est voluptas esse placeat optio magnam ea culpa fuga </p>
										<div className="relative w-80 py-6 flex flex-row justify-start items-center gap-4 right-0 text-start ">


											<button className="sm:w-fit w-full px-3 py-2 bg-slate-900 border border-[#40E0D0] hover:bg-[#40E0D0] transition-all duration-700 ease-in-out rounded-3xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
												<span className="px-1 mx-6 text-white font-Montserrat text-sm font-medium leading-6"> Started</span>
											</button>
											<button className="sm:w-fit w-full px-12 py-2 bg-[#40E0D0] hover:bg-[#40E0D0] transition-all duration-700 ease-in-out rounded-3xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
												<span className="px-1 text-white font-Montserrat text-sm font-medium leading-6"> Start</span>
											</button>


										</div>
									</div>
									<div className='absolute shadow-[0px_0px_11px_0px_rgba(239,236,235,1)] -inset-1 backdrop-blur-[var(--glass-blur)] backdrop-saturate-[var(--glass-saturation)] border border-white/[var(--glass-border-opacity)] rounded-lg  shadow-black/10 bg-[linear-gradient(135deg,rgba(221,130,149,0.88)_0%,rgba(251,248,245,0.6424)_51%,rgba(34,41,70,0.15839999999999999)_98%)] [&]:--glass-blur: 19px;--glass-saturation: 150%;--glass-border-opacity: 0.32 '></div>
								</a>
							</div>

							<div className="col-span-2 sm:col-span-1 md:col-span-3 ml-0  ">
								
								<div className="grid gap-4 grid-cols-2 sm:grid-cols-1 lg:grid-cols-2">
									<a href="" className="group relative flex flex-col overflow-hidden rounded-lg border-4 border-gray-700 px-4 pb-4 pt-40 mb-3">
										<img src="https://img.pikbest.com/wp/202345/facets-iridescent-blue-violet-pink-metallic-texture-in-a-3d-abstract-faceted-background-render_9617030.jpg!w700wp" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
										<div className="absolute inset-0 "></div>
										<h3 className="z-10 text-2xl font-Montserrat font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Lorem 3.</h3>
									</a>
									<a href="" className="group relative flex flex-col overflow-hidden rounded-lg border-4 border-gray-700 px-4 pb-4 pt-40 mb-3">
										<img src="https://media.sketchfab.com/models/4b01d679d6ba4668a3e9a6f531a30788/thumbnails/2fc948efbb2d4d3fa03c9c189b47272b/da836c7d3a6f4e45a47a03a7949d3813.jpeg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
										<div className="absolute inset-0 "></div>
										<h3 className="z-10 text-2xl font-Montserrat font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Lorem 4</h3>
									</a>
								</div>
								<div className="grid gap-4 grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 ">
									<a href="" className="group relative flex flex-col overflow-hidden rounded-lg border-4 border-gray-700 px-4 pb-4 pt-40">
										<img src="https://img.pikbest.com/wp/202345/facets-iridescent-blue-violet-pink-metallic-texture-in-a-3d-abstract-faceted-background-render_9617030.jpg!w700wp" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
										<div className="absolute inset-0 "></div>
										<h3 className="z-10 text-2xl font-Montserrat font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Lorem 3.</h3>
									</a>
									<a href="" className="group relative flex flex-col overflow-hidden rounded-lg border-4 border-gray-700 px-4 pb-4 pt-40">
										<img src="https://media.sketchfab.com/models/4b01d679d6ba4668a3e9a6f531a30788/thumbnails/2fc948efbb2d4d3fa03c9c189b47272b/da836c7d3a6f4e45a47a03a7949d3813.jpeg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
										<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
										<h3 className="z-10 text-2xl font-Montserrat font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Lorem 4</h3>
									</a>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</section> */}

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