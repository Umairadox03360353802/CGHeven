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

                <NavigationMenuItem >
                  <NavigationMenuTrigger className=" text-[#ff6b08] text-md [&_svg]:hidden bg-transparent hover:text-[#ff6b08] hover:bg-transparent">
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
                  <NavigationMenuTrigger className=" text-[#ff6b08] text-md [&_svg]:hidden bg-transparent hover:text-[#ff6b08] hover:bg-transparent">
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
                  <NavigationMenuTrigger className=" text-[#ff6b08] text-md [&_svg]:hidden bg-transparent hover:text-[#ff6b08] hover:bg-transparent">
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
                  <NavigationMenuTrigger className=" text-[#ff6b08] text-md [&_svg]:hidden bg-transparent hover:text-[#ff6b08] hover:bg-transparent">
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
                  <NavigationMenuTrigger className=" text-[#ff6b08] text-md [&_svg]:hidden bg-transparent hover:text-[#ff6b08] hover:bg-transparent">
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
                  <NavigationMenuTrigger className=" text-[#ff6b08] text-md [&_svg]:hidden bg-transparent hover:text-[#ff6b08] hover:bg-transparent">
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



            {/* <div className="felx flex-row items-end ">


              <Button className="bg-[#ff6b08] hover:bg-[#ff8534] font-Oswald  text-lg rounded-xl text-white">Patreon</Button>
            </div> */}
             <div className="flex items-center space-x-4 font-Oswald text-white">
              

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