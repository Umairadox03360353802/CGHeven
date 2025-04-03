'use client'
import Link from "next/link"
import { React, useState } from 'react';
import { Search ,Download ,User,Menu,X} from "lucide-react"

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
  <div className="mx-auto w-full px-4 sm:px-6">
    <div className="flex items-center justify-between h-16">
      {/* Logo and mobile menu button */}
      <div className="flex items-center">
        {/* Mobile menu button - only visible on small screens */}
        <div className="mr-2 flex items-center lg:hidden">
          <MobileMenu />
        </div>
        
        <Link href="/" className="flex flex-row items-center space-x-2">
          <div className="w-8 h-10">
            <img
              src="rslogo1.png"
              alt="ProductionCrate Logo"
              className="w-full h-full"
            />
          </div>
          <span className="text-white text-xl font-Oswald font-semibold">CGHEVEN</span>
        </Link>
      </div>

      {/* Desktop Navigation - hidden on mobile */}
      <div className="hidden lg:flex flex-1 items-center justify-between">
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

        {/* Desktop buttons */}
        <div className="flex items-center space-x-4 font-Oswald text-white">
          <Button variant="ghost" className="text-[1rem]">
            <Download className="mr-2 h-14 w-14" />
            Download App
          </Button>
          <Button className="bg-teal-500 hover:bg-teal-600 text-[1rem]">Join Patreon</Button>
          <Button variant="ghost" className="text-[1rem]">Sign In</Button>
        </div>
      </div>

      {/* Mobile buttons - only visible on mobile */}
      <div className="flex items-center lg:hidden space-x-2">
        <Button variant="ghost" size="icon" className="text-white">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </div>

    {/* Search bar - visible on all screens */}
    <div className="pb-1 lg:block">
      <div className="relative mx-auto">
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

// MobileMenu component (should be defined separately)
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#14161d] bg-opacity-95 overflow-y-auto">
          <div className="flex justify-end p-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="px-6 py-4">
            <nav className="flex flex-col space-y-4 font-Oswald">
              <Link href="/" className="text-[#ff6b08] text-xl py-2" onClick={() => setIsOpen(false)}>
                HOME
              </Link>
              
              <div className="space-y-2">
                <div className="text-[#ff6b08] text-xl py-2">VFX</div>
                <div className="pl-4 space-y-2">
                  <Link href="#" className="text-gray-200 hover:text-[#ff6b08] block py-1" onClick={() => setIsOpen(false)}>
                    Visual Effects
                  </Link>
                  <Link href="#" className="text-gray-200 hover:text-[#ff6b08] block py-1" onClick={() => setIsOpen(false)}>
                    Particle Effects
                  </Link>
                </div>
              </div>
              
              {/* Repeat for other menu items */}
              
              <div className="pt-4 border-t border-gray-800">
                <Button className="max-w-md bg-teal-500 hover:bg-teal-600 text-lg mb-2 mr-4">
                  Join Patreon
                </Button>
                <Button variant="outline" className="max-w-md text-lg">
                  Sign In
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar