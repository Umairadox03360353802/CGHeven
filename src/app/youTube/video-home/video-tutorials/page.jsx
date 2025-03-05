import React from 'react'
import Link from 'next/link';


const cards = [
    { title: "10 EASY", subtitle: "DRAWINGS", logo: "https://www.youtube.com/yt/about/static/images/favicon.ico" },
    { title: "20 DOODLES", subtitle: "FOR PATRONS", logo: "https://www.patreon.com/favicon.ico" },
    { title: "PREMIUM", subtitle: "TUTORIAL", logo: "https://www.youtube.com/yt/about/static/images/favicon.ico" },
    { title: "PREMIUM", subtitle: "TUTORIAL", logo: "https://www.patreon.com/favicon.ico" },
    { title: "20 DOODLES", subtitle: "FOR PATRONS", logo: "https://www.patreon.com/favicon.ico" },
    { title: "PREMIUM", subtitle: "TUTORIAL", logo: "https://www.youtube.com/yt/about/static/images/favicon.ico" },
    { title: "PREMIUM", subtitle: "TUTORIAL", logo: "https://www.patreon.com/favicon.ico" },
    { title: "20 DOODLES", subtitle: "FOR PATRONS", logo: "https://www.patreon.com/favicon.ico" },
    { title: "PREMIUM", subtitle: "TUTORIAL", logo: "https://www.youtube.com/yt/about/static/images/favicon.ico" },


];


