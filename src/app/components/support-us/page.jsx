import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star, BlocksIcon as AdBlock } from "lucide-react"

function SupportUs() {
  return (
    <>
      
      <section className="space-y-6 bg-gray-800 font-Alumni p-8 rounded-lg text-white">
      <h1 className='font-extrabold font-Oswald text-6xl text-center mb-8 mt-2'>Support CGHeven</h1>
      <p className="text-center text-gray-300">
          Your support helps us create more free assets and tutorials for the community
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gray-700 border-gray-600 text-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="w-6 h-6 text-yellow-400 mr-2" />
                Exclusive Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Access Patreon-only assets and tutorials</p>
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
              <p className="text-gray-300">Enjoy CGHeven without any advertisements</p>
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
              <p className="text-gray-300">Help shape the future of CGHeven</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8">
          <div className="text-center" >
            <a
              href="#"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
            >
              Join on Patreon
            </a>
          </div>
        </div>
      </section>



    </>
  )
}

export default SupportUs