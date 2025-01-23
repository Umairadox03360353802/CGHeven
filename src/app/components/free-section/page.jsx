import React from 'react'

function FreeSection() {
  return (
    <>
      <section className="  relative">
        {/* <div className="absolute  w-full h-[95vh] top-0 left-0 bg-cover bg-center bg-no-repeat opacity-50 bg-fixed" style={{ backgroundImage: 'url("https://img.freepik.com/premium-photo/midsection-woman-sitting-table_1048944-4391496.jpg?semt=ais_hybrid")' }}></div> */}
        <div className=" ">
          <div className='bg-[#0a1022] border border-gray-800'>

            <div className='  w-full px-5 flex flex-row justify-center items-center ' >


            <div className=' flex flex-col justify-center  items-center text-white  w-full h-[40vh] '>

<div className='w-[70vh] h-[70vh]'>

  <img className='object-cover' src="https://static.vecteezy.com/system/resources/previews/022/483/484/non_2x/3d-burglar-girl-with-personality-engaging-and-expressive-model-for-kids-media-transparent-background-free-png.png" alt="" />
</div>

</div>

              <div className='flex flex-col justify-center text-white items-center opacity-80 w-full h-[90vh]  ' >
                <div className=' flex flex-col justify-center  items-center rounded-3xl bg-[#0a1022] w-full h-[40vh] px-12 pt-10 font-extrabold'>

                  <h1 className='text-5xl font-Montserrat'>100% Free CG Assets</h1><br />
                  <p className='text-lg text-center font-semibold text-slate-400 font-VarelaRound' >Explore our collection of high-quality 3D models, VFX elements, Unreal Engine environments,
                     and more—all completely free to download and use. Each asset is carefully crafted using advanced techniques like photogrammetry and procedural workflows to ensure
                      the highest quality for creators worldwide. CGHeven is dedicated to supporting creativity with accessible resources.</p>
                </div>

              </div>

             
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FreeSection