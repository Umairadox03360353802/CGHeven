import React from 'react'

function CommunityRender() {
    return (
        <>

            <div className='bg-[#0a1022] drop-shadow-2xl  rounded-2xl  py-6  border border-gray-800'>
                <div className=' pr-2 text-white'>
                    <h1 className='font-extrabold font-Montserrat text-6xl text-center mb-8 mt-5'>Community Renders</h1>

                </div>


                <div className="relative grid grid-cols-2 md:grid-cols-3 gap-4 px-40">
                    <div className="grid gap-6">
                        <div>
                            <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                        </div>
                        {/* <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                        </div> */}
                    </div>
                    <div className="grid gap-6">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-full max-w-full  rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                        </div>
                        {/* <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                        </div> */}
                    </div>
                    <div className="grid gap-6">
                        <div>
                            <img className="h-full max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                        </div>
                        {/* <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                        </div> */}
                    </div>
                    {/* <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                        </div>
                    </div> */}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950   mx-32 "></div>
                <h3 className="z-20 absolute bottom-[40vh]  text-3xl font-bold text-white flex flex-row justify-center w-full ">
                <button className="sm:w-fit w-full px-12 py-4 bg-[#40E0D0] hover:bg-[#40E0D0] transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
												<span className="px-1 text-white font-Montserrat text-2xl font-semibold leading-6"> more</span>
											</button>
                </h3>

                





            </div>

        </>
    )
}

export default CommunityRender