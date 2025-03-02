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
// import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar"







function ProductDetails() {
    return (
        <>
            <div className="flex h-screen ">
                <div className="flex-1 flex flex-col overflow-y-hidden ">

                    <div className="flex h-full">

                        <main className="flex flex-col w-full bg-slate-950 overflow-x-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full mb-1">
                            <div className="flex w-full mx-auto  px-0  py-0">

                                <div className="flex flex-col  w-full h-full text-gray-900 text-xl ">


                                    <div className="flex flex-row w-full max-w-full  h-screen items-center justify-center mx-auto bg-[#0a1022] border-b border-gray-600">
                                        {/* Square Ad */}
                                        <div className="overflow-hidden rounded-lg h-[600px] w-[160px] m-4 basis-0.5/3 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                                            <div className="flex h-full w-full items-center justify-center bg-black/60 backdrop-blur-sm">
                                                <span className="text-sm text-center text-gray-700">Advertisement</span>
                                            </div>
                                        </div>


                                        <div className="flex flex-row  mt-4 p-0 mx-auto h-auto  bg-[#0a1022]">


                                            <div className=' p-8 basis-2/3 bg-slate-800' >
                                                <img className="h-full max-w-xl  mx-auto rounded-lg" src="https://cdn.polyhaven.com/asset_img/renders/fancy_picture_frame_01/orth_front.png?height=720" alt="" />
                                            </div>

                                        </div>

                                    </div>
                                    <div className="flex  w-full py-8  max-w-full h-60 items-center justify-center mx-auto bg-slate-950 border-b border-gray-600">

                                        <div className="grid grid-cols-4  gap-4 px-6 ">
                                            <div>
                                                <img className="h-auto max-w-full rounded-lg" src="https://cdn.polyhaven.com/asset_img/renders/fancy_picture_frame_01/clay.png?height=110" alt="" />
                                            </div>
                                            <div>
                                                <img className="h-auto max-w-full rounded-lg" src="https://cdn.polyhaven.com/asset_img/primary/fancy_picture_frame_01.png?height=110" alt="" />
                                            </div>
                                            <div>
                                                <img className="h-auto max-w-full rounded-lg" src="https://cdn.polyhaven.com/asset_img/renders/fancy_picture_frame_01/orth_front.png?height=110" alt="" />
                                            </div>
                                            <div>
                                                <img className="h-auto max-w-full rounded-lg" src="https://cdn.polyhaven.com/asset_img/renders/fancy_picture_frame_01/orth_front.png?height=110" alt="" />
                                            </div>

                                        </div>
                                    </div>
                                    {/* similar assets */}
                                    <MoreAssets />
                                    <div className="flex flex-col w-full max-w-full h-auto items-center justify-center mx-auto bg-[#0a1022] border-b border-gray-600">
                                       



                                       
                                        {/*Exclusive partreon Assets and tutorials  */}
                                        <ExclusiveAssets />
                                        <ProductTutorials />
                                        

                                       
                                        {/* gallery */}

                                        <div className='mb-8 pr-2 mt-5 text-white flex flex-row justify-center items-center gap-4'>
                                            <h1 className='font-extrabold font-Oswald text-4xl text-center mb-6'>User Renders:</h1>
                                            <button className="flex items-center font-Oswald mb-5 px-6 py-3 bg-slate-950 text-white font-semibold rounded-xl hover:bg-[#88e5e9] focus:outline-none focus:ring-2 focus:ring-blue-500">
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

                                        </div>




                                    </div>
                                    <div className="flex w-full max-w-full h-60 items-center justify-center mx-auto bg-slate-950 border-b border-gray-600">
                                        <PatreonName />
                                    </div>
                                    {/* <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post</div> */}
                                </div>
                            </div>
                        </main>
                        {/* right side */}
                        <nav className="flex w-[80vh] h-full bg-slate-950">
                            <div className="w-full h-full flex flex-col justify-start mx-auto px-0 py-0">

                                {/* <div className="flex items-center justify-between bg-[#88e5e9] text-white px-4 py-2 rounded-lg">
                                    <div className="flex flex-col items-center  border-r-white">
                                        <span className="text-xl font-extrabold">4K</span>
                                        <MdKeyboardArrowDown size={25} />

                                    </div>
                                    <div className="flex flex-col items-center  border-r-white">
                                        <span ><SiBlender size={30} /></span>
                                        <MdKeyboardArrowDown size={25} />

                                    </div>
                                    

                                    <div className="flex items-center  border-r-white">
                                       
                                        <MdDownload size={28}/>

                                        <span className="text-xl font-bold mr-2">Download</span>
                                        <span className="text-lg font-semibold">252.58 MB</span>
                                    </div>

                                    <div>
                                    <GiHamburgerMenu size={30} />

                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-4'>

                                    <div className='flex flex-row justify-start items-center w-full mt-3'>
                                        <h1 className='text-start text-white font-bold'>Author:</h1>
                                        <div className='w-16 h-16 ml-28 rounded-full bg-slate-500'>
                                            <img src="/main.jpg" className='rounded-full' alt="" />
                                        </div>
                                        <div className=' text-white font-bold text-end ml-2'><h1>Ammar Khan</h1></div>
                                    </div>
                                    <div className='flex flex-row justify-center items-center gap-4'>
                                        <div className='flex flex-col justify-center items-center'>

                                            <h1 className='text-white font-bold'>CC0</h1>
                                            <h2 className='text-white'>License</h2>
                                        </div>
                                        <div className='flex flex-col justify-center items-center'>

                                            <h1 className='text-white font-bold'>0.5m</h1>
                                            <h2 className='text-white'>tall</h2>
                                        </div>
                                        <div className='flex flex-col justify-center items-center'>

                                            <h1 className='text-white font-bold'>105.6</h1>
                                            <h2 className='text-white'>px/cm</h2>
                                        </div>
                                        <div className='flex flex-col justify-center items-center'>

                                            <h1 className='text-white font-bold'>17K</h1>
                                            <h2 className='text-white'>Tris</h2>
                                        </div>

                                    </div>
                                    <div className='flex flex-row justify-start items-start text-white w-[100%] gap-2'>
                                        <h1 className=' font-bold'>Downloads:</h1>
                                        <p>70509</p>
                                    </div>

                                </div>
                                <div className='h-[20vh]'></div>
                                <div className='flex flex-col justify-center items-center'>
                                    <p className='text-white'>Sponsord by:</p>
                                    <h1 className='font-bold text-[#88e5e9] text-2xl underline'>Ammar Khan</h1>
                                </div>
                                <div className='h-[17vh]'></div>
                                <div className='flex flex-col justify-center'>
                                    <div className='flex flex-row justify-start items-start gap-2'>
                                        <h1 className='text-white font-bold'>Categories:</h1>
                                        <button className="bg-transparent hover:bg-[#88e5e9] text-slate-400  hover:text-white text-sm py-1 px-2 border border-[#88e5e9] hover:border-transparent rounded">
                                            Button
                                        </button>
                                        <button className="bg-transparent hover:bg-[#88e5e9] text-slate-400  hover:text-white text-sm py-1 px-2 border border-[#88e5e9] hover:border-transparent rounded">
                                            Button
                                        </button>
                                        <button className="bg-transparent hover:bg-[#88e5e9] text-slate-400  hover:text-white text-sm py-1 px-2 border border-[#88e5e9] hover:border-transparent rounded">
                                            Button
                                        </button>
                                    </div>
                                    <div className='flex flex-row justify-start items-start gap-2'>
                                        <h1 className='text-white font-bold'>Tags:</h1>
                                        <button className="bg-transparent hover:bg-[#88e5e9] text-slate-400  hover:text-white text-sm py-1 px-2 border border-[#88e5e9] hover:border-transparent rounded">
                                            Button
                                        </button>
                                        <button className="bg-transparent hover:bg-[#88e5e9] text-slate-400  hover:text-white text-sm py-1 px-2 border border-[#88e5e9] hover:border-transparent rounded">
                                            Button
                                        </button>
                                        <button className="bg-transparent hover:bg-[#88e5e9] text-slate-400  hover:text-white text-sm py-1 px-2 border border-[#88e5e9] hover:border-transparent rounded">
                                            Button
                                        </button>
                                    </div>
                                    <div className='flex flex-row justify-start items-start gap-2'>
                                        <h1 className='text-white font-bold'>Relased:</h1>
                                        <p className='text-slate-400'> 3 years</p>

                                    </div>
                                </div> */}

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
