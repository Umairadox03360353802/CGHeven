'use client';
import React from "react"
import { useState, useEffect } from "react"
import { Lock } from "lucide-react"
// import Link from "next/link";
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
  { id: 25, name: "Rusty Metal", type: "Texture", isPremium: true, preview: "https://cdn.polyhaven.com/asset_img/thumbs/aerial_rocks_01.png?width=284&height=284" },
  { id: 26, name: "Explosion Pack", type: "VFX", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/primary/qwantani_noon.png?height=118" },
  { id: 212, name: "Fire VFX", type: "VFX", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/thumbs/horse_head.png?width=450&height=300" },
  { id: 222, name: "Sci-Fi Weapon", type: "3D Model", isPremium: true, preview: "https://cdn.polyhaven.com/asset_img/thumbs/coast_sand_rocks_02.png?width=284&height=284" },

]
const trendingAssets = [
  { name: "Fire VFX", type: "VFX", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/thumbs/brass_goblets.png?width=450&height=300" },
  { name: "Sci-Fi Weapon", type: "3D Model", isPremium: true, preview: "https://cdn.polyhaven.com/asset_img/thumbs/spray_paint_bottles.png?width=450&height=300" },
  { name: "Smoke Simulation", type: "VDB", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/thumbs/rusty_metal_04.png?width=600&height=284" },
  { name: "Magic Particles", type: "Flipbook", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/primary/qwantani_noon.png?height=118" },
  { name: "Rusty Metal", type: "Texture", isPremium: true, preview: "https://cdn.polyhaven.com/asset_img/thumbs/aerial_rocks_01.png?width=284&height=284" },
  { name: "Explosion Pack", type: "VFX", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/primary/qwantani_noon.png?height=118" },
  { name: "Fire VFX", type: "VFX", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/thumbs/horse_head.png?width=450&height=300" },
  { name: "Sci-Fi Weapon", type: "3D Model", isPremium: true, preview: "https://cdn.polyhaven.com/asset_img/thumbs/coast_sand_rocks_02.png?width=284&height=284" },
  { name: "Rusty Metal", type: "Texture", isPremium: true, preview: "https://cdn.polyhaven.com/asset_img/thumbs/aerial_rocks_01.png?width=284&height=284" },
  { name: "Explosion Pack", type: "VFX", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/primary/qwantani_noon.png?height=118" },
  { name: "Fire VFX", type: "VFX", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/thumbs/horse_head.png?width=450&height=300" },
  { name: "Sci-Fi Weapon", type: "3D Model", isPremium: true, preview: "https://cdn.polyhaven.com/asset_img/thumbs/coast_sand_rocks_02.png?width=284&height=284" },
  { name: "Fire VFX", type: "VFX", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/thumbs/brass_goblets.png?width=450&height=300" },
  { name: "Sci-Fi Weapon", type: "3D Model", isPremium: true, preview: "https://cdn.polyhaven.com/asset_img/thumbs/spray_paint_bottles.png?width=450&height=300" },
  { name: "Smoke Simulation", type: "VDB", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/thumbs/rusty_metal_04.png?width=600&height=284" },
  { name: "Magic Particles", type: "Flipbook", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/primary/qwantani_noon.png?height=118" },
  { name: "Rusty Metal", type: "Texture", isPremium: true, preview: "https://cdn.polyhaven.com/asset_img/thumbs/aerial_rocks_01.png?width=284&height=284" },
  { name: "Explosion Pack", type: "VFX", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/primary/qwantani_noon.png?height=118" },
  { name: "Fire VFX", type: "VFX", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/thumbs/horse_head.png?width=450&height=300" },
  { name: "Sci-Fi Weapon", type: "3D Model", isPremium: true, preview: "https://cdn.polyhaven.com/asset_img/thumbs/coast_sand_rocks_02.png?width=284&height=284" },
  { name: "Fire VFX", type: "VFX", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/thumbs/horse_head.png?width=450&height=300" },
  { name: "Sci-Fi Weapon", type: "3D Model", isPremium: true, preview: "https://cdn.polyhaven.com/asset_img/thumbs/coast_sand_rocks_02.png?width=284&height=284" },
  { name: "Rusty Metal", type: "Texture", isPremium: true, preview: "https://cdn.polyhaven.com/asset_img/thumbs/aerial_rocks_01.png?width=284&height=284" },
  { name: "Explosion Pack", type: "VFX", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/primary/qwantani_noon.png?height=118" },
  { name: "Fire VFX", type: "VFX", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/thumbs/horse_head.png?width=450&height=300" },
  { name: "Sci-Fi Weapon", type: "3D Model", isPremium: true, preview: "https://cdn.polyhaven.com/asset_img/thumbs/coast_sand_rocks_02.png?width=284&height=284" },
  { name: "Fire VFX", type: "VFX", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/thumbs/brass_goblets.png?width=450&height=300" },
  { name: "Sci-Fi Weapon", type: "3D Model", isPremium: true, preview: "https://cdn.polyhaven.com/asset_img/thumbs/spray_paint_bottles.png?width=450&height=300" },
  { name: "Smoke Simulation", type: "VDB", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/thumbs/rusty_metal_04.png?width=600&height=284" },
  { name: "Magic Particles", type: "Flipbook", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/primary/qwantani_noon.png?height=118" },
  { name: "Rusty Metal", type: "Texture", isPremium: true, preview: "https://cdn.polyhaven.com/asset_img/thumbs/aerial_rocks_01.png?width=284&height=284" },
  { name: "Explosion Pack", type: "VFX", isPremium: false, preview: "https://cdn.polyhaven.com/asset_img/primary/qwantani_noon.png?height=118" },


]


export default function SubAssetsGrid() {




  // Function to determine if a card should be an ad
  const isAd = (index) => {
    return index === 0 || (index + 1) % 12 === 0
  }
  const isVideoAd = (index) => {
    return index === 0
  }
  const [hoveredAsset, setHoveredAsset] = useState(null)
  // const [adNumber, setAdNumber] = useState(20)


  const [items, setItems] = useState(trendingAssets);
  useEffect(() => {
    const generateItems = () => {
      const newItems = []
      let itemCount = 0

      for (let i = 0; i < trendingAssets.length; i++) {
        // Calculate position in the overall pattern
        // Each complete cycle is 32 cards (8 rows of 4 cards)
        const cyclePosition = i % 32
        const row = Math.floor(cyclePosition / 4) // Row within the cycle (0-7)
        const col = cyclePosition % 4 // Column (0-3)

        let isAd = false

        // Right side ad: 4th position (index 3) in the 4th row (index 3)
        if (row === 3 && col === 3) {
          isAd = true
        }

        // Left side ad: 1st position (index 0) in the 8th row (index 7)
        // This creates a 4-row gap between the right ad (row 3) and left ad (row 7)
        if (row === 7 && col === 0) {
          isAd = true
        }

        newItems.push({
          ...trendingAssets[i],
          id: itemCount++,
          category: isAd ? "ad" : "card",
        })
      }

      setItems(newItems)
    }

    generateItems()
  }, [trendingAssets])


  return (
    <>
     {/* sub-category assets */}
     <div className="mt-10 pb-4">
        <h1 className="text-white font-Oswald font-bold text-2xl">Sub Assets</h1>

      </div>
     {/* Main Assets Grid */}
     <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-hidden">
      
      {assets.map((asset, index) => (
        isAd(index) ? (
          isVideoAd(index) ? (
            // Video Model Ad (Mobile Optimized)
            <div key={asset.id} className="overflow-hidden py-1 sm:py-2">
              <div className="flex aspect-video w-full rounded-lg items-center justify-center bg-black/40 backdrop-blur-sm">
                <span className="text-xs sm:text-sm text-gray-400">Model video</span>
              </div>
            </div>
          ) : (
            // Ads Card
            <div key={asset.id} className="overflow-hidden py-1 sm:py-2">
              <div className="flex aspect-video w-full rounded-lg items-center justify-center bg-black/40 backdrop-blur-sm">
                <span className="text-xs sm:text-sm text-gray-400">Advertisement</span>
              </div>
            </div>
          )
        ) : (
          // Regular Card (Mobile Optimized)
          
            <div
              className="bg-gray-800 rounded-lg overflow-hiddenmd p-2 md:p-4 shadow-lg hover:shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
              onTouchStart={() => setHoveredAsset(asset.id)}
              onTouchEnd={() => setHoveredAsset(null)}
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
                    className="w-full h-full object-contain "
                    loading="lazy"
                  />
                )}
                {asset.isPremium && (
                  <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-orange-500 text-white p-1 rounded-full">
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
          
        )
      ))}
    </div>
  
    {/* Support Section */}
    <div className="my-8 sm:my-12 bg-gray-800 p-4 sm:p-8 font-Oswald rounded-lg text-center">
      <h2 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-4 text-teal-400">
        Support CGHeven on Patreon
      </h2>
      <p className="text-base sm:text-xl font-Alumni font-semibold text-white mb-4 sm:mb-6">
        Unlock exclusive assets, remove ads, and vote for future content!
      </p>
      <a
        href="#"
        className="inline-block px-4 py-2 sm:px-8 sm:py-4 bg-orange-500 text-white font-bold rounded-lg text-sm sm:text-lg hover:bg-orange-400 transition-colors active:scale-95"
      >
        Become a Patron
      </a>
    </div>
  
    {/* Trending Assets */}
    <div className="mt-6 sm:mt-10 pb-4">
      <h1 className="text-white font-Oswald font-bold text-xl sm:text-2xl">
        Trending Assets
      </h1>
    </div>
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {items.map((asset, index) => (
        asset.category === "card" ? (
          <div
            key={asset.id}
            className="bg-gray-800 rounded-lg overflow-hidden p-2 sm:p-4 shadow-lg hover:shadow-teal-500/20 transition-all duration-300 active:scale-95 sm:transform sm:hover:-translate-y-1"
            onTouchStart={() => setHoveredAsset(asset.id)}
            onTouchEnd={() => setHoveredAsset(null)}
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
                  className="w-full h-full object-contain bg-gray-700 p-1"
                  loading="lazy"
                />
              )}
              {asset.isPremium && (
                <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-orange-500 text-white p-1 rounded-full">
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
        ) : (
          // Ads Card
          <div key={asset.id} className="overflow-hidden py-1 sm:py-2">
            <div className="flex aspect-video w-full rounded-lg items-center justify-center bg-black/40 backdrop-blur-sm">
              <span className="text-xs sm:text-sm text-gray-400">Advertisement</span>
            </div>
          </div>
        )
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