import React from 'react'
import Link from 'next/link';

function VideoTutorials() {
    return (
        <>
            <div>

                <div className='flex flex-wrap flex-row justify-between items-start mt-10 '>
                   
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
                    <section class="w-fit hauto mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-12 mt-10 mb-5">

                        {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
                        <Link href="/youTube/video-home/youtube-video">
                        <article class="max-w-xl w-full h-[70vh] bg-white rounded-xl shadow-lg overflow-hidden ">
                        <div className='bg-emerald-500 rounded-xl p-6'>
                            {/* Adjusted tablet size */}
                            <div class="relative mx-auto shadow-xl border-gray-800 dark:border-gray-800 bg-gray-800 border-[5px] rounded-[1.25rem] h-[280px] max-w-[220px] md:h-[360px] md:max-w-[270px] transform transition-transform hover:scale-[1.02]">
                                {/* Side buttons */}
                                <div class="h-[14px] w-[2px] bg-gray-800  absolute -start-[6px] top-[28px] rounded-s-lg"></div>
                                <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[64px] rounded-s-lg"></div>
                                <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[100px] rounded-s-lg"></div>
                                <div class="h-[24px] w-[2px] bg-gray-800  absolute -end-[6px] top-[84px] rounded-e-lg"></div>

                                {/* Screen area */}
                                <div class="rounded-[1rem] overflow-hidden h-[270px] md:h-[350px] bg-whit">
                                    {/* <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
                                        class="dark:hidden h-full w-full object-cover"
                                        alt="dramatic sky tutorial" /> */}
                                    <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        class="hidden dark:block h-full w-full object-cover "
                                        alt="dramatic sky tutorial dark" />
                                </div>
                            </div>

                        </div>

                        <div className='flex flex-row justify-between items-center mt-6 px-5'>
                            <div class="flex flex-col gap-1 ">
                                <h2 class="text-xl font-extrabold font-Montserrat text-black">Converse Sneakers</h2>
                                <span class="font-semibold font-VarelaRound text-md ">High Top (Lemon Yellow)</span>
                            </div>
                            <div className='h-10 w-10 flex flex-col justify-center items-center  mt-5 mr-5 gap-4'>
                               <img src="./youtube-logo.png" alt="" />
                               <p className='font-bold font-Montserrat text-sm text-center'>FREE <br />TUTORIAL</p>
                               
                            </div>
                        </div>


                    </article>
                        </Link>
                        {/* <!--   🛑 Product card 1 - Ends Here  --> */}

                        {/* <!--   ✅ Product card 2 - Starts Here 👇 --> */}
                        <Link href="/youTube/video-home/youtube-video">
                        <article class="max-w-xl w-full h-[70vh] bg-white rounded-xl shadow-lg overflow-hidden ">
                        <div className='bg-amber-400 rounded-xl p-6'>
                            {/* Adjusted tablet size */}
                            <div class="relative mx-auto shadow-xl border-gray-800 dark:border-gray-800 bg-gray-800 border-[5px] rounded-[1.25rem] h-[280px] max-w-[220px] md:h-[360px] md:max-w-[270px] transform transition-transform hover:scale-[1.02]">
                                {/* Side buttons */}
                                <div class="h-[14px] w-[2px] bg-gray-800  absolute -start-[6px] top-[28px] rounded-s-lg"></div>
                                <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[64px] rounded-s-lg"></div>
                                <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[100px] rounded-s-lg"></div>
                                <div class="h-[24px] w-[2px] bg-gray-800  absolute -end-[6px] top-[84px] rounded-e-lg"></div>

                                {/* Screen area */}
                                <div class="rounded-[1rem] overflow-hidden h-[270px] md:h-[350px] bg-whit">
                                    {/* <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
                                        class="dark:hidden h-full w-full object-cover"
                                        alt="dramatic sky tutorial" /> */}
                                    <img src="https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        class="hidden dark:block h-full w-full object-cover "
                                        alt="dramatic sky tutorial dark" />
                                </div>
                            </div>

                        </div>

                        <div className='flex flex-row justify-between items-center mt-6 px-5'>
                            <div class="flex flex-col gap-1 ">
                                <h2 class="text-xl font-extrabold font-Montserrat text-black">Converse Sneakers</h2>
                                <span class="font-semibold font-VarelaRound text-md ">High Top (Lemon Yellow)</span>
                            </div>
                            <div className='h-10 w-10 flex flex-col justify-center items-center  mt-5 mr-5 gap-4'>
                               <img src="./patreon.png" alt="" />
                               <p className='font-bold font-Montserrat text-sm'>PATREON <br />TUTORIAL</p>
                               
                            </div>
                        </div>


                    </article>
                        </Link>
                        {/* <!--   🛑 Product card 2- Ends Here  --> */}

                        {/* <!--   ✅ Product card 3 - Starts Here 👇 --> */}
                        <Link href="/youTube/video-home/youtube-video">
                        <article class="max-w-xl w-full h-[70vh] bg-white rounded-xl shadow-lg overflow-hidden ">
                        <div className='bg-rose-300 rounded-xl p-6'>
                            {/* Adjusted tablet size */}
                            <div class="relative mx-auto shadow-xl border-gray-800 dark:border-gray-800 bg-gray-800 border-[5px] rounded-[1.25rem] h-[280px] max-w-[220px] md:h-[360px] md:max-w-[270px] transform transition-transform hover:scale-[1.02]">
                                {/* Side buttons */}
                                <div class="h-[14px] w-[2px] bg-gray-800  absolute -start-[6px] top-[28px] rounded-s-lg"></div>
                                <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[64px] rounded-s-lg"></div>
                                <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[100px] rounded-s-lg"></div>
                                <div class="h-[24px] w-[2px] bg-gray-800  absolute -end-[6px] top-[84px] rounded-e-lg"></div>

                                {/* Screen area */}
                                <div class="rounded-[1rem] overflow-hidden h-[270px] md:h-[350px] bg-whit">
                                    {/* <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
                                        class="dark:hidden h-full w-full object-cover"
                                        alt="dramatic sky tutorial" /> */}
                                    <img src="https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        class="hidden dark:block h-full w-full object-cover "
                                        alt="dramatic sky tutorial dark" />
                                </div>
                            </div>

                        </div>

                        <div className='flex flex-row justify-between items-center mt-6 px-5'>
                            <div class="flex flex-col gap-1 ">
                                <h2 class="text-xl font-extrabold font-Montserrat text-black">Converse Sneakers</h2>
                                <span class="font-semibold font-VarelaRound text-md ">High Top (Lemon Yellow)</span>
                            </div>
                            <div className='h-10 w-10 flex flex-col justify-center items-center  mt-5 mr-5 gap-4'>
                               <img src="./youtube-logo.png" alt="" />
                               <p className='font-bold font-Montserrat text-sm text-center'>FREE<br />TUTORIAL</p>
                               
                            </div>
                        </div>


                    </article>
                    </Link>
                        {/* <!--   🛑 Product card 3 - Ends Here  --> */}

                        {/* <!--   ✅ Product card 4 - Starts Here 👇 --> */}
                        <Link href="/youTube/video-home/patreon-video">
                        <article class="max-w-xl w-full h-[70vh] bg-white rounded-xl shadow-lg overflow-hidden ">
                        <div className='bg-amber-500 rounded-xl p-6'>
                            {/* Adjusted tablet size */}
                            <div class="relative mx-auto shadow-xl border-gray-800 dark:border-gray-800 bg-gray-800 border-[5px] rounded-[1.25rem] h-[280px] max-w-[220px] md:h-[360px] md:max-w-[270px] transform transition-transform hover:scale-[1.02]">
                                {/* Side buttons */}
                                <div class="h-[14px] w-[2px] bg-gray-800  absolute -start-[6px] top-[28px] rounded-s-lg"></div>
                                <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[64px] rounded-s-lg"></div>
                                <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[100px] rounded-s-lg"></div>
                                <div class="h-[24px] w-[2px] bg-gray-800  absolute -end-[6px] top-[84px] rounded-e-lg"></div>

                                {/* Screen area */}
                                <div class="rounded-[1rem] overflow-hidden h-[270px] md:h-[350px] bg-whit">
                                    {/* <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
                                        class="dark:hidden h-full w-full object-cover"
                                        alt="dramatic sky tutorial" /> */}
                                    <img src="https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        class="hidden dark:block h-full w-full object-cover "
                                        alt="dramatic sky tutorial dark" />
                                </div>
                            </div>

                        </div>

                        <div className='flex flex-row justify-between items-center mt-6 px-5'>
                            <div class="flex flex-col gap-1 ">
                                <h2 class="text-xl font-extrabold font-Montserrat text-black">Converse Sneakers</h2>
                                <span class="font-semibold font-VarelaRound text-md ">High Top (Lemon Yellow)</span>
                            </div>
                            <div className='h-10 w-10 flex flex-col justify-center items-center  mt-5 mr-5 gap-4'>
                               <img src="./patreon.png" alt="" />
                               <p className='font-bold font-Montserrat text-sm'>PATREON <br />TUTORIAL</p>
                               
                            </div>
                        </div>


                    </article>
                    </Link>
                        {/* <!--   🛑 Product card 4 - Ends Here  --> */}

                        {/* <!--   ✅ Product card 5 - Starts Here 👇 --> */}
                        <Link href="/youTube/video-home/patreon-video">
                        <article class="max-w-xl w-full h-[70vh] bg-white rounded-xl shadow-lg overflow-hidden ">
                        <div className='bg-orange-200 rounded-xl p-6'>
                            {/* Adjusted tablet size */}
                            <div class="relative mx-auto shadow-xl border-gray-800 dark:border-gray-800 bg-gray-800 border-[5px] rounded-[1.25rem] h-[280px] max-w-[220px] md:h-[360px] md:max-w-[270px] transform transition-transform hover:scale-[1.02]">
                                {/* Side buttons */}
                                <div class="h-[14px] w-[2px] bg-gray-800  absolute -start-[6px] top-[28px] rounded-s-lg"></div>
                                <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[64px] rounded-s-lg"></div>
                                <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[100px] rounded-s-lg"></div>
                                <div class="h-[24px] w-[2px] bg-gray-800  absolute -end-[6px] top-[84px] rounded-e-lg"></div>

                                {/* Screen area */}
                                <div class="rounded-[1rem] overflow-hidden h-[270px] md:h-[350px] bg-whit">
                                    {/* <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
                                        class="dark:hidden h-full w-full object-cover"
                                        alt="dramatic sky tutorial" /> */}
                                    <img src="https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        class="hidden dark:block h-full w-full object-cover "
                                        alt="dramatic sky tutorial dark" />
                                </div>
                            </div>

                        </div>

                        <div className='flex flex-row justify-between items-center mt-6 px-5'>
                            <div class="flex flex-col gap-1 ">
                                <h2 class="text-xl font-extrabold font-Montserrat text-black">Converse Sneakers</h2>
                                <span class="font-semibold font-VarelaRound text-md ">High Top (Lemon Yellow)</span>
                            </div>
                            <div className='h-10 w-10 flex flex-col justify-center items-center  mt-5 mr-5 gap-4'>
                               <img src="./youtube-logo.png" alt="" className='h-full w-full' />
                               <p className='font-bold font-Montserrat text-sm text-center'>FREE<br />TUTORIAL</p>
                               
                            </div>
                        </div>


                    </article>
                    </Link>
                        {/* <!--   🛑 Product card 5 - Ends Here  --> */}

                        {/* <!--   ✅ Product card 6 - Starts Here 👇 --> */}
                        <Link href="/youTube/video-home/patreon-video">
                        <article class="max-w-xl w-full h-[70vh] bg-white rounded-xl shadow-lg overflow-hidden ">
                        <div className='bg-rose-300 rounded-xl p-6'>
                            {/* Adjusted tablet size */}
                            <div class="relative mx-auto shadow-xl border-gray-800 dark:border-gray-800 bg-gray-800 border-[5px] rounded-[1.25rem] h-[280px] max-w-[220px] md:h-[360px] md:max-w-[270px] transform transition-transform hover:scale-[1.02]">
                                {/* Side buttons */}
                                <div class="h-[14px] w-[2px] bg-gray-800  absolute -start-[6px] top-[28px] rounded-s-lg"></div>
                                <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[64px] rounded-s-lg"></div>
                                <div class="h-[18px] w-[2px] bg-gray-800  absolute -start-[6px] top-[100px] rounded-s-lg"></div>
                                <div class="h-[24px] w-[2px] bg-gray-800  absolute -end-[6px] top-[84px] rounded-e-lg"></div>

                                {/* Screen area */}
                                <div class="rounded-[1rem] overflow-hidden h-[270px] md:h-[350px] bg-whit">
                                    {/* <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
                                        class="dark:hidden h-full w-full object-cover"
                                        alt="dramatic sky tutorial" /> */}
                                    <img src="https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        class="hidden dark:block h-full w-full object-cover "
                                        alt="dramatic sky tutorial dark" />
                                </div>
                            </div>

                        </div>

                        <div className='flex flex-row justify-between items-center mt-6 px-5'>
                            <div class="flex flex-col gap-1 ">
                                <h2 class="text-xl font-extrabold font-Montserrat text-black">Converse Sneakers</h2>
                                <span class="font-semibold font-VarelaRound text-md ">High Top (Lemon Yellow)</span>
                            </div>
                            <div className='h-10 w-10 flex flex-col justify-center items-center  mt-5 mr-5 gap-4'>
                               <img src="./patreon.png" alt="" />
                               <p className='font-bold font-Montserrat text-sm'>PATREON <br />TUTORIAL</p>
                               
                            </div>
                        </div>


                    </article>
                    </Link>
                        {/* <!--   🛑 Product card 6 - Ends Here  --> */}

                    </section>

                </div>
            </div>

        </>
    )
}

export default VideoTutorials;