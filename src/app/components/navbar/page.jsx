'use client'
import Link from "next/link"
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


      <header className="bg-[#14161d] border-b pb-1 items-center border-gray-800">
        <div className=" mx-auto w-full px-6">
          <div className="flex items-center justify-between h-16 ">
            <Link href="/" className="flex flex-row items-center space-x-2">
              <div className="w-8 h-10 ">

                <img
                  src="rslogo1.png"
                  alt="ProductionCrate Logo"

                  className="w-full h-full"
                />
              </div>
              <span className="text-white text-xl font-Oswald font-semibold">CGHEVEN</span>
            </Link>
            {/* dropdown */}
            <NavigationMenu className="py-0 mt-2 flex flex-row items-center left-20 mr-auto ">
              <NavigationMenuList className="gap-1 font-Oswald ">
                <NavigationMenuItem>
                  <Link href="/" className="text-[#ff6b08] text-[1rem] bg-transparent px-4 py-2 hover:text-[#ff6b08]">
                    HOME
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem >
                  <NavigationMenuTrigger className=" text-[#ff6b08] text-[1rem] [&_svg]:hidden bg-transparent hover:text-[#ff6b08] hover:bg-transparent">
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

                <NavigationMenuItem >
                  <NavigationMenuTrigger className=" text-[#ff6b08] text-[1rem] [&_svg]:hidden bg-transparent hover:text-[#ff6b08] hover:bg-transparent">
                  3D Assets
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

                <NavigationMenuItem >
                  <NavigationMenuTrigger className=" text-[#ff6b08] text-[1rem] [&_svg]:hidden bg-transparent hover:text-[#ff6b08] hover:bg-transparent">
                    Materials
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

                <NavigationMenuItem >
                  <NavigationMenuTrigger className=" text-[#ff6b08] text-[1rem] [&_svg]:hidden bg-transparent hover:text-[#ff6b08] hover:bg-transparent">
                    Flipbooks
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

                <NavigationMenuItem >
                  <NavigationMenuTrigger className=" text-[#ff6b08] text-[1rem] [&_svg]:hidden bg-transparent hover:text-[#ff6b08] hover:bg-transparent">
                    VDBs
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

                <NavigationMenuItem >
                  <NavigationMenuTrigger className=" text-[#ff6b08] text-[1rem] [&_svg]:hidden bg-transparent hover:text-[#ff6b08] hover:bg-transparent">
                    Tutorials
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

                <NavigationMenuItem >
                  <NavigationMenuTrigger className=" text-[#ff6b08] text-[1rem] [&_svg]:hidden bg-transparent hover:text-[#ff6b08] hover:bg-transparent">
                    Gallery
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

               

               
              </NavigationMenuList>
            </NavigationMenu>



          
             <div className="flex items-center space-x-4 font-Oswald  text-white">
              

              <Button variant="ghost" className="hidden lg:flex text-[1rem]">
                <Download className="mr-2 h-14 w-14 " />
                Download App
              </Button>

              <Button className="bg-teal-500 hover:bg-teal-600 text-[1rem]">Join Patreon</Button>

              <Button variant="ghost" className="text-[1rem]">Sign In</Button>
            </div>
           
          </div>
          {/* searchbar */}

          <div className=" pb-1  ">
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