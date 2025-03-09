"use client"

import { useState } from "react"



export default function TagSelector({ tags = ["sun", "mountain", "view", "hilltop", "dam"], onChange }) {
  const [selectedTags, setSelectedTags] = useState([])

  const handleTagClick = (tag) => {
    const newSelectedTags = selectedTags.includes(tag) ? selectedTags.filter((t) => t !== tag) : [...selectedTags, tag]

    setSelectedTags(newSelectedTags)
    if (onChange) {
      onChange(newSelectedTags)
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-1.5 bg-black bg-opacity-95 p-1.5 rounded-sm">
      <div className="text-white mr-0.5 text-sm font-medium">Tags:</div>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className="px-3 py-0.5 text-sm rounded-sm bg-teal-600 text-white hover:bg-teal-500 transition-colors"
        >
          {tag}
        </button>
      ))}
    </div>
  )
}

