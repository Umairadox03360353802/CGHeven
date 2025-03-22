'use client';
import React from "react"
import ReactPlayer from "react-player"
import { useState, useEffect } from "react"
import { Lock } from "lucide-react"
import Link from "next/link";
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


export default function VideoGrid() {




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

        // Right side ad: 1th position (index 0) in the 4th row (index 3)
        if (row === 3 && col === 0) {
          isAd = true
        }

        // Left side ad: 4st position (index 3) in the 8th row (index 7)
        // This creates a 4-row gap between the right ad (row 3) and left ad (row 7)
        if (row === 7 && col === 3) {
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

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  return (
    <>
  

      {/* all videos 1 */}
   
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
              <Link href="/youTube/video-home/youtube-video" key={index} >

                <div key={index} className="bg-gray-800 rounded-lg  p-4 text-white shadow-lg hover:shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="aspect-video   bg-gray-700 rounded-lg mb-4 mx-auto  relative">
                    {index % 2 === 0 && <Lock className="absolute top-2 right-2" />}
                    {/* <iframe src="https://www.youtube.com/embed/eRsGyueVLvQ" className='h-[300px] w-full ' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  " allowfullscreen></iframe> */}
                    {isClient &&
                      <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width='100%' height='100%' controls />
                    }
                  </div>
                  <h3 className="font-bold mb-2">Tutorial Title</h3>
                  <p className="text-sm text-gray-400 mb-2">Short description...</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded">10:30</span>
                    {/* <Play size={20} /> */}
                    <div className='h-5 w-5 flex flex-col justify-center items-center   mb-3 mr-5 gap-2'>
                      <img src="/youtube-logo.png" alt="" />
                      <p className='font-semibold font-Montserrat text-xs text-center'>FREE <br />TUTORIAL</p>

                    </div>
                  </div>
                </div>

              </Link>





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

 {/* all videos 2*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-4">
        {items.map((asset, index) =>


          asset.category === "ad" ?

            // ads card
            <div key={asset.id} className="overflow-hidden py-2">
              <div className="flex h-full w-full rounded-lg items-center justify-center bg-black/40 backdrop-blur-sm">
                <span className="text-sm text-gray-400">Advertisement</span>
              </div>
            </div> :

            //  regular card
            <Link href="/youTube/video-home/youtube-video" key={index} >

              <div key={index} className="bg-gray-800 rounded-lg  p-4 text-white shadow-lg hover:shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-video   bg-gray-700 rounded-lg mb-4 mx-auto  relative">
                  {index % 2 === 0 && <Lock className="absolute top-2 right-2" />}
                  {/* <iframe src="https://www.youtube.com/embed/eRsGyueVLvQ" className='h-[300px] w-full ' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  " allowfullscreen></iframe> */}
                  {isClient &&
                    <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width='100%' height='100%' controls />
                  }
                </div>
                <h3 className="font-bold mb-2">Tutorial Title</h3>
                <p className="text-sm text-gray-400 mb-2">Short description...</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">10:30</span>
                  {/* <Play size={20} /> */}
                  <div className='h-5 w-5 flex flex-col justify-center items-center   mb-3 mr-5 gap-2'>
                    <img src="/youtube-logo.png" alt="" />
                    <p className='font-semibold font-Montserrat text-xs text-center'>FREE <br />TUTORIAL</p>

                  </div>
                </div>
              </div>

            </Link>





        )}




      </div>


     
    
    </>
  )
}

// function AssetPreview({ asset }) {
//   switch (asset.type) {
//     case "VFX":
//       return <video src="" autoPlay loop muted className="w-full h-full object-contain" />
//     case "3D Model":
//       return <div className="w-full h-full bg-gray-700 flex items-center justify-center text-teal-500">3D Viewer</div>
//     case "Flipbook":
//       return (
//         <div className="w-full h-full bg-gray-700 flex items-center justify-center text-teal-500">Animated Sprite</div>
//       )
//     default:
//       return <img src={asset.preview || "/placeholder.svg"} alt={asset.name} className="w-full h-full object-contain" />
//   }
// }