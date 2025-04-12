"use client"
import React from "react"
import { useState } from "react"
import Link from "next/link"
import ProductTags from "./product-tags/page"
import HamburgerDrawer from "./hamburger-drawer/page"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
// import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar"
// import { Sidebar, SidebarContent, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MdDownload } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

import { SiBlender } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMail } from "react-icons/io5";
import { IoLinkSharp } from "react-icons/io5";
import { ExternalLink } from "lucide-react"
import { MapPin, FileArchive } from "lucide-react"

// import { MdKeyboardArrowDown, MdDownload, MdArrowForward } from 'react-icons';
// import { FileArchive, ExternalLink, MapPin  } from 'lucide-react';
// import { SiBlender } from 'react-icons/si';
// import { IoLinkSharp, IoMail } from 'react-icons/io5';
// import Link from 'next/link';
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';




// import { ChevronDown, Download, Link, Mail, Menu, RotateCw } from "lucide-react"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { Button } from "@/components/ui/button"

// import { Badge } from "@/components/ui/badge"
// import { Separator } from "@/components/ui/separator"

function ProductSidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <>

            <div className="bg-gray-800 relative">
                {/* Floating Toggle Button */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="fixed md:hidden bottom-4 right-4 z-50 p-2 bg-teal-600 rounded-full shadow-lg"
                >
                    <FaChevronRight className={`text-white transition-transform ${isSidebarOpen ? 'rotate-180' : ''}`} size={22} />
                </button>

                {/* Main Content */}
                <div className="md:w-full">
                    {/* ... (rest of your existing navbar content) ... */}

                    {/* Mobile Sidebar Overlay */}
                    <div
                        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out z-40 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                            } md:relative md:translate-x-0 md:w-full`}
                    >
                        {/* Sidebar Content */}
                        <div className="border-b border-white/10 px-0">
                            {/* ... (your existing sidebar content) ... */}
                            <div className="flex items-center justify-between font-Oswald bg-teal-600 text-white px-4 pb-2 ">
                                <div className="flex flex-col items-center  border-r-white">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <div>

                                                <span className="text-sm pt-1 font-bold">4K</span>
                                                <MdKeyboardArrowDown size={20} />
                                            </div>

                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="center" className=" flex flex-col items-center bg-gray-800 text-white">
                                            <DropdownMenuItem>
                                                <h1>1K</h1>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <h1>2K</h1>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>

                                    </DropdownMenu>

                                </div>

                                <div className="flex flex-col items-center mt-1  border-r-white">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>

                                            <div>
                                                <span ><FileArchive size={20} /></span>
                                                <MdKeyboardArrowDown size={20} />
                                            </div>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="center" className=" flex flex-col items-center bg-gray-800 text-white">
                                            <DropdownMenuItem>
                                                <SiBlender className="mr-0 h-4 w-4" />
                                                <span>Blend</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <FileArchive className="mr-0 h-4 w-4" />
                                                <span>zip file</span>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>

                                    </DropdownMenu>

                                </div>

                                <MdDownload size={20} />
                                <Link href="./logo.png" target="_blank" download rel="noopener noreferrer" >
                                    <div className="flex flex-col items-center p-1 border-r-white">


                                        <span className="text-base font-normal mr-0">Download</span>
                                        <span className="text-sm font-light">252.58 MB</span>
                                    </div>
                                </Link>

                                <div className=" cursor-pointer">
                                    {/* <GiHamburgerMenu size={25} /> */}
                                    <HamburgerDrawer />

                                </div>
                            </div>

                            {/* profile */}
                            <div className='flex flex-col justify-center items-center gap-4 mb-2'>
                                {/* ... (your existing profile content) ... */}
                                <div className='flex flex-row justify-center font-Oswald items-center w-full mt-3'>
                                    <h1 className="text-start text-white font-bold text-xs sm:text-sm md:text-xl mb-2">
                                        Author:</h1>

                                    <div className="w-8 h-8 sm:w-14 sm:h-14 ml-2 rounded-full bg-slate-500 overflow-hidden">
                                        <img src="/main.jpg" alt="Profile" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col items-end justify-center text-white font-normal ml-1 text-sm sm:text-base">
                                        <h1 className="text-xs sm:text-lg font-semibold">Ammar Khan</h1>
                                        <div className="flex flex-row items-center gap-2 mt-1">
                                            <IoLinkSharp className="text-sm sm:text-xl" />
                                            <IoMail className="text-sm sm:text-xl" />
                                        </div>
                                    </div>


                                    <div className="w-8 h-8 sm:w-14 sm:h-14 ml-2 rounded-full bg-slate-500 overflow-hidden">
                                        <img src="/main.jpg" alt="Profile" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col items-end justify-center text-white font-normal ml-1 text-sm sm:text-base">
                                        <h1 className="text-xs sm:text-lg font-semibold">Ammar Khan</h1>
                                        <div className="flex flex-row items-center gap-2 mt-1">
                                            <IoLinkSharp className="text-sm sm:text-xl" />
                                            <IoMail className="text-sm sm:text-xl" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* product details */}
                            <div className="flex items-center justify-between sm:justify-center text-white p-2 w-full flex-wrap gap-2 sm:gap-0">
                                {/* ... (your existing product details) ... */}

                                {/* License */}
                                <div className="flex flex-col items-center justify-center px-2 sm:px-3 min-w-[60px]">
                                    <span className="text-base sm:text-lg font-semibold">CC0</span>
                                    <span className="text-[10px] sm:text-xs text-gray-400">License</span>
                                </div>

                                {/* EVs */}
                                <div className="flex flex-col items-center justify-center px-2 sm:px-3 min-w-[60px]">
                                    <span className="text-base sm:text-lg font-semibold">22</span>
                                    <span className="text-[10px] sm:text-xs text-gray-400">EVs</span>
                                </div>

                                {/* WB */}
                                <div className="flex flex-col items-center justify-center px-2 sm:px-3 min-w-[60px]">
                                    <span className="text-base sm:text-lg font-semibold">5539K</span>
                                    <span className="text-[10px] sm:text-xs text-gray-400">WB</span>
                                </div>

                                {/* GPS */}
                                <div className="flex flex-col items-center justify-center px-2 sm:px-3 min-w-[60px]">
                                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mb-0.5 sm:mb-1" />
                                    <span className="text-[10px] sm:text-xs text-gray-400">GPS</span>
                                </div>
                            </div>
                        </div>

                        {/* Scrollable Area */}
                        <div className="space-y-0 h-[calc(90vh-90px)] relative">
                            {/* ... (your existing scrollable content) ... */}
                            {/* Square Ad */}
                            <div className="overflow-hidden p-4 sm:p-6">
                                <div className="flex h-[200px] sm:h-[250px] md:h-[300px] w-full rounded-lg items-center justify-center bg-black/40 backdrop-blur-sm">
                                    <span className="text-xs sm:text-sm text-gray-400">Advertisement</span>
                                </div>
                            </div>




                            {/* Support Us on Patreon */}
                            <div className="absolute   bottom-0 w-full py-0">
                                {/* Tags */}
                                <ProductTags />

                                <div className="w-full font-Oswald bg-gradient-to-br from-gray-900 to-gray-800 p-3 mb-6 sm:p-4 shadow-lg rounded-lg">
                                    <div className="flex items-center justify-center sm:justify-start">
                                        <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded mx-2 sm:mx-4 mb-2 sm:mb-3 text-white">
                                            <img
                                                src="rslogo1.png"
                                                className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                                                alt="Patreon Logo"
                                            />
                                        </div>
                                        <h2 className="text-base sm:text-lg font-medium text-white">
                                            Support Us on Patreon
                                        </h2>
                                    </div>

                                    <p className="mt-1 sm:mt-2 text-center sm:text-left text-sm sm:text-md font-bold font-Alumni text-gray-300 px-1 sm:px-0">
                                        Unlock exclusive assets, premium tutorials, and ad-free experience by supporting us on Patreon!
                                    </p>

                                    <Link
                                        href="https://patreon.com/cghaven"
                                        target="_blank"
                                        className="mt-2 sm:mt-3 flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-md bg-purple-600 hover:bg-purple-700 py-2 px-4 text-xs sm:text-sm font-medium text-white transition-colors duration-200"
                                    >
                                        Join Now on Patreon
                                        <ExternalLink size={12} className="sm:size-[14px]" />
                                    </Link>
                                </div>

                                <div className="h-10  pb-0 bg-gray-900"></div>
                            </div>





                        </div>
                    </div>

                    {/* Overlay for Mobile */}
                    {isSidebarOpen && (
                        <div
                            className="fixed inset-0 bg-black/50 z-30 md:hidden"
                            onClick={() => setIsSidebarOpen(false)}
                        />
                    )}
                </div>
            </div>

        </>
    )
}

export default ProductSidebar