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



            <section className="py-20 bg-gray-800">
                <div className=" mx-auto px-10">
                    <h2 className="text-6xl font-Oswald font-bold text-center pb-8 text-white">Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {["VFX", "3D Models", "Textures & Materials", "Flipbooks & Particles", "VFX", "3D Models", "Textures & Materials", "Flipbooks & Particles"].map((category, index) => (
                            <Link href="/assets" key={index} >

                                <div
                                    key={index}
                                    className="bg-gray-700 w-full font-Oswald p-8  rounded-lg text-center hover:bg-gray-600 transition-colors duration-300"
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