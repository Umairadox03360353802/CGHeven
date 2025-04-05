'use client'
import React from 'react'
import { useEffect, useState } from 'react';
import { Play, Lock } from "lucide-react"
import ReactPlayer from 'react-player'


const cards = [
	{ title: "10 EASY", subtitle: "DRAWINGS", logo: "https://www.youtube.com/yt/about/static/images/favicon.ico" },
	{ title: "20 DOODLES", subtitle: "FOR PATRONS", logo: "https://www.patreon.com/favicon.ico" },
	{ title: "PREMIUM", subtitle: "TUTORIAL", logo: "https://www.youtube.com/yt/about/static/images/favicon.ico" },
	{ title: "PREMIUM", subtitle: "TUTORIAL", logo: "https://www.patreon.com/favicon.ico" },


];


function ProductTutorials() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);
	return (
		<>
			<div className="mx-auto px-4 md:px-5 py-4 md:py-3">
				<div className='text-white'>
					<h1 className='font-extrabold font-Oswald text-3xl md:text-4xl text-center mb-6 md:mb-4 mt-4 md:mt-2'>
						Tutorials
					</h1>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
					{cards.map((card, index) => (
						<div key={index} className='p-0'>
							<div className="bg-gray-800 rounded-lg w-full max-w-96 p-3 md:p-4 text-white shadow-lg hover:shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-1">
								<div className="aspect-video  bg-gray-700 rounded-lg mb-3 md:mb-4 mx-auto relative">
									{index % 2 === 0 &&
										<Lock className="absolute top-2 right-2 w-4 h-4 md:w-5 md:h-5" />
									}
									{isClient &&
										<ReactPlayer
											url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
											width='100%'
											height='100%'
											controls
											className="react-player"
										/>
									}
								</div>
								<h3 className="font-bold text-lg md:text-xl mb-2">Tutorial Title</h3>
								<p className="text-sm md:text-base text-gray-400 mb-2">Short description...</p>
								<div className="flex justify-between items-center">
									<span className="text-xs md:text-sm bg-gray-700 px-2 py-1 rounded">
										10:30
									</span>
									<div className='h-5 w-5 md:h-6 md:w-6 flex flex-col justify-center items-center mb-3 mr-3 md:mr-5 gap-1 md:gap-2'>
										<img
											src="./youtube-logo.png"
											alt="YouTube"
											className="w-full h-auto"
										/>
										<p className='font-semibold font-Montserrat text-[10px] md:text-xs text-center'>
											FREE <br />TUTORIAL
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default ProductTutorials