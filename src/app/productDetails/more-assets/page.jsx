"use client"
import React from 'react'
import { useState } from "react"
import { Lock } from "lucide-react"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const Card = ({ title, description }) => {
//   return (
//     <div className=" relative flex flex-col justify-center items-center overflow-hidden  aspect-auto rounded-xl ">
//       <div className="w-full h-full  hover:bg-gray-700 flex items-center justify-center  hover:text-teal-500">
//       <div className="absolute inset-0  "></div>
//       <div className="group relative m-0 flex  h-full w-full rounded-xl   ring-gray-800/5 sm:mx-auto sm:max-w-xl">
//         <div className="z-10 h-full w-full overflow-hidden rounded-xl  hover:shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-1">
//           <img src="https://cdn.polyhaven.com/asset_img/thumbs/coast_sand_rocks_02.png?width=284&height=284" className='mx-auto' alt="" />
//         </div>
//         <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
//           <h1 className="font-Oswald text-2xl font-bold text-white shadow-xl">{title}</h1>
//           <h1 className="text-sm font-light text-gray-200 shadow-xl">{description}</h1>
//         </div>
//       </div>
//       </div>

//     </div>
//   );
// };

// function AssetPreview({ asset }) {
//   switch (asset.type) {
//     case "VFX":
//       return <video src="" autoPlay loop muted className="w-full h-full object-cover" />
//     case "3D Model":
//       return <div className="w-full h-full bg-gray-700 flex items-center justify-center text-teal-500">3D Viewer</div>
//     case "Flipbook":
//       return (
//         <div className="w-full h-full bg-gray-700 flex items-center justify-center text-teal-500">Animated Sprite</div>
//       )
//     default:
//       return <img src={asset.preview || "/placeholder.svg"} alt={asset.name} className="w-full h-full object-cover" />
//   }
// }
export const assets = [
  { id: 1, name: "Fire VFX", type: "VFX", isPremium: false, preview: "https://img.lovepik.com/bg/20240224/Revolutionary-Ecommerce-3D-Render-of-Computer-Shopping-Bags-and-Delivery_3696975_wh1200.jpg" },
  { id: 2, name: "Sci-Fi Weapon", type: "3D Model", isPremium: true, preview: "https://img.lovepik.com/bg/20240224/Revolutionary-Ecommerce-3D-Render-of-Computer-Shopping-Bags-and-Delivery_3696975_wh1200.jpg" },
  { id: 3, name: "Smoke Simulation", type: "VDB", isPremium: false, preview: "https://img.lovepik.com/bg/20240224/Revolutionary-Ecommerce-3D-Render-of-Computer-Shopping-Bags-and-Delivery_3696975_wh1200.jpg" },
  { id: 4, name: "Magic Particles", type: "Flipbook", isPremium: false, preview: "https://img.lovepik.com/bg/20240224/Revolutionary-Ecommerce-3D-Render-of-Computer-Shopping-Bags-and-Delivery_3696975_wh1200.jpg" },
  { id: 5, name: "Rusty Metal", type: "Texture", isPremium: true, preview: "https://img.lovepik.com/bg/20240224/Revolutionary-Ecommerce-3D-Render-of-Computer-Shopping-Bags-and-Delivery_3696975_wh1200.jpg" },
  { id: 6, name: "Explosion Pack", type: "VFX", isPremium: false, preview: "https://img.lovepik.com/bg/20240224/Revolutionary-Ecommerce-3D-Render-of-Computer-Shopping-Bags-and-Delivery_3696975_wh1200.jpg" },
  { id: 12, name: "Fire VFX", type: "VFX", isPremium: false, preview: "https://img.lovepik.com/bg/20240224/Revolutionary-Ecommerce-3D-Render-of-Computer-Shopping-Bags-and-Delivery_3696975_wh1200.jpg" },
  { id: 22, name: "Sci-Fi Weapon", type: "3D Model", isPremium: true, preview: "https://img.lovepik.com/bg/20240224/Revolutionary-Ecommerce-3D-Render-of-Computer-Shopping-Bags-and-Delivery_3696975_wh1200.jpg" },
  
]

 
function MoreAssets() {
  // const cards = [

  //   { title: 'Card 1', description: 'This is the first card.' },
  //   { title: 'Card 2', description: 'This is the second card.' },
  //   { title: 'Card 3', description: 'This is the third card.' },
  //   { title: 'Card 4', description: 'This is the fourth card.' },
  //   { title: 'Card 5', description: 'This is the fifth card.' },
  //   { title: 'Card 6', description: 'This is the sixth card.' },
  //   { title: 'Card 7', description: 'This is the seventh card.' },
  //   { title: 'Card 8', description: 'This is the eighth card.' },


  // ];

    const [hoveredAsset, setHoveredAsset] = useState(null)
  
  return (
    <div>
      <div className=" mx-auto px-10 py-3  ">
        <div className='  text-white'>
          <h1 className='font-extrabold font-Oswald text-4xl text-center mb-4 mt-2'>Similar Assets</h1>

        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {/* {cards.map((card, index) => (

            
            <div key={index} className='py-8'>
              <Card key={index} title={card.title} description={card.description} />

            </div>


          ))} */}
           {assets.map((asset) => (
          <div
            key={asset.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-1"
            onMouseEnter={() => setHoveredAsset(asset.id)}
            onMouseLeave={() => setHoveredAsset(null)}
          >
            <div className="relative aspect-video">
              {hoveredAsset === asset.id ? (
                <AssetPreview asset={asset} />
              ) : (
                <img src={asset.preview || "/placeholder.svg"} alt={asset.name} className="w-full h-full object-cover" />
              )}
              {asset.isPremium && (
                <div className="absolute top-2 right-2 bg-orange-500 text-white p-1 rounded-full">
                  <Lock className="w-4 h-4" />
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1 text-teal-500">{asset.name}</h3>
              <p className="text-sm text-gray-400">{asset.type}</p>
            </div>
          </div>
        ))}


        </div>
      </div>
    </div>
  )
}

export function AssetPreview({ asset }) {
  switch (asset.type) {
    case "VFX":
      return <video src="" autoPlay loop muted className="w-full h-full object-cover" />
    case "3D Model":
      return <div className="w-full h-full bg-gray-700 flex items-center justify-center text-teal-500">3D Viewer</div>
    case "Flipbook":
      return (
        <div className="w-full h-full bg-gray-700 flex items-center justify-center text-teal-500">Animated Sprite</div>
      )
    default:
      return <img src={asset.preview || "/placeholder.svg"} alt={asset.name} className="w-full h-full object-cover" />
  }
}

export default MoreAssets

function AssetPreview({ asset }) {
  switch (asset.type) {
    case "VFX":
      return <video src="" autoPlay loop muted className="w-full h-full object-cover" />
    case "3D Model":
      return <div className="w-full h-full bg-gray-700 flex items-center justify-center text-teal-500">3D Viewer</div>
    case "Flipbook":
      return (
        <div className="w-full h-full bg-gray-700 flex items-center justify-center text-teal-500">Animated Sprite</div>
      )
    default:
      return <img src={asset.preview || "/placeholder.svg"} alt={asset.name} className="w-full h-full object-cover" />
  }
}