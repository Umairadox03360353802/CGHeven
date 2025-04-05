"use client"

import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox"
import { FaArrowLeft } from "react-icons/fa";


export default function HamburgerDrawer() {
    const [isOpen, setIsOpen] = useState(false)
    const [categories, setCategories] = useState([
        {
            name: "Blend",
            options: [{ id: "blend", label: "BLEND", checked: false }],
        },
        {
            name: "Gltf",
            options: [{ id: "gltf", label: "GLTF", checked: true }],
        },
        {
            name: "Fbx",
            options: [{ id: "fbx", label: "FBX", checked: false }],
        },
        {
            name: "Usd",
            options: [{ id: "usd", label: "USD", checked: false }],
        },
        {
            name: "AO",
            options: [
                { id: "ao-exr", label: "EXR", checked: false },
                { id: "ao-jpg", label: "JPG", checked: true },
                { id: "ao-png", label: "PNG", checked: false },
            ],
        },
        {
            name: "AO/Rough/Metal",
            options: [
                { id: "aorm-exr", label: "EXR", checked: false },
                { id: "aorm-jpg", label: "JPG", checked: true },
                { id: "aorm-png", label: "PNG", checked: false },
            ],
        },
        {
            name: "Diffuse",
            options: [
                { id: "diffuse-exr", label: "EXR", checked: false },
                { id: "diffuse-jpg", label: "JPG", checked: true },
                { id: "diffuse-png", label: "PNG", checked: false },
            ],
        },
        {
            name: "Metal",
            options: [
                { id: "metal-exr", label: "EXR", checked: false },
                { id: "metal-jpg", label: "JPG", checked: true },
                { id: "metal-png", label: "PNG", checked: false },
            ],
        },
    ])

    const toggleDrawer = () => {
        setIsOpen(!isOpen)
    }

    const handleCheckboxChange = (categoryIndex, optionIndex) => {
        const newCategories = [...categories]
        newCategories[categoryIndex].options[optionIndex].checked =
            !newCategories[categoryIndex].options[optionIndex].checked
        setCategories(newCategories)
    }

    return (
        <div className="relative">
           
           { isOpen? <FaArrowLeft size={25} onClick={toggleDrawer} /> :<GiHamburgerMenu size={25} onClick={toggleDrawer}  />}

            {/* <div
                className={cn(
                    "fixed inset-0  z-20 bg-black/50 transition-opacity",
                    isOpen ? " opacity-100 " : "opacity-0 pointer-events-none",
                )}
                onClick={toggleDrawer}
            /> */}

            <div
                className={cn(
                    "fixed top-14 right-0 z-50 h-full w-80 bg-gray-800 text-white transition-transform duration-300 ease-in-out",
                    isOpen  ? "translate-x-0  " : "-translate-x-full hidden ",
                )}
            >
                <div className="p-4 border-b border-zinc-700">
                    <h2 className="text-lg font-medium">Choose ZIP contents:</h2>
                </div>

                <div className="overflow-y-auto h-[calc(100%-60px)]">
                    {categories.map((category, categoryIndex) => (
                        <div key={category.name} className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
                            <span className="text-sm">{category.name}</span>
                            <div className="flex items-center gap-2">
                                {category.options.map((option, optionIndex) => (
                                    <div key={option.id} className="flex items-center">
                                        <Checkbox
                                            id={option.id}
                                            checked={option.checked}
                                            onCheckedChange={() => handleCheckboxChange(categoryIndex, optionIndex)}
                                            className={cn(
                                                "h-4 w-4 border-zinc-600 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500",
                                                "focus-visible:ring-teal-400 focus-visible:ring-offset-zinc-900",
                                            )}
                                        />
                                        <label
                                            htmlFor={option.id}
                                            className={cn("ml-1 text-xs font-medium", option.checked ? "text-teal-400" : "text-zinc-400")}
                                        >
                                            {option.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

