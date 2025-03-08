'use client'
import React from 'react'

const cards = [
	{ title: "10 EASY", subtitle: "DRAWINGS", logo: "https://www.youtube.com/yt/about/static/images/favicon.ico" },
	{ title: "20 DOODLES", subtitle: "FOR PATRONS", logo: "https://www.patreon.com/favicon.ico" },
	{ title: "PREMIUM", subtitle: "TUTORIAL", logo: "https://www.youtube.com/yt/about/static/images/favicon.ico" },
	{ title: "PREMIUM", subtitle: "TUTORIAL", logo: "https://www.patreon.com/favicon.ico" },
	

];


function ProductTutorials() {
  return (
    <>
    <div className=" mx-auto px-5 py-3  ">
    <div className='  text-white'>
                    <h1 className='font-extrabold font-Oswald text-4xl text-center mb-4 mt-2'>Tutorials</h1>

                </div>

    <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
						
								{cards.map((card, index) => (
									<div key={index} className='py-14 '>
										<div  className=" aspect-auto bg-white rounded-xl  shadow-lg overflow-hidden hover:shadow-xl transition-all">
											<div className="aspect-auto ">
											<iframe  src="https://www.youtube.com/embed/stNnNjM-Rhk" className='h-[300px] w-[373px]' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  " allowfullscreen></iframe>
											</div>

											<div className="p-5   ">


												<div className="flex justify-between gap-5 items-center mx-4">
													<div>
														<h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
														<p className="text-gray-500 text-sm mt-1">Premium cotton blend</p>
													</div>

													<div className='h-5 w-5 flex flex-col justify-center items-center  my-2 gap-2'>
														<img src="./youtube-logo.png" alt="" />
														<p className='font-semibold font-Montserrat text-xs text-center'>FREE <br />TUTORIAL</p>

													</div>
												</div>


											</div>
										</div>
									</div>


								))}
							
						</div>
    </div>
    </>
  )
}

export default ProductTutorials