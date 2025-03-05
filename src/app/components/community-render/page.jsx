import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"


function CommunityRender() {
    return (
        <>

            <div className='bg-[#0a1022] drop-shadow-2xl  rounded-2xl  py-6  border border-gray-800'>
                <div className=' pr-2 text-white'>
                    <h1 className='font-extrabold font-Oswald text-6xl text-center mb-8 mt-5'>Community Renders</h1>

                </div>


                <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 px-14">
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
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
                        </div>
                        {/* <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                        </div> */}
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950   mx-12 "></div>
                <h3 className="z-20 absolute bottom-[40vh]  text-3xl font-bold text-white flex flex-row justify-center w-full ">
                    <Link href="/gallery-page">
                    <Button className="bg-teal-500 font-Oswald hover:bg-teal-600 text-[1.2rem]">More</Button>

                    </Link>
                </h3>







            </div>

        </>
    )
}

export default CommunityRender