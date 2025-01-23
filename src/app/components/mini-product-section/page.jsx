import React from 'react'

function MiniProductsSection() {
	return (
		<>
			{/* <section classNameNameName="  relative">
        <div classNameNameName="absolute  w-full h-[95vh] top-0 left-0 bg-cover bg-center bg-no-repeat opacity-90 bg-fixed" style={{ backgroundImage: 'url("https://img.freepik.com/premium-photo/midsection-woman-sitting-table_1048944-4391496.jpg?semt=ais_hybrid")' }}></div>
        <div classNameNameName=" absolute  top-7 px-8">

          <div classNameNameName=' font-serif w-full ' >
            <div classNameNameName='flex flex-col justify-start text-white items-start opacity-80 w-full h-[40vh]  ' >
              <div classNameNameName=' flex flex-col justify-start  items-center rounded-xl bg-black w-[50%] h-[40vh] p-16 font-bold'>

                <h1 classNameNameName='text-4xl'>100% Free</h1><br />
                <p classNameNameName='text-lg font-semibold' >Not just free, but CC0, meaning you can use them for absolutely any purpose without restrictions. <br /><br />
                  No paywalls or signup required, simply download what you want and use it immediately without worry.</p>
              </div>

            </div> <br />

            <div classNameNameName=' flex flex-col justify-end  items-end text-white  w-full h-[40vh] my-12 '>
              <div classNameNameName='flex flex-col justify-center items-center rounded-xl bg-black opacity-80 w-[50%] h-[50vh] p-16 font-bold'>
                <h1 classNameNameName='text-4xl '>Hand Crafted</h1><br />
                <p classNameNameName='text-lg font-semibold'>All our assets are made by humans with love, avoiding generative AI and overreliance on procedural methods. <br />

                  We don't want to pollute the web with more trash, so we focus on creating the best assets that you can actually use.

                  Our target is to create content that will not just hold up to today's standards, but higher future standards too.</p>
              </div>
            </div>
          </div>


        </div>
      </section> */}


			<section className="bg-slate-950 mt-10">
				<div className='bg-[#0a1022] drop-shadow-2xl  rounded-2xl mx-32 py-4  border border-gray-800'>


					<div className="py-34 px-0 mx-auto max-w-screen-xl sm:py-4 lg:px-4 ml-16">
						<div className=" grid grid-cols-4 sm:grid-cols-2 md:grid-cols-6 gap-4  h-full">


							<div className=" col-span-3 sm:col-span-1 md:col-span-3 shadow-[0px_0px_69px_8px_rgba(204,128,150,0.3)] rounded-2xl h-auto md:h-full flex flex-col ">
								<a href="" className="group relative flex flex-col overflow-hidden rounded-2xl px-4 pb-4 pt-40 flex-grow">
									<img src="https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=2048,f=jpeg,q=85/posts/images/633490247455356525/213f2944-6f19-463c-ae94-3a08438390a4.jpg" alt="" className="absolute inset-0 top-1 rounded-2xl z-10 h-[49vh] w-full px-2 py-1 object-cover " />
									<div className="absolute z-20 inset-2 bg-gradient-to-r from-slate-950 via-slate-950 to-transparent p-36  rounded-2xl "></div>
									<div className='z-30 absolute top-0 flex flex-col p-10 justify-start w-[80vh] h-[10vh]  '>

										<h3 className=" text-5xl  text-white font-extrabold font-Montserrat  xs:text-xl md:text-5<h1 className='text-5xl font-Montserrat'>CGHeven</h1>xl">Lorem ipsum </h3><br />
										<h3 className=" text-5xl mb-8 text-white font-extrabold font-Montserrat  xs:text-xl md:text-5xl"> dollor? </h3>
										<p className='text-slate-400 pr-32 font-VarelaRound'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est voluptas esse placeat optio magnam ea culpa fuga </p>
										<div className="relative w-80 py-6 flex flex-row justify-start items-center gap-4 right-0 text-start ">


											<button className="sm:w-fit w-full px-3 py-2 bg-slate-900 border border-[#40E0D0] hover:bg-[#40E0D0] transition-all duration-700 ease-in-out rounded-3xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
												<span className="px-1 mx-6 text-white font-Montserrat text-sm font-medium leading-6"> Started</span>
											</button>
											<button className="sm:w-fit w-full px-12 py-2 bg-[#40E0D0] hover:bg-[#40E0D0] transition-all duration-700 ease-in-out rounded-3xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
												<span className="px-1 text-white font-Montserrat text-sm font-medium leading-6"> Start</span>
											</button>


										</div>
									</div>
									<div className='absolute shadow-[0px_0px_11px_0px_rgba(239,236,235,1)] -inset-1 backdrop-blur-[var(--glass-blur)] backdrop-saturate-[var(--glass-saturation)] border border-white/[var(--glass-border-opacity)] rounded-lg  shadow-black/10 bg-[linear-gradient(135deg,rgba(221,130,149,0.88)_0%,rgba(251,248,245,0.6424)_51%,rgba(34,41,70,0.15839999999999999)_98%)] [&]:--glass-blur: 19px;--glass-saturation: 150%;--glass-border-opacity: 0.32 '></div>
								</a>
							</div>

							<div className="col-span-2 sm:col-span-1 md:col-span-3 ml-0  ">
								{/* <a href="" className="group relative flex flex-col overflow-hidden rounded-lg border-4 border-gray-700 px-2 pb-4 pt-40 mb-4">
									<img src="https://img.pikbest.com/wp/202346/violet-pink-abstract-inner-space-of-a-night-club-3d-render-neon-room-with-blue-and-light_9714746.jpg!w700wp" alt="" className="absolute inset-0 h-full w-full object-cover " />
									<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
									<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Gin</h3>
								</a> */}
								<div className="grid gap-4 grid-cols-2 sm:grid-cols-1 lg:grid-cols-2">
									<a href="" className="group relative flex flex-col overflow-hidden rounded-lg border-4 border-gray-700 px-4 pb-4 pt-40 mb-3">
										<img src="https://img.pikbest.com/wp/202345/facets-iridescent-blue-violet-pink-metallic-texture-in-a-3d-abstract-faceted-background-render_9617030.jpg!w700wp" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
										<div className="absolute inset-0 "></div>
										<h3 className="z-10 text-2xl font-Montserrat font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Lorem 3.</h3>
									</a>
									<a href="" className="group relative flex flex-col overflow-hidden rounded-lg border-4 border-gray-700 px-4 pb-4 pt-40 mb-3">
										<img src="https://media.sketchfab.com/models/4b01d679d6ba4668a3e9a6f531a30788/thumbnails/2fc948efbb2d4d3fa03c9c189b47272b/da836c7d3a6f4e45a47a03a7949d3813.jpeg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
										<div className="absolute inset-0 "></div>
										<h3 className="z-10 text-2xl font-Montserrat font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Lorem 4</h3>
									</a>
								</div>
								<div className="grid gap-4 grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 ">
									<a href="" className="group relative flex flex-col overflow-hidden rounded-lg border-4 border-gray-700 px-4 pb-4 pt-40">
										<img src="https://img.pikbest.com/wp/202345/facets-iridescent-blue-violet-pink-metallic-texture-in-a-3d-abstract-faceted-background-render_9617030.jpg!w700wp" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
										<div className="absolute inset-0 "></div>
										<h3 className="z-10 text-2xl font-Montserrat font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Lorem 3.</h3>
									</a>
									<a href="" className="group relative flex flex-col overflow-hidden rounded-lg border-4 border-gray-700 px-4 pb-4 pt-40">
										<img src="https://media.sketchfab.com/models/4b01d679d6ba4668a3e9a6f531a30788/thumbnails/2fc948efbb2d4d3fa03c9c189b47272b/da836c7d3a6f4e45a47a03a7949d3813.jpeg" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
										<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
										<h3 className="z-10 text-2xl font-Montserrat font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Lorem 4</h3>
									</a>
								</div>
							</div>
							{/* <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
				<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src="https://images.unsplash.com/photo-1693680501357-a342180f1946?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Brandy</h3>
				</a>
			</div> */}
						</div>
					</div>
				</div>
			</section>

			<section className="h-[10px]"></section>

		</>
	)
}

export default MiniProductsSection