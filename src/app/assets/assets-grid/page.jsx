'use client';
import React from "react"
import { useState } from "react"
import { Lock } from "lucide-react"
// import SupportUs from "../../components/support-us/page"

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


export default function AssetsGrid() {
  const [hoveredAsset, setHoveredAsset] = useState(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {assets.map((asset) => (
          <div
            key={asset.id}
            className="bg-gray-800 rounded-lg overflow-hidden p-4 shadow-lg hover:shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-1"
            onMouseEnter={() => setHoveredAsset(asset.id)}
            onMouseLeave={() => setHoveredAsset(null)}
          >
            <div className="relative aspect-video">
              {hoveredAsset === asset.id ? (
                <AssetPreview asset={asset} />
              ) : (
                <img src={asset.preview || "/placeholder.svg"} alt={asset.name} className="w-full h-full object-contain" />
              )}
              {asset.isPremium && (
                <div className="absolute top-2 right-2 bg-orange-500 text-white p-1 rounded-full">
                  <Lock className="w-4 h-4" />
                </div>
              )}
            </div>
            <div className="px-4 py-1">
              <h3 className="font-semibold   text-white">{asset.name}</h3>
              {/* <p className="text-sm text-gray-400">{asset.type}</p> */}
            </div>
          </div>
        ))}

      </div>
      {/*supprot on patreon  */}
      <div >
        <div className="my-12 bg-gray-800 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4 text-teal-400">Support CGHeven on Patreon</h2>
          <p className="text-lg text-white mb-6">Unlock exclusive assets, remove ads, and vote for future content!</p>
          <a
            href="#"
            className="inline-block px-8 py-4 bg-orange-500 text-white font-bold rounded-full text-lg hover:bg-orange-400 transition-colors animate-pulse"
          >
            Become a Patron
          </a>
        </div>    </div>

      {/* trending assets */}
      <div className="mt-10 pb-4">
        <h1 className="text-white text-xl">Trending Assets</h1>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {assets.map((asset) => (
          <div
            key={asset.id}
            className="bg-gray-800 rounded-lg overflow-hidden p-4 shadow-lg hover:shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-1"
            onMouseEnter={() => setHoveredAsset(asset.id)}
            onMouseLeave={() => setHoveredAsset(null)}
          >
            <div className="relative aspect-video">
              {hoveredAsset === asset.id ? (
                <AssetPreview asset={asset} />
              ) : (
                <img src={asset.preview || "/placeholder.svg"} alt={asset.name} className="w-full h-full object-contain" />
              )}
              {asset.isPremium && (
                <div className="absolute top-2 right-2 bg-orange-500 text-white p-1 rounded-full">
                  <Lock className="w-4 h-4" />
                </div>
              )}
            </div>
            <div className="px-4 py-1">
              <h3 className="font-semibold   text-white">{asset.name}</h3>
              {/* <p className="text-sm text-gray-400">{asset.type}</p> */}
            </div>
          </div>
        ))}

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