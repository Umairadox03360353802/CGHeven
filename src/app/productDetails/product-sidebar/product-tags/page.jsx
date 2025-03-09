"use client"


import { Badge } from "@/components/ui/badge"



export default function Tags({ tags = ["sun", "mountain", "view", "hilltop", "dam"] }) {

 

  return (
    <div className="flex flex-wrap items-center gap-2 p-2 bg-gray-800 ">
    <span className="text-white mr-1">Tags:</span>
    {tags.map((tag) => (
      <Badge key={tag} className="bg-teal-600 hover:bg-teal-500 text-white text-sm rounded border-none">
        {tag}
      </Badge>
    ))}
  </div>
  )
}

