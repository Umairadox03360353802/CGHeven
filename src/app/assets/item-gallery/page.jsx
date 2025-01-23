import React from 'react'

function ItemGallery() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-1 overflow-y-auto md:px-0 ">
                {/* <div className="bg-slate-950 rounded-md shadow-md overflow-hidden">
        <div className="relative">
            <img className="w-full h-48 object-cover rounded-md" src="https://img.freepik.com/premium-psd/beautiful-redfort-3d-model-isolated-transparent-background_927015-8005.jpg"/>
            <div className="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">New
            </div>
            <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">3 min read
            </div>
        </div>
        <div className="p-4">
            <div className="text-xl font-medium text-slate-400 mb-2">Lorem, ipsum dolor.</div>
            <p className="text-gray-500 text-sm">Lorem ipsum dolor sit.</p>
        </div>
    </div> */}
                {/* ad */}
                <div id="dropdown-cta" className="p-1 ml-0 mt-0 w-full h-48 border border-gray-700 rounded-lg bg-blue-50 dark:bg-slate-800" role="alert">
                    <div className="flex items-center mb-3">
                        {/* <span className="bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span> */}
                        <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-dismiss-target="#dropdown-cta" aria-label="Close">
                            <span className="sr-only">Close</span>
                            <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>
                    <p className="mb-1 text-sm text-blue-800 dark:text-blue-400">
                        Preview the new Flowbite dashboard a limited time in your profile.
                    </p>
                    <a className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" href="#">Turn new navigation off</a>
                </div>


                <div className="bg-slate-950 rounded-md shadow-md overflow-hidden">
                    <div className="relative">
                        <img className="w-full h-48 object-cover rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2y7oB_3NJA5NQwqKy9pKle3cIv5-jr-RnFA&s" />
                        <div className="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">New</div>

                        <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">3 min read
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="text-lg font-medium text-slate-400 mb-2">Lorem, ipsum dolor.</div>
                        <p className="text-gray-500 text-sm">Lorem ipsum dolor sit.</p>
                    </div>
                </div>


                <div className="bg-slate-950 rounded-md shadow-md overflow-hidden">
                    <div className="relative">
                        <img className="w-full h-48 object-cover rounded-md" src="https://img.freepik.com/premium-psd/colorful-design-spiral-with-word-peacock-it_1155708-29787.jpg?semt=ais_hybrid" />
                        <div className="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">New</div>
                        <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">3 min read
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="text-lg font-medium text-slate-400 mb-2">Lorem, ipsum dolor.</div>
                        <p className="text-gray-500 text-sm">Lorem ipsum dolor sit.</p>
                    </div>
                </div>
                <div className="bg-slate-950 rounded-md shadow-md overflow-hidden">
                    <div className="relative bg-transparent">
                        <img className="w-full h-48 object-cover rounded-md" src="https://img.freepik.com/premium-psd/psd-3d-wooden-box-icon-isolated-transparent-background_817178-1150.jpg" />
                        <div className="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">New</div>
                        <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">3 min read
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="text-lg font-medium text-slate-400 mb-2">Lorem, ipsum dolor.</div>
                        <p className="text-gray-500 text-sm">Lorem ipsum dolor sit.</p>
                    </div>
                </div>


            </div>




        </>
    )
}

export default ItemGallery