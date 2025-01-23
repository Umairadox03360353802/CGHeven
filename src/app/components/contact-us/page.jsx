import React from 'react'

function ContactUs() {
    return (
        <>
            <section className="py-20 relative">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="  shadow-2xl shadow-slate-900 absolute bg-gradient-to-br from-gray-900 via-gray-900 to-transparent opacity-90 rounded-lg left-[40px] right-[40px] top-[35px] h-[60vh] w-[200vh] "> </div>

                    <div className="w-full relative ative justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                        

                        <div className="w-full  flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full z-30 flex-col justify-start lg:items-start items-center gap-6 flex">
                                <p className='  text-orange-700'> consectetur  </p>
                                <h2 className="text-white text-5xl font-extrabold font-manrope leading-normal lg:text-start text-center">Contact US</h2>
                                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">Through collaborationperse perspectives and strengths are leveraged to create inclusive
                                    environments where everyone has the opportunity to thrive. This approach not only fosters personal growth and achievement but also strengthens the fabric of society.</p>
                            </div>
                            
                        </div>

                        <div className=' h-[56vh] w-[90vh]'>

                            {/* <div className=" absolute z-0 bg-gradient-to-r from-slate-950 via-gray-900 to-transparent opacity-70 rounded-lg left-[-88px] top-[-150px] h-[70vh] w-[40vh] ">

                            </div> */}
                            <img className="absolute opacity-70 lg:mx-0 mx-auto pb-16 h-full rounded-3xl object-cover" src="https://thumbs.dreamstime.com/b/magical-glowing-tree-golden-sparkles-enchanted-forest-background-d-illustration-347027093.jpg" alt="about Us image" />
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default ContactUs