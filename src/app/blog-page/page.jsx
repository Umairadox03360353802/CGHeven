import React from 'react'

function Blog() {
    return (
        <>
            <div>

                {/* banner */}
                <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
                    <img src="https://readymadeui.com/cardImg.webp" alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="min-h-[350px] relative z-10 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
                        <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">Startup Website <span className="text-yellow-500">Template</span></h2>
                        <p className="text-lg text-center text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                        <a href="javascript:void(0)"
                            className="mt-12 text-base font-semibold py-2.5 px-5 border-2 border-yellow-600 hover:border-yellow-400 bg-transparent text-yellow-500 rounded">
                            Get started
                        </a>
                    </div>
                </div>

                {/* blog section */}

                <h2 className="text-3xl font-extrabold font-Montserrat pl-24 pt-12 text-gray-300 inline-block">LATEST BLOGS</h2>
                <main className="container mx-auto mt-12 ">

                    <div className="flex flex-wrap flex-row justify-start relative items-start">
                        <div className="flex max-lg:flex-col bg-slate-950 w-[70%] mt-5 cursor-pointer rounded-2xl border border-gray-700 overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
                            <div className="h-64 lg:w-[40vh]">
                                <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" className="w-full h-full rounded-2xl object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white font-Montserrat">A Guide to Igniting Your Imagination</h3>
                                <span className="text-sm block text-[#88e5e9] font-VarelaRound mt-2">10 FEB 2023 | BY JOHN DOE</span>
                                <p className="text-lg text-gray-400 font-VarelaRound mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit.</p>
                                <a href="javascript:void(0);" className="mt-8 inline-block  text-blue-400 font-semibold text-lg hover:underline">Read More</a>
                            </div>
                        </div>
                        <div className="flex max-lg:flex-col bg-slate-950 w-[70%] mt-8 cursor-pointer rounded-2xl border border-gray-700 overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
                            <div className="h-64 lg:w-[40vh]">
                                <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" className="w-full h-full rounded-2xl object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white font-Montserrat">A Guide to Igniting Your Imagination</h3>
                                <span className="text-sm block text-[#88e5e9] font-VarelaRound mt-2">10 FEB 2023 | BY JOHN DOE</span>
                                <p className="text-lg text-gray-400 font-VarelaRound mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit.</p>
                                <a href="javascript:void(0);" className="mt-8 inline-block  text-blue-400 font-semibold text-lg hover:underline">Read More</a>
                            </div>
                        </div>
                        <div className="flex max-lg:flex-col bg-slate-950 w-[70%] mt-8 cursor-pointer rounded-2xl border border-gray-700 overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
                            <div className="h-64 lg:w-[40vh]">
                                <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" className="w-full h-full rounded-2xl object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white font-Montserrat">A Guide to Igniting Your Imagination</h3>
                                <span className="text-sm block text-[#88e5e9] font-VarelaRound mt-2">10 FEB 2023 | BY JOHN DOE</span>
                                <p className="text-lg text-gray-400 font-VarelaRound mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit.</p>
                                <a href="javascript:void(0);" className="mt-8 inline-block  text-blue-400 font-semibold text-lg hover:underline">Read More</a>
                            </div>
                        </div>
                        <div className="flex max-lg:flex-col bg-slate-950 w-[70%] mt-8 cursor-pointer rounded-2xl border border-gray-700 overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
                            <div className="h-64 lg:w-[40vh]">
                                <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" className="w-full h-full rounded-2xl object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white font-Montserrat">A Guide to Igniting Your Imagination</h3>
                                <span className="text-sm block text-[#88e5e9] font-VarelaRound mt-2">10 FEB 2023 | BY JOHN DOE</span>
                                <p className="text-lg text-gray-400 font-VarelaRound mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit.</p>
                                <a href="javascript:void(0);" className="mt-8 inline-block  text-blue-400 font-semibold text-lg hover:underline">Read More</a>
                            </div>
                        </div>
                        <div className="flex max-lg:flex-col bg-slate-950 w-[70%] mt-8 cursor-pointer rounded-2xl border border-gray-700 overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
                            <div className="h-64 lg:w-[40vh]">
                                <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" className="w-full h-full rounded-2xl object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white font-Montserrat">A Guide to Igniting Your Imagination</h3>
                                <span className="text-sm block text-[#88e5e9] font-VarelaRound mt-2">10 FEB 2023 | BY JOHN DOE</span>
                                <p className="text-lg text-gray-400 font-VarelaRound mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit.</p>
                                <a href="javascript:void(0);" className="mt-8 inline-block  text-blue-400 font-semibold text-lg hover:underline">Read More</a>
                            </div>
                        </div>


                        <div className="w-full md:w-3/12 px-4 mb-8 top-0 ml-5 absolute right-0">
                            <div className="bg-slate-950 border border-gray-700 px-4 py-6 rounded-2xl">
                                <h3 className="text-2xl font-bold mb-8 font-Montserrat text-white">Categories</h3>
                                <ul className="list-none list-inside  hover:text-gray-900 font-VarelaRound text-gl text-[#88e5e9] gap-4">
                                    {/* <li className="flex items-center space-x-4">
                                    <img src="https://source.unsplash.com/random/200x200" alt="Product 1"
                                        className="w-6 h-6 rounded-full" />
                                    <div>
                                        <h3 className="text-md font-semibold">Product 1</h3>
                                        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                </li>  */}
                                    <li className="pb-4 ml-4"><a href="#" >Community Projects</a></li>
                                    <li className="pb-4 ml-4"><a href="#" >Food</a>Dev Logs</li>
                                    <li className="pb-4 ml-4"><a href="#" >Food</a>DIY Hardware</li>
                                    <li className="pb-4 ml-4"><a href="#" >Food</a>how-to</li>
                                    <li className="pb-4 ml-4"><a href="#" >Food</a>News</li>
                                    <li className="pb-4 ml-4"><a href="#" >Food</a>Scene Files</li>
                                    <li className="pb-4 ml-4"><a href="#" >Food</a>Travel</li>
                                    <li className="pb-4 ml-4"><a href="#" >Food</a>Uncategorized</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>

                {/* pagination */}
                <div className="flex space-x-1 mt-10 ml-44">
                    <button className="rounded-full border border-slate-950 py-2 px-4 text-center text-xl transition-all shadow-sm hover:shadow-lg text-[#88e5e9] hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                        Prev
                    </button>
                    <button className="min-w-9 rounded-full bg-[#88e5e9] py-2 px-4 border border-transparent text-center text-xl text-slate-950 transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-[#88e5e9] hover:bg-[#88e5e9] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                        1
                    </button>
                    <button className="min-w-9 rounded-full border border-slate-950 py-2 px-4 text-center text-xl transition-all shadow-sm hover:shadow-lg text-[#88e5e9] hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                        2
                    </button>
                    <button className="min-w-9 rounded-full border border-slate-950 py-2 px-4 text-center text-xl transition-all shadow-sm hover:shadow-lg text-[#88e5e9] hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                        3
                    </button>
                    <button className="min-w-9 rounded-full border border-slate-950 py-2 px-4 text-center text-xl transition-all shadow-sm hover:shadow-lg text-[#88e5e9] hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                        Next
                    </button>
                </div>
            </div>

        </>
    )
}

export default Blog