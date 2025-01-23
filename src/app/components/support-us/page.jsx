import React from 'react'

function SupportUs() {
  return (
    <>
      <section className="py-4 relative">
        <div className='bg-[#0a1022] drop-shadow-2xl flex flex-row justify-between items-center h-[50vh] rounded-2xl mx-32 px-20 py-2   border border-gray-800'>
          <div className='px-5 py-0 mb-0 w-[100vh] h-[30vh]    rounded-3xl'>
            <h1 className='text-white text-4xl font-Montserrat font-extrabold  p-10 text-center '>Support CGHeven on Patreon!</h1>
            <p className='text-slate-300 text-lg px-20 pt-0 font-VarelaRound text-center'>Help us keep creating free CG assets and tutorials for everyone. Unlock exclusive perks like ad-free browsing, premium content, and the power to vote on what we create next!</p>
          </div>
          <div className="relative w-100 mt-12 py-6 flex flex-row justify-start items-center gap-5 right-28 text-start ">


            <button className="sm:w-fit rounded-2xl w-full px-10 py-4  bg-[#88e5e9] shadow-[0px_0px_45px_20px_rgba(0,96,100,0.4)]
  hover:bg-[#f3a284] transition-all duration-700 ease-in-out justify-center items-center flex">
              <span className="px-4 text-slate-900 text-lg font-bold font-Montserrat leading-6"> Join Now</span>
            </button>
            {/* <button className="sm:w-fit w-full px-6 py-3 bg-slate-900 border border-[#f3a284] hover:bg-[#f3a284] transition-all duration-700 ease-in-out rounded-2xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-1 text-white text-md font-medium leading-6">Finance Reports</span>
            </button> */}


          </div>

        </div>
      </section>

    </>
  )
}

export default SupportUs