function VideoTutorials() {
    return (
        <>
            <div>

                <div className='flex flex-wrap flex-row justify-between gap-x-3 items-start mt-5 '>

                    {/* sidber */}
                    <aside className="w-full p-6 sm:w-96 bg-slate-950 ">
                        <nav className="space-y-8  ">
                            <div className="space-y-2 ">
                                <h2 className="text-4xl font-extrabold font-Montserrat tracking-widest mb-8 text-slate-400">FILTER ON</h2>
                                <h2 className="text-2xl font-extrabold font-Montserrat tracking-widest pb-7  text-slate-400">Subject</h2>
                                <div className="flex flex-col space-y-1 gap-4">
                                    <div class="flex items-center">
                                        <input id="checkbox1" type="checkbox" class="hidden peer" />
                                        <label for="checkbox1"
                                            className="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-8 h-8 cursor-pointer bg-[#88e5e9] border-2 border-slate-400 rounded overflow-hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white " viewBox="0 0 520 520">
                                                <path
                                                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                    data-name="7-Check" data-original="#000000" />
                                            </svg>
                                        </label>
                                        <p class="text-xl font-VarelaRound font-semibold text-slate-400 ml-4">Characters</p>

                                    </div>
                                    <div class="flex items-center">
                                        <input id="checkbox1" type="checkbox" class="hidden peer" checked />
                                        <label for="checkbox1"
                                            class="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-8 h-8 cursor-pointer bg-[#88e5e9] border-2 border-slate-400 rounded overflow-hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white" viewBox="0 0 520 520">
                                                <path
                                                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                    data-name="7-Check" data-original="#000000" />
                                            </svg>
                                        </label>
                                        <p class="text-xl font-VarelaRound font-semibold text-slate-400 ml-4">City Scene</p>

                                    </div>
                                    <div class="flex items-center">
                                        <input id="checkbox1" type="checkbox" class="hidden peer" checked />
                                        <label for="checkbox1"
                                            class="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-8 h-8 cursor-pointer bg-[#88e5e9] border-2 border-slate-400 rounded overflow-hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white" viewBox="0 0 520 520">
                                                <path
                                                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                    data-name="7-Check" data-original="#000000" />
                                            </svg>
                                        </label>
                                        <p class="text-xl font-VarelaRound font-semibold text-slate-400 ml-4">Creatures</p>

                                    </div>


                                </div>
                            </div>
                            <div className="space-y-2 ">
                                <h2 className="text-2xl font-extrabold font-Montserrat tracking-widest pb-7 text-slate-400">STYLE</h2>
                                <div className="flex flex-col space-y-1 gap-4">
                                    <div class="flex items-center">
                                        <input id="checkbox1" type="checkbox" class="hidden peer" />
                                        <label for="checkbox1"
                                            className="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-8 h-8 cursor-pointer bg-[#88e5e9] border-2 border-slate-400 rounded overflow-hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white " viewBox="0 0 520 520">
                                                <path
                                                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                    data-name="7-Check" data-original="#000000" />
                                            </svg>
                                        </label>
                                        <p class="text-xl font-VarelaRound font-semibold text-slate-400 ml-4">Characters</p>

                                    </div>
                                    <div class="flex items-center">
                                        <input id="checkbox1" type="checkbox" class="hidden peer" checked />
                                        <label for="checkbox1"
                                            class="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-8 h-8 cursor-pointer bg-[#88e5e9] border-2 border-slate-400 rounded overflow-hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white" viewBox="0 0 520 520">
                                                <path
                                                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                    data-name="7-Check" data-original="#000000" />
                                            </svg>
                                        </label>
                                        <p class="text-xl font-VarelaRound font-semibold text-slate-400 ml-4">City Scene</p>

                                    </div>
                                    <div class="flex items-center">
                                        <input id="checkbox1" type="checkbox" class="hidden peer" checked />
                                        <label for="checkbox1"
                                            class="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-8 h-8 cursor-pointer bg-[#88e5e9] border-2 border-slate-400 rounded overflow-hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white" viewBox="0 0 520 520">
                                                <path
                                                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                    data-name="7-Check" data-original="#000000" />
                                            </svg>
                                        </label>
                                        <p class="text-xl font-VarelaRound font-semibold text-slate-400 ml-4">Creatures</p>

                                    </div>


                                </div>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-2xl font-extrabold font-Montserrat tracking-widest pb-7 text-slate-400">DIFFICULTY</h2>
                                <div className="flex flex-col space-y-1 gap-4">
                                    <div class="flex items-center">
                                        <input id="checkbox1" type="checkbox" class="hidden peer" />
                                        <label for="checkbox1"
                                            className="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-8 h-8 cursor-pointer bg-[#88e5e9] border-2 border-slate-400 rounded overflow-hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white " viewBox="0 0 520 520">
                                                <path
                                                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                    data-name="7-Check" data-original="#000000" />
                                            </svg>
                                        </label>
                                        <p class="text-xl font-VarelaRound font-semibold text-slate-400 ml-4">Characters</p>

                                    </div>
                                    <div class="flex items-center">
                                        <input id="checkbox1" type="checkbox" class="hidden peer" checked />
                                        <label for="checkbox1"
                                            class="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-8 h-8 cursor-pointer bg-[#88e5e9] border-2 border-slate-400 rounded overflow-hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white" viewBox="0 0 520 520">
                                                <path
                                                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                    data-name="7-Check" data-original="#000000" />
                                            </svg>
                                        </label>
                                        <p class="text-xl font-VarelaRound font-semibold text-slate-400 ml-4">City Scene</p>

                                    </div>
                                    <div class="flex items-center">
                                        <input id="checkbox1" type="checkbox" class="hidden peer" checked />
                                        <label for="checkbox1"
                                            class="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-8 h-8 cursor-pointer bg-[#88e5e9] border-2 border-slate-400 rounded overflow-hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white" viewBox="0 0 520 520">
                                                <path
                                                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                    data-name="7-Check" data-original="#000000" />
                                            </svg>
                                        </label>
                                        <p class="text-xl font-VarelaRound font-semibold text-slate-400 ml-4">Creatures</p>

                                    </div>


                                </div>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-2xl font-extrabold font-Montserrat tracking-widest pb-7 text-slate-400">TUTORIAL LENGTH</h2>
                                <div className="flex flex-col space-y-1 gap-4">
                                    <div class="flex items-center">
                                        <input id="checkbox1" type="checkbox" class="hidden peer" />
                                        <label for="checkbox1"
                                            className="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-8 h-8 cursor-pointer bg-[#88e5e9] border-2 border-slate-400 rounded overflow-hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white " viewBox="0 0 520 520">
                                                <path
                                                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                    data-name="7-Check" data-original="#000000" />
                                            </svg>
                                        </label>
                                        <p class="text-xl font-VarelaRound font-semibold text-slate-400 ml-4">Characters</p>

                                    </div>
                                    <div class="flex items-center">
                                        <input id="checkbox1" type="checkbox" class="hidden peer" checked />
                                        <label for="checkbox1"
                                            class="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-8 h-8 cursor-pointer bg-[#88e5e9] border-2 border-slate-400 rounded overflow-hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white" viewBox="0 0 520 520">
                                                <path
                                                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                    data-name="7-Check" data-original="#000000" />
                                            </svg>
                                        </label>
                                        <p class="text-xl font-VarelaRound font-semibold text-slate-400 ml-4">City Scene</p>

                                    </div>
                                    <div class="flex items-center">
                                        <input id="checkbox1" type="checkbox" class="hidden peer" checked />
                                        <label for="checkbox1"
                                            class="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-8 h-8 cursor-pointer bg-[#88e5e9] border-2 border-slate-400 rounded overflow-hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white" viewBox="0 0 520 520">
                                                <path
                                                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                    data-name="7-Check" data-original="#000000" />
                                            </svg>
                                        </label>
                                        <p class="text-xl font-VarelaRound font-semibold text-slate-400 ml-4">Creatures</p>

                                    </div>


                                </div>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-2xl font-extrabold font-Montserrat tracking-widest pb-7 text-slate-400">ACCESS</h2>
                                <div className="flex flex-col space-y-1 gap-4">

                                    <div class="flex items-center">
                                        <input id="checkbox1" type="checkbox" class="hidden peer" checked />
                                        <label for="checkbox1"
                                            class="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-8 h-8 cursor-pointer bg-[#88e5e9] border-2 border-slate-400 rounded overflow-hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white" viewBox="0 0 520 520">
                                                <path
                                                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                    data-name="7-Check" data-original="#000000" />
                                            </svg>
                                        </label>
                                        <p class="text-xl font-VarelaRound font-semibold text-slate-400 ml-4">Exclusive</p>

                                    </div>
                                    <div class="flex items-center">
                                        <input id="checkbox1" type="checkbox" class="hidden peer" checked />
                                        <label for="checkbox1"
                                            class="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-8 h-8 cursor-pointer bg-[#88e5e9] border-2 border-slate-400 rounded overflow-hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white" viewBox="0 0 520 520">
                                                <path
                                                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                    data-name="7-Check" data-original="#000000" />
                                            </svg>
                                        </label>
                                        <p class="text-xl font-VarelaRound font-semibold text-slate-400 ml-4">Free</p>

                                    </div>


                                </div>
                            </div>
                        </nav>
                    </aside>

                    {/* tutorial section */}

                    <div className=" mx-auto px-5 py-0   ">


                        <div className=" grid grid-cols-2 md:grid-cols-3 gap-4">

                            {cards.map((card, index) => (
                                <Link href="/youTube/video-home/patreon-video" key={index}>
                                <div key={index} className='py-14'>
                                    <div className="aspect-square  bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                                        <div className="relative">
                                            <img
                                                src="https://placehold.co/400x300"
                                                alt="Product"
                                                className="w-full h-full object-cover"
                                            />

                                        </div>

                                        <div className="p-5  ">


                                            <div className="flex justify-between gap-5 items-center mx-4">
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
                                                    <p className="text-gray-500 text-sm mt-1">Premium cotton blend</p>
                                                </div>

                                                <div className='h-5 w-5 flex flex-col justify-center items-center  my-2 gap-2'>
                                                    <img src="/youtube-logo.png" alt="hh" />
                                                    <p className='font-semibold font-Montserrat text-xs text-center'>FREE <br />TUTORIAL</p>

                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                </Link>


                            ))}

                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default VideoTutorials;