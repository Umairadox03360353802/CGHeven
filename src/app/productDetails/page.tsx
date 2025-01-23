import React from 'react'
import PatreonName from '../components/patreon-name/page'
import { MdDownload } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SiBlender } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPatreon } from "react-icons/fa6";






function ProductDetails() {
    return (
        <>
            <div className="flex h-screen ">
                <div className="flex-1 flex flex-col overflow-y-hidden ">
                    {/* <header className="flex justify-between items-center bg-blue-300 p-4">
                        <div className="flex">Left</div>
                        <div className="flex">Right</div>
                    </header> */}
                    <div className="flex h-full">
                        {/* <nav className="flex w-72 h-full bg-pink-500">
                            <div className="w-full flex mx-auto px-6 py-8">
                                <div className="w-full h-full flex items-center justify-center text-gray-900 text-xl border-4 border-gray-900 border-dashed">Sidebar</div>
                            </div>
                        </nav> */}
                        <main className="flex flex-col w-full bg-slate-950 overflow-x-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full mb-1">
                            <div className="flex w-full mx-auto  px-0  py-0">
                                <div className="flex flex-col  w-full h-full text-gray-900 text-xl ">
                                    <div className="flex w-full max-w-full  h-screen items-center justify-center mx-auto bg-[#0a1022] border-b border-gray-600">



                                        <div className="grid gap-4 mt-12 px-56  bg-[#0a1022]">
                                            <div>
                                                <img className="h-auto max-w-full mb-4 rounded-lg" src="https://cdn.polyhaven.com/asset_img/renders/fancy_picture_frame_01/orth_front.png?height=720" alt="" />
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
                                    <div className="flex flex-col w-full max-w-full h-auto items-center justify-center mx-auto bg-[#0a1022] border-b border-gray-600">
                                        <div className='mb-8 pr-2 mt-5 text-white '>
                                            <h1 className='font-extrabold font-Montserrat text-4xl text-center mb-6'>Similar Assets</h1>

                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-20 px-24 mb-6">

                                            <div>
                                                <img className="h-auto max-w-full rounded-lg " src="https://cdn.polyhaven.com/asset_img/primary/fancy_picture_frame_02.png?height=720" alt="" />
                                            </div>
                                            <div>
                                                <img className="h-auto max-w-full rounded-lg" src="https://cdn.polyhaven.com/asset_img/primary/hanging_picture_frame_03.png?height=720" alt="" />
                                            </div>
                                            <div>
                                                <img className="h-auto max-w-full rounded-lg" src="https://cdn.polyhaven.com/asset_img/primary/hanging_picture_frame_02.png?height=720" alt="" />
                                            </div>
                                            <div>
                                                <img className="h-auto max-w-full rounded-lg" src="https://cdn.polyhaven.com/asset_img/primary/brass_goblets.png?height=720" alt="" />
                                            </div>
                                            <div>
                                                <img className="h-auto max-w-full rounded-lg" src="https://cdn.polyhaven.com/asset_img/primary/jug_01.png?height=720" alt="" />
                                            </div>
                                            <div>
                                                <img className="h-auto max-w-full rounded-lg" src="https://cdn.polyhaven.com/asset_img/primary/ceramic_vase_01.png?height=720" alt="" />
                                            </div>

                                        </div>
                                        {/*Exclusive Aartreon Assets  */}
                                        <div className='mb-8 pr-2 mt-5 text-white '>
                                            <h1 className='font-extrabold font-Montserrat text-4xl text-center mb-6'>Exclusive Partreon Assets</h1>

                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-3  gap-28 px-24 mb-6">

                                            <div className='relative'>
                                                <img className="h-auto max-w-full  blur-lg hover:blur-0 rounded-lg " src="https://cdn.polyhaven.com/asset_img/primary/fancy_picture_frame_02.png?height=720" alt="" />
                                                <div className='w-8 h-8 rounded-full bg-cyan-400 absolute top-0 right-0 flex justify-center items-center'><FaPatreon color='white' size={20}/>
                                                </div>
                                            </div>
                                            <div className='relative'>
                                                <img className="h-auto max-w-full   rounded-lg" src="https://cdn.polyhaven.com/asset_img/primary/hanging_picture_frame_03.png?height=720" alt="" />
                                                <div className='w-8 h-8 rounded-full bg-lime-500 absolute top-0 right-0  flex justify-center items-center'>
                                                </div>
                                            </div>
                                            <div>
                                                <img className="h-auto max-w-full rounded-lg" src="https://cdn.polyhaven.com/asset_img/primary/hanging_picture_frame_02.png?height=720" alt="" />
                                            </div>
                                            <div>
                                                <img className="h-auto max-w-full rounded-lg" src="https://cdn.polyhaven.com/asset_img/primary/brass_goblets.png?height=720" alt="" />
                                            </div>
                                            <div>
                                                <img className="h-auto max-w-full rounded-lg" src="https://cdn.polyhaven.com/asset_img/primary/jug_01.png?height=720" alt="" />
                                            </div>
                                            <div>
                                                <img className="h-auto max-w-full rounded-lg" src="https://cdn.polyhaven.com/asset_img/primary/ceramic_vase_01.png?height=720" alt="" />
                                            </div>

                                        </div>
                                        {/* renders */}

                                        <div className='mb-8 pr-2 mt-5 text-white flex flex-row justify-center items-center gap-4'>
                                            <h1 className='font-extrabold font-Montserrat text-4xl text-center mb-6'>User Renders:</h1>
                                            <button className="flex items-center mb-5 px-6 py-3 bg-slate-950 text-white font-semibold rounded-xl hover:bg-[#88e5e9] focus:outline-none focus:ring-2 focus:ring-blue-500">
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
                            <div className="w-full flex flex-col justify-start mx-auto px-6 py-8">
                                {/* <div className="w-full h-full flex items-center justify-center text-gray-900 text-xl border-4 border-gray-900 border-dashed">Rightbar</div> */}

                                <div className="flex items-center justify-between bg-[#88e5e9] text-white px-4 py-2 rounded-lg">
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
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <div classNameName="font-[sans-serif] p-4 bg-gray-100">
                <div classNameName="lg:max-w-6xl  max-w-full mx-auto">
                    <div classNameName="grid items-start justify-between grid-cols-1 lg:grid-cols-2 gap-8 max-lg: max-sm:gap-8">
                        <div classNameName="w-[100vh] lg:sticky top-0">
                            <div classNameName="flex flex-col w-[100vh] gap-4">
                                <div classNameName="bg-white shadow p-2 w-full">
                                    <img src="https://readymadeui.com/images/sunscreen-img-1.webp" alt="Product"
                                        classNameName="w-full   object-cover object-top" />
                                        helo
                                </div>
                                <div classNameName="bg-white p-2 w-full max-w-full overflow-auto">
                                    <div classNameName="flex justify-between flex-row gap-4 shrink-0">
                                        <img src="https://readymadeui.com/images/sunscreen-img-1.webp" alt="Product1"
                                            classNameName="w-16 h-16 aspect-square object-cover object-top cursor-pointer shadow-md border-b-2 border-black" />
                                        <img src="https://readymadeui.com/images/sunscreen-img-2.webp" alt="Product2"
                                            classNameName="w-16 h-16 aspect-square object-cover object-top cursor-pointer shadow-md border-b-2 border-transparent" />
                                        <img src="https://readymadeui.com/images/sunscreen-img-3.webp" alt="Product3"
                                            classNameName="w-16 h-16 aspect-square object-cover object-top cursor-pointer shadow-md border-b-2 border-transparent" />
                                        <img src="https://readymadeui.com/images/sunscreen-img-4.webp" alt="Product4"
                                            classNameName="w-16 h-16 aspect-square object-cover object-top cursor-pointer shadow-md border-b-2 border-transparent" />
                                        <img src="https://readymadeui.com/images/sunscreen-img-5.webp" alt="Product5"
                                            classNameName="w-16 h-16 aspect-square object-cover object-top cursor-pointer shadow-md border-b-2 border-transparent" />
                                        <img src="https://readymadeui.com/images/sunscreen-img-6.webp" alt="Product6"
                                            classNameName="w-16 h-16 aspect-square object-cover object-top cursor-pointer shadow-md border-b-2 border-transparent" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div classNameName="w-full ml-64 bg-blue-600 h-full bottom-0 ">
                            <div>
                                <h3 classNameName="text-lg sm:text-xl font-bold text-gray-800">SunProtect Sunscreen SPF</h3>
                                <div classNameName="flex items-center gap-3 mt-1">
                                    <div classNameName="flex items-center gap-1">
                                        <p classNameName="text-base text-gray-500">4</p>
                                        <svg classNameName="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg classNameName="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg classNameName="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg classNameName="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg classNameName="w-4 h-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                    </div>
                                    <span classNameName="text-gray-500">|</span>
                                    <p classNameName="text-sm text-gray-500">76 Ratings</p>
                                    <span classNameName="text-gray-500">|</span>
                                    <p classNameName="text-sm text-gray-500">50 Reviews</p>
                                </div>
                                <div classNameName="mt-2">
                                    <p classNameName="text-gray-500 mt-1 text-sm">Contains Vitamin E and Green Tea Extract to protect, nourish, and
                                        hydrate the skin while providing antioxidant benefits to combat free radicals and promote a healthy
                                        complexion.</p>
                                </div>

                                <div classNameName="flex items-center flex-wrap gap-2 mt-4">
                                    <p classNameName="text-gray-500 text-base">$16</p>
                                    <h4 classNameName="text-purple-800 text-2xl sm:text-3xl font-bold">$12</h4>
                                    <div classNameName="flex py-1 px-2 bg-purple-600 font-semibold !ml-4">
                                        <span classNameName="text-white text-sm">save 10%</span>
                                    </div>
                                </div>

                                <div>
                                    <h4 classNameName="text-base mt-4 text-gray-500 font-semibold">Net Wt: 100G</h4>
                                </div>
                            </div>

                            <hr classNameName="my-6 border-gray-300" />

                            <div>
                                <div classNameName="flex gap-2 items-center border border-gray-300 bg-white px-3 py-2.5 w-max">
                                    <button type="button" classNameName="border-none outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" classNameName="w-2.5 h-2.5" viewBox="0 0 121.805 121.804">
                                            <path
                                                d="M7.308 68.211h107.188a7.309 7.309 0 0 0 7.309-7.31 7.308 7.308 0 0 0-7.309-7.309H7.308a7.31 7.31 0 0 0 0 14.619z"
                                                data-original="#000000" />
                                        </svg>
                                    </button>
                                    <span classNameName="text-gray-800 text-sm font-semibold px-3">1</span>
                                    <button type="button" classNameName="border-none outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" classNameName="w-2.5 h-2.5" viewBox="0 0 512 512">
                                            <path
                                                d="M256 509.892c-19.058 0-34.5-15.442-34.5-34.5V36.608c0-19.058 15.442-34.5 34.5-34.5s34.5 15.442 34.5 34.5v438.784c0 19.058-15.442 34.5-34.5 34.5z"
                                                data-original="#000000" />
                                            <path
                                                d="M475.392 290.5H36.608c-19.058 0-34.5-15.442-34.5-34.5s15.442-34.5 34.5-34.5h438.784c19.058 0 34.5 15.442 34.5 34.5s-15.442 34.5-34.5 34.5z"
                                                data-original="#000000" />
                                        </svg>
                                    </button>
                                </div>

                                <div classNameName="mt-4 flex flex-wrap gap-4">
                                    <button type="button"
                                        classNameName="px-4 py-3 w-[45%] border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 text-sm font-semibold">Add
                                        to cart</button>
                                    <button type="button"
                                        classNameName="px-4 py-3 w-[45%] border border-purple-600 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold">Buy
                                        it now</button>
                                </div>
                            </div>

                            <hr classNameName="my-6 border-gray-300" />

                            <div>
                                <h3 classNameName="text-lg sm:text-xl font-bold text-gray-800">Select Delivery Location</h3>
                                <p classNameName="text-gray-500 text-sm mt-1">Enter the pincode of your area to check product availability.</p>
                                <div classNameName='flex items-center gap-2 mt-4 max-w-sm'>
                                    <input type='number' placeholder='Enter pincode'
                                        classNameName='bg-white px-4 py-2.5 text-sm w-full  border border-gray-300 outline-0' />
                                    <button type='button'
                                        classNameName='border border-purple-600 outline-none bg-purple-600 hover:bg-purple-700 text-white  px-4 py-2.5 text-sm'>Apply</button>
                                </div>
                            </div>

                            <div classNameName='flex justify-between gap-4 mt-6'>
                                <div classNameName="text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" classNameName="w-8 h-8 fill-purple-600 inline" viewBox="0 0 64 64">
                                        <g data-name="Layer 2">
                                            <path
                                                d="M59.89 13.36 49.73 7.495a4.21 4.21 0 0 0-4.2 0l-10.163 5.867A4.213 4.213 0 0 0 33.267 17v11.733a4.213 4.213 0 0 0 2.1 3.637L45.53 38.24a4.217 4.217 0 0 0 4.2 0l10.161-5.867a4.213 4.213 0 0 0 2.1-3.637V17a4.212 4.212 0 0 0-2.1-3.64zm-1.5 15.372a.6.6 0 0 1-.3.52L47.931 35.12a.62.62 0 0 1-.26.07V24.697a2.4 2.4 0 0 0-1.125-2.031l-9.56-6.008a.593.593 0 0 1 .181-.18l10.163-5.866a.592.592 0 0 1 .299-.08.607.607 0 0 1 .3.08l10.161 5.865a.6.6 0 0 1 .3.521zm-4.07 16.024H42.452a5.977 5.977 0 0 0-.583-2.565 5.581 5.581 0 0 0-3.348-2.926l-9.75-3.084a6.558 6.558 0 0 0-4.028.017l-8.899 2.882a4.2 4.2 0 0 0-3.797-2.433H6.21a4.2 4.2 0 0 0-4.2 4.2v15.73a4.2 4.2 0 0 0 4.2 4.2h5.838a4.192 4.192 0 0 0 3.96-2.858h6.75a1.92 1.92 0 0 1 .815.193l7.331 3.006a11.425 11.425 0 0 0 7.649.353l15.76-4.81a7.12 7.12 0 0 0 4.835-6.96 4.93 4.93 0 0 0-4.827-4.945zM12.647 56.578a.6.6 0 0 1-.6.6H6.21a.6.6 0 0 1-.6-.6V40.852a.6.6 0 0 1 .6-.6h5.838a.6.6 0 0 1 .6.6zm40.518-3.324-15.663 4.778a7.84 7.84 0 0 1-5.233-.24l-7.262-2.974a5.428 5.428 0 0 0-2.247-.498h-6.515V42.74l9.6-3.12a2.98 2.98 0 0 1 1.83-.008l9.749 3.084a2.009 2.009 0 0 1 1.2 1.07 2.407 2.407 0 0 1 .089 1.894 1.966 1.966 0 0 1-2.064 1.338l-8.572-1.2a1.8 1.8 0 0 0-.502 3.565l8.573 1.2a5.406 5.406 0 0 0 5.152-2.209h13.02a1.334 1.334 0 0 1 1.231 1.417c0 .047 0 .094.006.14a3.445 3.445 0 0 1-2.392 3.343zM21.62 32.167a1.8 1.8 0 0 0 1.8-1.8V29a1.578 1.578 0 0 0 .227-.022 5.214 5.214 0 0 0-.36-10.416h-3.058a1.628 1.628 0 0 1-.01-3.257h5.89a1.8 1.8 0 0 0 0-3.6h-2.69v-1.356a1.8 1.8 0 0 0-3.6 0v1.395a5.202 5.202 0 0 0 .048 10.38 1.81 1.81 0 0 0 .36.036h3.054a1.627 1.627 0 1 1 0 3.254H16.52a1.8 1.8 0 0 0 0 3.6h3.3v1.357a1.8 1.8 0 0 0 1.8 1.796z"
                                                data-original="#000000" />
                                            <path
                                                d="M8.764 32.376a1.8 1.8 0 0 0 1.411-2.914 14.578 14.578 0 0 1-3.15-9.102 14.724 14.724 0 0 1 24.7-10.836 1.8 1.8 0 0 0 2.435-2.65A18.326 18.326 0 0 0 7.345 31.692a1.8 1.8 0 0 0 1.42.685z"
                                                data-original="#000000" />
                                        </g>
                                    </svg>
                                    <p classNameName='text-gray-500 text-xs sm:text-sm mt-3'>COD available</p>
                                </div>
                                <div classNameName="text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" classNameName="w-8 h-8 fill-purple-600 inline" viewBox="0 0 100 100">
                                        <path
                                            d="M98 50c0 26.467-21.533 48-48 48S2 76.467 2 50c0-1.658 1.342-3 3-3s3 1.342 3 3c0 23.159 18.841 42 42 42s42-18.841 42-42S73.159 8 50 8c-11.163 0-21.526 4.339-29.322 12H32c1.658 0 3 1.342 3 3s-1.342 3-3 3H14c-1.658 0-3-1.342-3-3V5c0-1.658 1.342-3 3-3s3 1.342 3 3v10.234C25.851 6.786 37.481 2 50 2c26.467 0 48 21.533 48 48zM77 38v27c0 1.251-.776 2.37-1.945 2.81l-24 9a3.04 3.04 0 0 1-2.11 0l-24-9A3.003 3.003 0 0 1 23 65V38c0-1.251.776-2.37 1.945-2.81l24-9a3.036 3.036 0 0 1 2.109 0l24 9A3.002 3.002 0 0 1 77 38zm-42.457 0L50 43.795 65.457 38 50 32.205zM29 62.92l18 6.75V49.08l-18-6.75zm42 0V42.33l-18 6.75v20.59z"
                                            data-original="#000000" />
                                    </svg>
                                    <p classNameName='text-gray-500 text-xs sm:text-sm mt-3'>15-Day Return Policy</p>
                                </div>
                                <div classNameName="text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" classNameName="w-8 h-8 fill-purple-600 inline" viewBox="0 0 32 32">
                                        <g data-name="Layer 24">
                                            <path
                                                d="m31.385 15.434-3.33-5.55a1.11 1.11 0 0 0-.955-.544h-6.66V8.23a1.11 1.11 0 0 0-1.11-1.11h-2.22a1.11 1.11 0 0 0 0 2.22h1.11v13.32h-7.837a3.863 3.863 0 0 0-5.416 0H2.68v-5.55a1.11 1.11 0 0 0-2.22 0v6.66a1.11 1.11 0 0 0 1.11 1.11h2.276a4.44 4.44 0 0 0 0 .555 3.885 3.885 0 0 0 7.77 0 4.44 4.44 0 0 0-.056-.555h8.991a4.44 4.44 0 0 0-.056.555 3.885 3.885 0 0 0 7.77 0 4.44 4.44 0 0 0-.055-.555h2.22a1.11 1.11 0 0 0 1.11-1.11V16a1.11 1.11 0 0 0-.155-.566zm-2.92-.544H24.88v-3.33h1.587zM7.675 27.1a1.665 1.665 0 1 1 1.665-1.665A1.665 1.665 0 0 1 7.675 27.1zm16.65 0a1.665 1.665 0 1 1 1.665-1.665 1.665 1.665 0 0 1-1.665 1.665zm2.708-4.44a3.863 3.863 0 0 0-5.416 0H20.44v-11.1h2.22V16a1.11 1.11 0 0 0 1.11 1.11h5.55v1.11h-1.11a1.11 1.11 0 0 0 0 2.22h1.11v2.22z"
                                                data-original="#000000" />
                                            <path
                                                d="M7.12 16A6.66 6.66 0 1 0 .46 9.34 6.66 6.66 0 0 0 7.12 16zm0-11.1a4.44 4.44 0 1 1-4.44 4.44A4.44 4.44 0 0 1 7.12 4.9z"
                                                data-original="#000000" />
                                            <path
                                                d="M7.12 10.45h2.22a1.11 1.11 0 0 0 0-2.22H8.23V7.12a1.11 1.11 0 0 0-2.22 0v2.22a1.11 1.11 0 0 0 1.11 1.11z"
                                                data-original="#000000" />
                                        </g>
                                    </svg>
                                    <p classNameName='text-gray-500 text-xs sm:text-sm mt-3'>Free Delivery On Orders Above $100</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    )
}

export default ProductDetails
