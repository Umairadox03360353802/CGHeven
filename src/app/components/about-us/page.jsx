import React from 'react'

function AboutUs() {
  return (
    <>
      <section className="">
        <div className='bg-[#0a1022] drop-shadow-2xl flex flex-row justify-center items-center rounded-2xl mx-32 py-6  border border-gray-800'>

          <div className="gap-16 items-center justify-center  py-8 px-28 mx-auto max-w-screen-xl lg:flex lg:flex-row lg:py-16 lg:px-6">
            <div className=" text-slate-400 sm:text-lg dark:text-gray-400 w-full">
              <h2 className="mb-6 text-6xl tracking-tight font-extrabold font-Montserrat text-gray-900 dark:text-white">About Us</h2>
              <p className="mb-4 font-VarelaRound">CGHeven is a one-person mission to provide free, high-quality CG assets and tutorials to empower creators worldwide. Built with passion and dedication, it’s driven by a love for the CG community and a desire to make professional resources accessible to everyone. By supporting CGHeven, you’re helping to grow a platform that values creativity, learning, and collaboration.</p>
            </div>
            <div className="flex flex-col gap-1 roundded-full  mt-2">
              {/* <img className="w-60 h-72 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/> */}
              {/* <img src="/main.jpg" alt="Circular Image" className="w-[470px] shadow-[0px_0px_45px_10px_rgba(193,174,178,1)] h-80 rounded-full object-cover  ring-2 ring-blue-500" /> */}
               <img src="/main1.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs