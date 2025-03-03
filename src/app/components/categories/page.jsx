'use client'
import React from 'react'
// import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FlameIcon as Folder } from "lucide-react"
import Link from 'next/link'


const cards = [
    {
        image: 'https://img.freepik.com/premium-photo/mystical-purple-tree-with-pink-flowers-dark-blue-foggy-forest-with-sparkles_14117-296367.jpg',
        title: 'Card 1',
        description: 'This is the first card with an image.',
    },
    {
        image: 'https://st.depositphotos.com/13547478/61418/i/450/depositphotos_614183844-stock-photo-fantasy-fairy-tale-background-purple.jpg',
        title: 'Card 2',
        description: 'This is the second card with an image.',
    },
    {
        image: 'https://img.freepik.com/premium-photo/purple-blue-forest-with-tree-with-purple-pink-lights_1065421-30853.jpg',
        title: 'Card 3',
        description: 'This is the third card with an image.',
    },
    {
        image: 'https://png.pngtree.com/background/20231030/original/pngtree-enchanting-3d-illustration-of-a-forest-path-with-lush-trees-bushes-picture-image_5798382.jpg',
        title: 'Card 4',
        description: 'This is the fourth card with an image.',
    },
    {
        image: 'https://img.freepik.com/premium-photo/mystical-purple-tree-with-pink-flowers-dark-blue-foggy-forest-with-sparkles_14117-296367.jpg',
        title: 'Card 5',
        description: 'This is the fifth card with an image.',
    },
    {
        image: 'https://st.depositphotos.com/13547478/61418/i/450/depositphotos_614183844-stock-photo-fantasy-fairy-tale-background-purple.jpg',
        title: 'Card 6',
        description: 'This is the sixth card with an image.',
    },
    {
        image: 'https://img.freepik.com/premium-photo/purple-blue-forest-with-tree-with-purple-pink-lights_1065421-30853.jpg',
        title: 'Card 7',
        description: 'This is the seventh card with an image.',
    },
    {
        image: 'https://png.pngtree.com/background/20231030/original/pngtree-enchanting-3d-illustration-of-a-forest-path-with-lush-trees-bushes-picture-image_5798382.jpg',
        title: 'Card 8',
        description: 'This is the eighth card with an image.',
    },
];

function Categories() {
    return (
        <>


            {/* <section >
                <div className=" top-7 ">
                    <div className='bg-[#0a1022] drop-shadow-2xl  rounded-2xl mx-0 py-4  border border-gray-800'>

                        <div className='mb-8 pr-2 mt-5 text-white'>
                            <h1 className='font-extrabold text-6xl text-center mb-6 font-Oswald '>Categories</h1>

                        </div>

                        <div className='flex flex-row justify-center px-auto gap-5 pb-2 m-auto items-center'>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                                {cards.map((card, index) => (
                                      <div key={index} className="cursor-pointer group relative flex flex-col my-1  bg-slate-900 shadow-sm border border-gray-800 rounded-xl w-80 hover:shadow-lg transition-shadow duration-300">
                                      <div className="relative border border-gray-800 h-40 mt-0 mx-0 overflow-hidden text-white rounded-xl">
                                          <img className="transition-transform rounded-b-xl h-40 w-full duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                                              src={card.image} alt="investment-seed-round" />
                                      </div>
      
                                      <div className=" pl-3">
                                          <h6 className="mb-2 text-white text-lg font-semibold font-Oswald">
                                              {card.title}
                                          </h6>
      
                                      </div>
                                  </div>
                                ))}
                            </div>


                        </div>
                    </div>

                </div>
            </section> */}
            <section className="py-20 bg-gray-800">
                <div className=" mx-auto px-14">
                <h2 className="text-6xl font-Oswald font-bold text-center pb-8 text-white">Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {["VFX", "3D Models", "Textures & Materials", "Flipbooks & Particles","VFX", "3D Models", "Textures & Materials", "Flipbooks & Particles"].map((category, index) => (
                            <Link href="/assets" >

                            <div
                                key={index}
                                className="bg-gray-700 w-[20rem] font-Oswald p-6 rounded-lg text-center hover:bg-gray-600 transition-colors duration-300"
                            >
                                <Folder className="h-16 w-16 mx-auto mb-4 text-teal-500" />
                                <h3 className="text-xl font-semibold text-white">{category}</h3>
                            </div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                    <Link href="/assets" >
                        <Button className="bg-teal-500 hover:bg-teal-600">View All Categories</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <div className="my-[15vh] bg-black"></div>


        </>
    )
}

export default Categories