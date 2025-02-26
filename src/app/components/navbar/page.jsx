'use client'
import Link from "next/link"
// import Image from "next/image"
import { React, useState } from 'react';
import { Search ,Download} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>

      {/* <header className="bg-slate-950 sticky top-0 z-20 ">
  <nav className="container mx-auto px-2 py-4 ">
    <div className="flex items-center justify-between ">
      <div className="text-white font-bold ">
        <a href="#" className='font-extrabold text-3xl '>CGHEVEN</a>
      </div>
      <div className="hidden md:block">
        <ul className="flex items-center space-x-8">
          <li><Link href="#" className="text-white font-Montserrat">Assets</Link></li>
          <li><Link href="#" className="text-white font-Montserrat">Support Us</Link></li>
          <li><Link href="#" className="text-white font-Montserrat">Gallery</Link></li>
          <li><Link href="#" className="text-white font-Montserrat">Blog</Link></li>
          <li><Link href="#" className="text-white font-Montserrat">About/Contact</Link></li>
        </ul>
      </div>
      <div className="md:hidden">
        <button className="outline-none mobile-menu-button">
          <svg className="w-6 h-6 text-white" x-show="!showMenu" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
    <div className="mobile-menu hidden md:hidden">
      <ul className="mt-4 space-y-4">
        <li><a href="#" className="block px-4 py-2 text-white bg-gray-900 rounded">Home</a></li>
        <li><a href="#" className="block px-4 py-2 text-white bg-gray-900 rounded">About</a></li>
        <li><a href="#" className="block px-4 py-2 text-white bg-gray-900 rounded">Services</a></li>
        <li><a href="#" className="block px-4 py-2 text-white bg-gray-900 rounded">Contact</a></li>
      </ul>
    </div>
    
  </nav>
</header> */}
      <header className="bg-[#14161d] border-b py-5 items-center border-gray-800">
        <div className=" mx-auto w-full px-5">
          <div className="flex items-center justify-between h-16 ">
            <Link href="/" className="flex flex-row items-center relative ml-14 ">
              <div className="w-20 h-28 absolute right-24 ">

                <img
                  src="logo.png"
                  alt="ProductionCrate Logo"

                  className="w-full h-full"
                />
              </div>
              <span className="text-white text-3xl font-Oswald font-semibold">CGHeven</span>
            </Link>
            {/* dropdown */}
            <NavigationMenu className="py-0 mt-2 flex flex-row items-center left-20 mr-auto ">
              <NavigationMenuList className="gap-1 font-Oswald ">
                <NavigationMenuItem>
                  <Link href="/" className="text-[#ff6b08] text-md bg-transparent px-4 py-2 hover:text-[#ff6b08]">
                    HOME
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem >
                  <NavigationMenuTrigger className=" text-[#ff6b08] text-md [&_svg]:hidden bg-transparent hover:text-[#ff6b08] hover:bg-transparent">
                    VFX
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-[#1c1e26] border border-gray-800">
                      <ul className="grid gap-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#" className="text-gray-200 hover:text-[#ff6b08]">
                              Visual Effects
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#" className="text-gray-200 hover:text-[#ff6b08]">
                              Particle Effects
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[#ff6b08] text-md [&_svg]:hidden bg-transparent hover:text-[#ff6b08] hover:bg-transparent">
                    GRAPHICS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-[#1c1e26] border border-gray-800">
                      <ul className="grid gap-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#" className="text-gray-200 hover:text-[#ff6b08]">
                              Templates
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#" className="text-gray-200 hover:text-[#ff6b08]">
                              Assets
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[#ff6b08] text-md [&_svg]:hidden bg-transparent hover:text-[#ff6b08] hover:bg-transparent">
                    3D
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-[#1c1e26] border border-gray-800">
                      <ul className="grid gap-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#" className="text-gray-200 hover:text-[#ff6b08]">
                              3D Models
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#" className="text-gray-200 hover:text-[#ff6b08]">
                              Textures
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

               
              </NavigationMenuList>
            </NavigationMenu>



            {/* <div className="felx flex-row items-end ">


              <Button className="bg-[#ff6b08] hover:bg-[#ff8534] font-Oswald  text-lg rounded-xl text-white">Patreon</Button>
            </div> */}
             <div className="flex items-center space-x-4  text-white">
              

              <Button variant="ghost" className="hidden lg:flex">
                <Download className="mr-2 h-5 w-5" />
                Download App
              </Button>

              <Button className="bg-teal-500 hover:bg-teal-600">Join Patreon</Button>

              <Button variant="ghost">Sign In</Button>
            </div>
           
          </div>
          {/* searchbar */}

          <div className=" py-4  ">
            <div className="relative  mx-auto">
              <Input
                type="search"
                placeholder="Search"
                className="w-full bg-[#1c1e26] border-gray-700 rounded-xl text-white pr-12"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

        </div>
      </header>

    </>
  )
}

export default Navbar