"use client"
import React from "react"
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
import { SiBlender } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMail } from "react-icons/io5";
import { IoLinkSharp } from "react-icons/io5";
import { ExternalLink } from "lucide-react"
import { MapPin,FileArchive } from "lucide-react"




// import { ChevronDown, Download, Link, Mail, Menu, RotateCw } from "lucide-react"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { Button } from "@/components/ui/button"

// import { Badge } from "@/components/ui/badge"
// import { Separator } from "@/components/ui/separator"

function ProductSidebar() {
    return (
        <>

            <div className="bg-gray-800">


                {/* Sidebar */}
                <div className="w-full   ">
                    <div className="border-b border-white/10 px-0">

                        {/* download formats and author profile */}


                        <div className="flex items-center justify-between font-Oswald bg-teal-600 text-white px-4 pb-2 ">
                            <div className="flex flex-col items-center  border-r-white">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <div>

                                        <span className="text-sm pt-1 font-bold">4K</span>
                                        <MdKeyboardArrowDown size={20} />
                                        </div>

                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="center"   className=" flex flex-col items-center bg-gray-800 text-white">
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
                                <HamburgerDrawer/>

                            </div>
                        </div>
                        {/* profile */}
                        <div className='flex flex-col justify-center items-center gap-4 mb-2'>

                            <div className='flex flex-row justify-center font-Oswald items-center w-full mt-3'>
                                <h1 className='text-start text-white font-bold'>Author:</h1>
                                <div className='w-12 h-12 ml-2 rounded-full bg-slate-500'>
                                    <img src="/main.jpg" className='rounded-full' alt="" />
                                </div>
                                <div className=' flex flex-col justify-center items-center text-white font-normal text-end ml-1'>
                                    <h1>Ammar Khan</h1>
                                    <div className="flex flex-row justify-center items-center gap-2">

                                        <IoLinkSharp /><IoMail />
                                    </div>

                                </div>


                                <div className='w-12 h-12 ml-0 rounded-full bg-slate-500'>
                                    <img src="/main.jpg" className='rounded-full' alt="" />
                                </div>
                                <div className=' flex flex-col justify-center items-center text-white font-normal text-end ml-1'>
                                    <h1>Ammar Khan</h1>
                                    <div className="flex flex-row justify-center items-center gap-2">

                                        <IoLinkSharp /><IoMail />
                                    </div>

                                </div>
                            </div>


                        </div>

                        {/* product details */}
                        <div className="flex items-center justify-center  text-white p-2 w-full">
                            <div className="flex flex-col items-center justify-center px-3">
                                <span className="text-lg font-semibold">CC0</span>
                                <span className="text-xs text-gray-400">License</span>
                            </div>

                            <div className="flex flex-col items-center justify-center px-3">
                                <span className="text-lg font-semibold">22</span>
                                <span className="text-xs text-gray-400">EVs</span>
                            </div>

                            <div className="flex flex-col items-center justify-center px-3">
                                <span className="text-lg font-semibold">5539K</span>
                                <span className="text-xs text-gray-400">WB</span>
                            </div>

                            <div className="flex flex-col items-center justify-center px-3">
                                <MapPin className="h-5 w-5 mb-1" />
                                <span className="text-xs text-gray-400">GPS</span>
                            </div>
                        </div>


                    </div>
                    {/* <ScrollArea className="h-[calc(80vh-90px)] "> */}

                    <div className="space-y-0 h-[calc(90vh-90px)] relative  ">


                        {/* Square Ad */}
                        <div className="overflow-hidden  p-6">
                            <div className="flex h-[300px] w-full rounded-lg items-center justify-center bg-black/40 backdrop-blur-sm">
                                <span className="text-sm text-gray-400">Advertisement</span>
                            </div>
                        </div>




                        {/* Support Us on Patreon */}
                        <div className="absolute   bottom-0 w-full py-0">
                            {/* Tags */}
                            <ProductTags />

                            <div className="w-full font-Oswald bg-gradient-to-br from-gray-900 to-gray-800 p-3  shadow-lg ">
                                <div className="flex items-center ">
                                    <div className="flex h-8 w-8 items-center justify-center rounded mx-4 mb-2 text-white">
                                        <img src="rslogo1.png" className="h-10 w-10" alt="" />
                                    </div>
                                    <h2 className="text-lg font-medium text-white">Support Us on Patreon</h2>
                                </div>

                                <p className="mt-0 text-center text-md font-bold font-Alumni text-gray-300">
                                    Unlock exclusive assets, premium tutorials, and ad-free experience by supporting us on Patreon!
                                </p>

                                <Link
                                    href="https://patreon.com/cghaven"
                                    target="_blank"
                                    className="mt-1 flex w-full items-center justify-center gap-1.5 rounded-md bg-purple-600 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700"
                                >
                                    Join Now on Patreon
                                    <ExternalLink size={14} />
                                </Link>
                            </div>

                            <div className="h-10  pb-0 bg-gray-900"></div>
                        </div>




                    </div>

                    {/* </ScrollArea> */}
                </div>
            </div>

        </>
    )
}

export default ProductSidebar