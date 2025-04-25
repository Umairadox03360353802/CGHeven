'use client';
import { useState } from "react"
import { ChevronLeft, ChevronRight, Filter } from "lucide-react"

const filterCategories = [
  {
    name: "Asset Type",
    options: ["VFX Elements", "3D Models", "Flipbooks", "VDBs", "Textures"],
  },
  {
    name: "Format",
    options: ["MP4", "PNG", "EXR", "FBX", "OBJ", "VDB", "GLTF"],
  },
  {
    name: "Resolution",
    options: ["4K", "2K", "1K", "512px"],
  },
]

export default function VideoSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
   <div className="relative">
        <button
         onClick={() => setIsCollapsed(!isCollapsed)}
         className="mb-4 p-2 z-50 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors right-0 fixed  top-32 sm:static"
       >
         {isCollapsed ? (
           <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-teal-500" />
         ) : (
           <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-teal-500" />
         )}
       </button>
       <aside 
       className={`bg-gray-800    p-2 sm:p-4 transition-all font-Oswald fixed sm:sticky z-40 left-0 top-0 h-screen sm:top-[-10px] duration-300 ease-in-out ${
         isCollapsed ? "opacity-0 w-0 sm:w-16 " : "opacity-100 w-full sm:w-72 max-w-[80vw]"
       }`}
     >
       {/* <button
         onClick={() => setIsCollapsed(!isCollapsed)}
         className="mb-4 p-2  bg-gray-700 rounded-full hover:bg-gray-600 transition-colors absolute right-2 top-2 sm:static"
       >
         {isCollapsed ? (
           <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-teal-500" />
         ) : (
           <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-teal-500" />
         )}
       </button> */}
     
       {!isCollapsed && (
         <div className="ml-2 sm:ml-4 overflow-y-auto [&::-webkit-scrollbar]:hidden h-full pb-20">
           {/* Square Ad */}
           <div className="overflow-hidden py-2">
             <div className="flex aspect-square max-w-[200px] sm:h-[250px] sm:w-[250px] rounded-lg items-center justify-center bg-black/40 backdrop-blur-sm mx-auto">
               <span className="text-xs sm:text-sm text-gray-400">Advertisement</span>
             </div>
           </div>
     
           <h2 className="text-xl sm:text-2xl font-bold mb-4 flex text-white items-center">
             <Filter className="mr-2 text-teal-500 w-5 h-5 sm:w-6 sm:h-6" /> Filters
           </h2>
     
           {filterCategories.map((category) => (
             <div key={category.name} className="mb-4 sm:mb-6 text-white">
               <h3 className="font-semibold text-lg sm:text-xl mb-2">{category.name}</h3>
               <div className="space-y-1 sm:space-y-2">
                 {category.options.map((option) => (
                   <label key={option} className="flex items-center py-1">
                     <input 
                       type="checkbox" 
                       className="form-checkbox accent-teal-500 h-4 w-4 sm:h-5 sm:w-5 rounded" 
                     />
                     <span className="ml-2 font-Alumni font-semibold text-base sm:text-xl">
                       {option}
                     </span>
                   </label>
                 ))}
               </div>
             </div>
           ))}
     
           <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition-colors text-sm sm:text-base">
             Show Patreon Exclusives
           </button>
         </div>
       )}
     </aside>
       </div>
  )
}

