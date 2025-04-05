import React from 'react'
import PatreonName from '../components/patreon-name/page'
import { MdDownload } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SiBlender } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPatreon } from "react-icons/fa6";
import ProductSidebar from './product-sidebar/page';
import TrendingSection from '../components/trendingSection/page';
import MoreAssets from './more-assets/page';
import ExclusiveAssets from './exclusive-assets/page';
import ProductTutorials from './product-tutorials/page';
// import { Facebook,  Instagram, Linkedin, Share2, Twitter,  } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";





import { Button } from "@/components/ui/button"

// import { Package, FileText, ImageIcon, Layers, CuboidIcon as Cube } from "lucide-react"
// import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar"







function ProductDetails() {
    return (
        <>
            <div className="flex h-screen ">
                <div className="flex-1 flex flex-col overflow-y-hidden ">

                    <div className="flex h-full">

                        <main className="flex flex-col w-full bg-gray-900 overflow-x-hidden overflow-y-auto [&::-webkit-scrollbar]:hidden mb-1">
                            <div className="flex w-full mx-auto  px-0  py-0">

                                <div className="flex flex-col  w-full h-full text-gray-900 text-xl ">


                                    <div className="flex flex-col md:flex-row w-full md:w-full h-auto items-center justify-center mx-auto bg-gray-900 border-b border-gray-600">
                                        {/* Square Ad */}
                                        <div className="overflow-hidden  md:h-full md:w-[160px] w-full h-[90px]  basis-0.5/3 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                                            <div className="flex h-full w-full items-center justify-center bg-black/60 backdrop-blur-sm">
                                                <span className="text-sm text-center text-gray-700 ">1 Advertisement</span>
                                            </div>
                                        </div>


                                        <div className="flex flex-row  items-center justify-center  mx-auto h-full w-full bg-gray-900">


                                            <div className='  aspect-auto bg-transparent'>
                                                <img className="h-full w-full  " src="./rusty_metal_04.webp" alt="" />
                                            </div>

                                        </div>

                                    </div>

                                    <div className="flex w-full py-4 md:py-8 max-w-full items-center justify-center mx-auto bg-gray-900 border-b border-gray-600">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 px-4 md:px-6">
    <div className="aspect-square">
      <img 
        className="w-full h-24 md:h-28 object-cover rounded-lg" 
        src="https://cdn.polyhaven.com/asset_img/renders/fancy_picture_frame_01/clay.png?height=110" 
        alt="" 
      />
    </div>
    <div className="aspect-square">
      <img 
        className="w-full h-24 md:h-28 object-cover rounded-lg" 
        src="https://cdn.polyhaven.com/asset_img/primary/fancy_picture_frame_01.png?height=110" 
        alt="" 
      />
    </div>
    <div className="aspect-square">
      <img 
        className="w-full h-24 md:h-28 object-cover rounded-lg" 
        src="https://cdn.polyhaven.com/asset_img/renders/fancy_picture_frame_01/orth_front.png?height=110" 
        alt="" 
      />
    </div>
    <div className="aspect-square">
      <img 
        className="w-full h-24 md:h-28 object-cover rounded-lg" 
        src="https://cdn.polyhaven.com/asset_img/renders/fancy_picture_frame_01/orth_front.png?height=110" 
        alt="" 
      />
    </div>
  </div>
</div>
                                    {/* Product Details */}
                                    <div className="space-y-4 p-8 text-white font-Oswald">
                                        <h1 className="text-4xl font-bold">Sci-Fi Drone Model</h1>
                                        <h2 className="text-xl font-semibold text-gray-500">High-quality sci-fi drone model perfect for games and VFX</h2>
                                        {/* <h3 className="text-xl font-semibold">Product Details</h3> */}

                                    </div>

                                    {/* Social Share */}
                                    <div className="flex items-center gap-6 px-8 py-4 mb-6">
                                        <span className="text-lg font-bold text-muted-foreground">Share:</span>
                                        <div  >
                                    
                                            <FaXTwitter  color='white'  size={30}/>

                                        </div>
                                        <div  >
                                        
                                            <FiFacebook  color='white'  size={30}/>

                                        </div>
                                        <div  >
                                            
                                            <FaInstagram color='white'  size={30} />

                                        </div>
                                        <div  >
                                        
                                            <FiLinkedin color='white'  size={30}/>

                                        </div>
                                        
                                       <div >

                                       <IoShareSocialOutline color='white'  size={30} />

                                       </div>


                                        
                                    </div>

                                    <div className='w-full border-b border-gray-600'></div>
                                    {/* similar assets */}
                                    <MoreAssets />
                                    <ExclusiveAssets />
                                    <ProductTutorials />
                                    {/* <div className="flex flex-col w-full min-w-full  items-center justify-center  bg-gray-900 border-b border-gray-600"> */}





                                        {/*Exclusive partreon Assets and tutorials  */}
                                        {/* <ExclusiveAssets /> */}
                                        {/* <ProductTutorials /> */}



                                        {/* gallery */}

                                        {/* <div className='mb-8 pr-2 mt-5 text-white flex flex-row justify-center items-center gap-4'>
                                            <h1 className='font-extrabold font-Oswald text-4xl text-center mb-6'>User Renders:</h1>
                                            <button className="flex items-center font-Oswald mb-5 px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-[#88e5e9] focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                                </svg>
                                                Add yours
                                            </button>


                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-3 px-10 gap-4">
                                            <div className="grid gap-4">
                                                <div>
                                                    <img className="h-full max-w-full rounded-lg" src="https://cdn.polyhaven.com/gallery/4dc1234b87779384bb1b.jpg?width=460" alt="" />
                                                </div>
                                                <div>
                                                    <img className="h-full max-w-full rounded-lg" src="https://cdn.polyhaven.com/gallery/c2a85ef41e2439951bc9.jpg?width=460" alt="" />
                                                </div>
                                                <div>
                                                    <img className="h-full max-w-full rounded-lg" src="https://cdn.polyhaven.com/gallery/07ea3b431c60b5055d5d.jpg?width=460" alt="" />
                                                </div>
                                            </div>
                                            <div className="grid gap-4">
                                                <div>
                                                    <img className="h-full max-w-full rounded-lg" src="https://cdn.polyhaven.com/gallery/9e766d68071d3bb29103.jpg?width=460" alt="" />
                                                </div>
                                                <div>
                                                    <img className="h-full max-w-full rounded-lg" src="https://cdn.polyhaven.com/gallery/3bae896439028fe2de50.jpg?width=460" alt="" />
                                                </div>
                                                <div>
                                                    <img className="h-full max-w-full rounded-lg" src="https://cdn.polyhaven.com/gallery/860840866012b0aea6c0.jpg?width=460" alt="" />
                                                </div>
                                            </div>
                                            <div className="grid gap-4">
                                                <div>
                                                    <img className="h-full max-w-full rounded-lg" src="https://cdn.polyhaven.com/gallery/6ddd19758fd3d76f15dd.jpg?width=460" alt="" />
                                                </div>
                                                <div>
                                                    <img className="h-full max-w-full rounded-lg" src="https://cdn.polyhaven.com/gallery/9e6ba1f093ac782729d6.jpg?width=460" alt="" />
                                                </div>
                                                <div>
                                                    <img className="h-full max-w-full rounded-lg" src="https://cdn.polyhaven.com/gallery/a1c3de2bca4b6c6eb288.jpg?width=460" alt="" />
                                                </div>
                                            </div>

                                        </div> */}




                                    {/* </div> */}
                                    {/* <div className="flex w-full max-w-full h-60 items-center justify-center mx-auto bg-gray-900 border-b border-gray-600">
                                        <PatreonName />
                                    </div> */}
                                    {/* <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post</div> */}
                                </div>
                            </div>
                        </main>
                        {/* right side */}
                        <nav className="flex w-0 md:w-[50vh] h-full bg-gray-800">
                            <div className="w-full h-full flex flex-col justify-start mx-auto">



                                <ProductSidebar />
                            </div>


                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductDetails
