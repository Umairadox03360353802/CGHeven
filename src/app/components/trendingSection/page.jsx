"use client"
import React from 'react'
import { useState } from 'react'
import { Lock } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// const Card = ({ title, description }) => {
//   return (
//     <div className=" relative flex  flex-col justify-center overflow-hidden aspect-video  ">
//       <div className="absolute inset-0  "></div>
//       <div className="group relative m-0 flex h-full w-full rounded-xl mx-0  ring-gray-800/5 sm:mx-auto sm:max-w-xl">
//         <div className="z-10 h-full w-full overflow-hidden rounded-xl border  transition duration-300 ease-in-out group-hover:opacity-100 border-gray-700 opacity-70">
//           <img src="https://images.unsplash.com/photo-1506187334569-7596f62cf93f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3149&q=80" className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
//         </div>
//         <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
//           <h1 className="font-Oswald text-2xl font-bold text-white shadow-xl">{title}</h1>
//           <h1 className="text-sm font-light text-gray-200 shadow-xl">{description}</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

function TrendingSection() {

    const [hoveredAsset, setHoveredAsset] = useState(null)
  
  const assets = [
    { id: 1, name: "Fire VFX", type: "VFX", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/thumbs/brass_goblets.png?width=450&height=300" },
    { id: 2, name: "Sci-Fi Weapon", type: "3D Model", isPremium: true, preview: "https://cdn.polyhaven.com/asset_img/thumbs/spray_paint_bottles.png?width=450&height=300" },
    { id: 3, name: "Smoke Simulation", type: "VDB", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/thumbs/rusty_metal_04.png?width=600&height=284" },
    { id: 4, name: "Magic Particles", type: "Flipbook", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/primary/qwantani_noon.png?height=118" },
    { id: 5, name: "Rusty Metal", type: "Texture", isPremium: true, preview: "https://cdn.polyhaven.com/asset_img/thumbs/aerial_rocks_01.png?width=284&height=284" },
    { id: 6, name: "Explosion Pack", type: "VFX", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/primary/qwantani_noon.png?height=118" },
    { id: 12, name: "Fire VFX", type: "VFX", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/thumbs/horse_head.png?width=450&height=300" },
    { id: 22, name: "Sci-Fi Weapon", type: "3D Model", isPremium: true, preview: "https://cdn.polyhaven.com/asset_img/thumbs/coast_sand_rocks_02.png?width=284&height=284" },
    { id: 25, name: "Rusty Metal", type: "Texture", isPremium: true, preview: "https://cdn.polyhaven.com/asset_img/thumbs/aerial_rocks_01.png?width=284&height=284" },
    { id: 26, name: "Explosion Pack", type: "VFX", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/primary/qwantani_noon.png?height=118" },
    { id: 212, name: "Fire VFX", type: "VFX", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/thumbs/horse_head.png?width=450&height=300" },
    { id: 222, name: "Sci-Fi Weapon", type: "3D Model", isPremium: true, preview: "https://cdn.polyhaven.com/asset_img/thumbs/coast_sand_rocks_02.png?width=284&height=284" },

  ]
  return (
    <>
 <div className="mx-auto px-4 sm:px-6 md:px-8 py-3">
  <div className="text-white">
    <h1 className="font-extrabold font-Oswald text-4xl sm:text-5xl md:text-6xl text-center mb-6 sm:mb-8 mt-0 sm:mt-2">
      Trending Assets
    </h1>
  </div>
  
  <div className="relative">
    <Swiper 
      navigation={true} 
      modules={[Navigation, Pagination]} 
      className="mySwiper" 
      spaceBetween={16}
      slidesPerView={1.2}
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
          spaceBetween: 24,
        },
      }}
    >
      {assets.map((asset, index) => (
        <SwiperSlide key={index} className='py-4 sm:py-8 md:py-12 px-2 sm:px-3'>
          <Link href="/productDetails">
            <div
              className="bg-gray-800 rounded-lg overflow-hidden p-2 sm:p-3 md:p-4 shadow-lg hover:shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
              onMouseEnter={() => setHoveredAsset(asset.id)}
              onMouseLeave={() => setHoveredAsset(null)}
            >
              <div className="relative aspect-video">
                {hoveredAsset === asset.id ? (
                  <AssetPreview asset={asset} />
                ) : (
                  <img 
                    src={asset.preview || "/placeholder.svg"} 
                    alt={asset.name} 
                    className="w-full h-full object-contain bg-gray-700"
                  />
                )}
                {asset.isPremium && (
                  <div className="absolute top-2 right-2 bg-orange-500 text-white p-1 rounded-full">
                    <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                )}
              </div>
              <div className="px-2 py-2 sm:py-3">
                <h3 className="font-semibold text-xs sm:text-sm md:text-base text-white line-clamp-2">
                  {asset.name}
                </h3>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>

    </>
  )
}

function AssetPreview({ asset }) {
  switch (asset.type) {
    case "VFX":
      return <video src="" autoPlay loop muted className="w-full h-full object-contain" />
    case "3D Model":
      return <div className="w-full h-full bg-gray-700 flex items-center justify-center text-teal-500">3D Viewer</div>
    case "Flipbook":
      return (
        <div className="w-full h-full bg-gray-700 flex items-center justify-center text-teal-500">Animated Sprite</div>
      )
    default:
      return <img src={asset.preview || "/placeholder.svg"} alt={asset.name} className="w-full h-full object-contain" />
  }
}
export default TrendingSection