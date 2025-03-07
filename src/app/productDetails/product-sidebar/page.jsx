"use client"
import React from "react"
import Link from "next/link"
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
                <div className="w-full  border-l border-white/10 ">
                    <div className="border-b border-white/10 px-0">
                        <div className="">
                            {/* download formats and author profile */}


                            <div className="flex items-center justify-between font-Oswald bg-teal-600 text-white px-4 pb-2 ">
                                <div className="flex flex-col items-center  border-r-white">
                                    <span className="text-sm pt-1 font-bold">4K</span>
                                    <MdKeyboardArrowDown size={20} />

                                </div>
                                <div className="flex flex-col items-center mt-1  border-r-white">
                                    <span ><SiBlender size={20} /></span>
                                    <MdKeyboardArrowDown size={20} />

                                </div>


                                <MdDownload size={20} />
                                <div className="flex flex-col items-center p-1 border-r-white">


                                    <span className="text-base font-normal mr-0">Download</span>
                                    <span className="text-sm font-light">252.58 MB</span>
                                </div>

                                <div>
                                    <GiHamburgerMenu size={25} />

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

                        </div>
                    </div>
                    <ScrollArea className="h-[calc(100vh-90px)] ">

                        <div className="space-y-2 p-0 ">
                            {/* Product Details */}
                            {/* <div className="space-y-4 text-white font-Oswald">
                                <h3 className="text-lg font-semibold">Product Details</h3>
                                <div className="rounded-lg text-white bg-white/5 p-4">
                                    <div className="grid gap-3 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">File Size</span>
                                            <span>24.5 MB</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">Downloads</span>
                                            <span>1,234</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">Created With</span>
                                            <span>Blender 3.6</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">Published</span>
                                            <span>2 days ago</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">License</span>
                                            <span>Premium</span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}



                            {/* Square Ad */}
                            <div className="overflow-hidden p-6">
                                <div className="flex h-[300px] w-full rounded-lg items-center justify-center bg-black/40 backdrop-blur-sm">
                                    <span className="text-sm text-gray-400">Advertisement</span>
                                </div>
                            </div>
                            <div className="h-[10rem]"></div>
                            {/* Support Us on Patreon */}
                            <div className="w-full   font-Oswald bg-gradient-to-br from-gray-900 to-gray-800 p-3  shadow-lg ">
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
                            
                           
                          

                        </div>

                    </ScrollArea>
                </div>
            </div>

        </>
    )
}

export default ProductSidebar