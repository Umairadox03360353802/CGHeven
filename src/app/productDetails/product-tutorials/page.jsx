'use client'
import React from 'react'
import { useEffect, useState } from 'react';
import { Play, Lock } from "lucide-react"
import { FaPlayCircle } from "react-icons/fa";

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
			<div className="mx-auto px-4 sm:px-5 py-4 sm:py-5">
  <div className='text-white'>
    <h1 className='font-extrabold font-Oswald text-2xl sm:text-3xl md:text-4xl text-center mb-4 sm:mb-5 md:mb-6 mt-2 sm:mt-3 md:mt-4'>
      Tutorials
    </h1>
  </div>

  <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
    {cards.map((card, index) => (
      <div key={index} className='w-full'>
        <div className="bg-gray-800 rounded-lg w-full p-3 sm:p-4 text-white shadow-lg hover:shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-1">
          <div className="aspect-video bg-gray-700 rounded-lg mb-3 sm:mb-4 relative overflow-hidden">
            {index % 2 === 0 &&
              <Lock className="absolute top-2 right-2 w-4 h-4 sm:w-5 sm:h-5" />
            }
            {isClient &&
              <ReactPlayer
                url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                width='100%'
                height='100%'
                controls
                className="react-player"
                light={true} // Add light mode for better mobile performance
                playIcon={<FaPlayCircle className="w-12 h-12 text-white opacity-80" />}
              />
            }
          </div>
          <h3 className="font-bold text-base sm:text-lg md:text-xl mb-1 sm:mb-2 line-clamp-2">
            Tutorial Title
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-2 sm:mb-3 line-clamp-2">
            Short description that might be longer on desktop but gets clipped on mobile...
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xs sm:text-sm bg-gray-700 px-2 py-1 rounded">
              10:30
            </span>
            <div className='flex items-center gap-1 sm:gap-2'>
              <img
                src="./youtube-logo.png"
                alt="YouTube"
                className="h-4 sm:h-5 w-auto"
              />
              <p className='font-semibold font-Montserrat text-[9px] xs:text-[10px] sm:text-xs'>
                FREE TUTORIAL
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