import React from 'react'

function GalleryPage() {
    return (
        <>
            <div className='py-8'>
                <div className='mb-16 pr-2 mt-10 text-white flex flex-row justify-center items-center gap-4'>
                    <h1 className='font-extrabold font-Montserrat text-4xl text-center mb-6'>Render Gallery:</h1>
                    <button className="flex items-center mb-5 px-6 py-3 bg-[#0a1022] text-white text-xl font-semibold rounded-xl hover:bg-[#88e5e9] focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        Add yours
                    </button>


                </div>


                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
                    <div className="grid gap-4">
                        <div>
                            <div className="h-full max-w-full rounded-lg border border-white">
                                <div className="flex items-center mb-3">
                                    {/* <span className="bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span> */}
                                    <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-dismiss-target="#dropdown-cta" aria-label="Close">
                                        <span className="sr-only">Close</span>
                                        <svg className="w-2.5 h-2.5 z-20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                    </button>
                                    {/* <img className='absolute inset-0 w-[468px] h-[60px]' src="https://i.pinimg.com/736x/ad/90/5f/ad905fb7a2a86a7019eb796e1b5d123d.jpg" alt="" /> */}
                                </div>
                                <p className="mb-1 text-sm text-blue-800 dark:text-blue-400">
                                    Preview the new Flowbite dashboard a limited time in your profile.
                                </p>
                            </div>
                            {/* <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" /> */}
                        </div>
                        <div>
                            <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                           
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                        </div>
                        <div>
                        <div className="h-full max-w-full rounded-lg border border-white">
                                <div className="flex items-center mb-3">
                                    {/* <span className="bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span> */}
                                    <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-dismiss-target="#dropdown-cta" aria-label="Close">
                                        <span className="sr-only">Close</span>
                                        <svg className="w-2.5 h-2.5 z-20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                    </button>
                                    {/* <img className='absolute inset-0 w-[468px] h-[60px]' src="https://i.pinimg.com/736x/ad/90/5f/ad905fb7a2a86a7019eb796e1b5d123d.jpg" alt="" /> */}
                                </div>
                                <p className="mb-1 text-sm text-blue-800 dark:text-blue-400">
                                    Preview the new Flowbite dashboard a limited time in your profile.
                                </p>
                            </div>
                            {/* <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" /> */}
                        </div>
                        <div>
                            <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default GalleryPage