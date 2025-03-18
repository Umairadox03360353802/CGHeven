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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-x-hidden overflow-y-auto [&::-webkit-scrollbar]:hidden">
        {/* {assets.map((asset, index) => (
          isAd(index) ?
            isVideoAd(index) ?
              // video model ad
              <div key={asset.id} className="overflow-hidden py-2">
                <div className="flex h-full w-full rounded-lg items-center justify-center bg-black/40 backdrop-blur-sm">
                  <span className="text-sm text-gray-400">Model video</span>
                </div>
              </div>
              :
              // ads card
              <div key={asset.id} className="overflow-hidden py-2">
                <div className="flex h-full w-full rounded-lg items-center justify-center bg-black/40 backdrop-blur-sm">
                  <span className="text-sm text-gray-400">Advertisement</span>
                </div>
              </div>

            :

            //  regular card
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
              </div>
            </div>


        ))} */}

      </div>
      {/*supprot on patreon  */}
      {/* <div >
        <div className="my-12 bg-gray-800 p-8 font-Oswald rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4 text-teal-400">Support CGHeven on Patreon</h2>
          <p className="text-xl font-Alumni font-semibold text-white mb-6">Unlock exclusive assets, remove ads, and vote for future content!</p>
          <a
            href="#"
            className="inline-block px-8 py-4 bg-orange-500 text-white font-bold rounded-lg text-lg hover:bg-orange-400 transition-colors animate-pulse"
          >
            Become a Patron
          </a>
        </div>   
         </div> */}

      {/* sub-category assets */}
      <div className="mt-10 pb-4">
        <h1 className="text-white font-Oswald font-bold text-2xl">Sub Assets</h1>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((asset, index) => 
           
          
              asset.category === "ad" ?

                // ads card
                <div key={asset.id} className="overflow-hidden py-2">
                  <div className="flex h-full w-full rounded-lg items-center justify-center bg-black/40 backdrop-blur-sm">
                    <span className="text-sm text-gray-400">Advertisement</span>
                  </div>
                </div> :
                isVideoAd(index) ?
                  // video model ad
                  <div key={asset.id} className="overflow-hidden py-2">
                    <div className="flex h-full w-full rounded-lg items-center justify-center bg-black/40 backdrop-blur-sm">
                      <span className="text-sm text-gray-400">Model video</span>
                    </div>
                  </div>
                  :
                  //  regular card
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
                    </div>
                  </div>

            
        


        )}

 
       

      </div>
      {/*supprot on patreon  */}
      <div >
                  <div className="my-12 bg-gray-800 p-8 font-Oswald rounded-lg text-center">
                    <h2 className="text-3xl font-bold mb-4 text-teal-400">Support CGHeven on Patreon</h2>
                    <p className="text-xl font-Alumni font-semibold text-white mb-6">Unlock exclusive assets, remove ads, and vote for future content!</p>
                    <a
                      href="#"
                      className="inline-block px-8 py-4 bg-orange-500 text-white font-bold rounded-lg text-lg hover:bg-orange-400 transition-colors animate-pulse"
                    >
                      Become a Patron
                    </a>
                  </div>
                </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((asset, index) => 
           
          
              asset.category === "ad" ?

                // ads card
                <div key={asset.id} className="overflow-hidden py-2">
                  <div className="flex h-full w-full rounded-lg items-center justify-center bg-black/40 backdrop-blur-sm">
                    <span className="text-sm text-gray-400">Advertisement</span>
                  </div>
                </div> :
               
                  //  regular card
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
                    </div>
                  </div>

            
        


        )}

 
       

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