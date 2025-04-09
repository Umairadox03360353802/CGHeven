"use client"
import React from 'react'
import { useState } from "react"
import { Lock } from "lucide-react"

// const Card = ({ title, description }) => {
//     return (
//         <div className=" relative flex  flex-col justify-center overflow-hidden aspect-auto rounded-xl ">
//             <div className="absolute inset-0 flext  "></div>
//             <div className="group relative m-0 flex h-full w-full rounded-xl mx-0  ring-gray-800/5 sm:mx-auto sm:max-w-xl">
//                 <div className="z-10 h-full w-full overflow-hidden rounded-xl   transition duration-300 ease-in-out group-hover:opacity-100  opacity-70">
//                     <img src="https://cdn.polyhaven.com/asset_img/thumbs/qwantani_afternoon.png?width=371&height=278" alt="" />
//                 </div>
//                 <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
//                     <h1 className="font-Oswald text-2xl font-bold text-white shadow-xl">{title}</h1>
//                     <h1 className="text-sm font-light text-gray-200 shadow-xl">{description}</h1>
//                 </div>
//             </div>
//         </div>
//     );
// };

const assets = [
    { id: 1, name: "Fire VFX", type: "VFX", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/thumbs/brass_goblets.png?width=450&height=300" },
  { id: 2, name: "Sci-Fi Weapon", type: "3D Model", isPremium: true, preview: "https://cdn.polyhaven.com/asset_img/thumbs/spray_paint_bottles.png?width=450&height=300" },
  { id: 3, name: "Smoke Simulation", type: "VDB", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/thumbs/rusty_metal_04.png?width=600&height=284" },
  { id: 4, name: "Magic Particles", type: "Flipbook", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/primary/qwantani_noon.png?height=118" },
  { id: 5, name: "Rusty Metal", type: "Texture", isPremium: true, preview: "https://cdn.polyhaven.com/asset_img/thumbs/aerial_rocks_01.png?width=284&height=284" },
  { id: 6, name: "Explosion Pack", type: "VFX", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/primary/qwantani_noon.png?height=118" },
  { id: 12, name: "Fire VFX", type: "VFX", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/thumbs/horse_head.png?width=450&height=300" },
  { id: 22, name: "Sci-Fi Weapon", type: "3D Model", isPremium: true, preview: "https://cdn.polyhaven.com/asset_img/thumbs/coast_sand_rocks_02.png?width=284&height=284" },

]

function ExclusiveAssets() {
    // const cards = [
    //     { title: 'Card 1', description: 'This is the first card.' },
    //     { title: 'Card 2', description: 'This is the second card.' },
    //     { title: 'Card 3', description: 'This is the third card.' },
    //     { title: 'Card 4', description: 'This is the fourth card.' },
    //     { title: 'Card 5', description: 'This is the fifth card.' },
    //     { title: 'Card 6', description: 'This is the sixth card.' },
    //     { title: 'Card 7', description: 'This is the seventh card.' },
    //     { title: 'Card 8', description: 'This is the eighth card.' },


    // ];
   
 const [hoveredAsset, setHoveredAsset] = useState(null)
   
    return (
      <div className="mx-auto px-4 sm:px-6 lg:px-10 py-3 mt-4 sm:mt-6">
      <div className="text-white">
        <h1 className="font-extrabold font-Oswald text-2xl sm:text-3xl md:text-4xl text-center mb-3 sm:mb-4 mt-1 sm:mt-2">
          Exclusive Patreon Assets
        </h1>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {assets.map((asset) => (
          <div
            key={asset.id}
            className="bg-gray-800 rounded-lg overflow-hidden p-3 sm:p-4 shadow-lg hover:shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-1"
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
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              )}
              {asset.isPremium && (
                <div className="absolute top-2 right-2 bg-orange-500 text-white p-1 rounded-full">
                  <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              )}
            </div>
            <div className="px-2 sm:px-4 py-1">
              <h3 className="font-semibold text-sm sm:text-base text-white truncate">
                {asset.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
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

export default ExclusiveAssets
