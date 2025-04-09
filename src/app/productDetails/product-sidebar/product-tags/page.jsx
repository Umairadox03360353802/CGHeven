"use client"


import { Badge } from "@/components/ui/badge"

// /**
//  * Tags component for displaying tags
//  * @param {Object} props
//  * @param {any} [props.tags] - Tags to display
//  */


export default function ProductTags(  ) {

 const Ptags = ["sun", "mountain", "view", "hilltop", "dam"]

  return (
    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 p-2 sm:p-3 bg-gray-800 rounded">
    <span className="text-white text-sm sm:text-base mr-1 sm:mr-1.5">Tags:</span>
    {Ptags.map((tag) => (
      <Badge 
        key={tag} 
        className="bg-teal-600 hover:bg-teal-500 text-white text-xs sm:text-sm rounded border-none px-2 py-1 transition-colors"
      >
        {tag}
      </Badge>
    ))}
  </div>
  )
}

