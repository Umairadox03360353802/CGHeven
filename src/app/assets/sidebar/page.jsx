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

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <aside className={`bg-gray-800 p-4 transition-all sticky left-0 top-[-10px] duration-300 ease-in-out ${isCollapsed ? "w-16" : "w-72"}`}>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="mb-4 p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
      >
        {isCollapsed ? (
          <ChevronRight className="w-6 h-6 text-teal-500" />
        ) : (
          <ChevronLeft className="w-6 h-6 text-teal-500" />
        )}
      </button>
      {!isCollapsed && (
        <>
          <h2 className="text-xl font-semibold mb-4 flex text-white items-center">
            <Filter className="mr-2 text-teal-500" /> Filters
          </h2>
          {filterCategories.map((category) => (
            <div key={category.name} className="mb-6 text-white">
              <h3 className="font-medium mb-2">{category.name}</h3>
              <div className="space-y-2">
                {category.options.map((option) => (
                  <label key={option} className="flex items-center">
                    <input type="checkbox" className="form-checkbox text-teal-500 rounded" />
                    <span className="ml-2 text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition-colors">
            Show Patreon Exclusives
          </button>
        </>
      )}
    </aside>
  )
}

