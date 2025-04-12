import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star, BlocksIcon as AdBlock } from "lucide-react"

function SupportUs() {
  return (
    <>
      
      <section className="space-y-6 bg-gray-800 font-Oswald p-8 rounded-lg text-white">
      <h1 className='font-extrabold font-Oswald text-4xl sm:text-5xl md:text-6xl text-center mb-6 sm:mb-8 mt-0 sm:mt-2'>Support CGHEVEN</h1>
      <p className="text-center text-lg text-gray-300">
          Your support helps us create more free assets and tutorials for the community
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gray-700  border-gray-600 text-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="w-6 h-6 text-yellow-400 mr-2" />
                Exclusive Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 font-Alumni font-bold text-xl ">Access Patreon-only assets and tutorials</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-700 border-gray-600 text-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AdBlock className="w-6 h-6 text-green-400 mr-2" />
                Ad-Free Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 font-Alumni font-bold text-xl">Enjoy CGHeven without any advertisements</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-700 border-gray-600 text-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="w-6 h-6 text-red-400 mr-2" />
                Vote on Future Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 font-Alumni font-bold text-xl">Help shape the future of CGHeven</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center font-Oswald mt-8">
          
                          <Button className="bg-teal-500 hover:bg-teal-600 text-[1.2rem]">Join on Patreon</Button>
            
              
          
          
        </div>
      </section>



    </>
  )
}

export default SupportUs