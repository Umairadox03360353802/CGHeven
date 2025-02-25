import React from 'react'

function AboutUs() {
    return (
        <>
            <div className='max-w-full mx-auto py-5 bg-[#0a1022] '>
                <div className='text-white text-center flex flex-row justify-center items-center mb-5 mt-6 '>
                     <div className='text-white text-center flex flex-col justify-center items-center '>

                    <h1 className='text-5xl m-4 font-extrabold font-Montserrat'>About Us</h1>
                    <p className='text-md mb-5 font-medium max-w-xl font-VarelaRound'>CGHeven is a one-person mission to provide free, high-quality CG assets and tutorials to empower creators worldwide. Built with passion and dedication, it’s driven by a love for the CG community and a desire to make professional resources accessible to everyone. By supporting CGHeven, you’re helping to grow a platform that values creativity, learning, and collaboration.</p>
                     </div>

                    <div className='w-64 h-64'>
                        <img src="/main1.png" alt="" />

                    </div>

                </div>
                {/* FAQ */}

                <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-0 lg:py-14 mx-auto">
                    {/* <!-- Title --> */}
                    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                        <h2 className="text-2xl font-Montserrat font-bold md:text-4xl md:leading-tight dark:text-white">Your questions, answered</h2>
                        <p className="mt-1 text-gray-600  dark:text-neutral-400">Answers to the most frequently asked questions.</p>
                    </div>
                    {/* <!-- End Title --> */}

                    <div className="max-w-5xl mx-auto">
                        {/* <!-- Accordion --> */}
                        <div className="hs-accordion-group">
                            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/10 active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-xl font-bold font-Montserrat text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                                    Can I cancel at anytime?
                                    <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-inejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-inejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                                </button>
                                <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                                    <p className="text-gray-800 dark:text-neutral-200 font-VarelaRound">
                                        Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.
                                    </p>
                                </div>
                            </div>

                            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/10" id="hs-basic-with-title-and-arrow-stretched-heading-two">
                                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-xl font-bold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                                    My team has credits. How do we use them?
                                    <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                                </button>
                                <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                    <p className="text-gray-800 dark:text-neutral-200 font-VarelaRound">
                                        Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.
                                    </p>
                                </div>
                            </div>

                            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/10" id="hs-basic-with-title-and-arrow-stretched-heading-three">
                                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-xl font-bold font-Montserrat text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                                    How does Preline's pricing work?
                                    <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                                </button>
                                <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                                    <p className="text-gray-800 dark:text-neutral-200 font-VarelaRound">
                                        Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.
                                    </p>
                                </div>
                            </div>

                            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/10" id="hs-basic-with-title-and-arrow-stretched-heading-four">
                                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-xl font-bold font-Montserrat text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
                                    How secure is Preline?
                                    <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                                </button>
                                <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                                    <p className="text-gray-800 dark:text-neutral-200 font-VarelaRound">
                                        Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.
                                    </p>
                                </div>
                            </div>

                            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/10" id="hs-basic-with-title-and-arrow-stretched-heading-five">
                                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-xl font-bold font-Montserrat text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
                                    How do I get access to a theme I purchased?
                                    <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                                </button>
                                <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
                                    <p className="text-gray-800 dark:text-neutral-200 font-VarelaRound">
                                        If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with.
                                    </p>
                                </div>
                            </div>

                            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/10" id="hs-basic-with-title-and-arrow-stretched-heading-six">
                                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-xl font-bold font-Montserrat text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                                    Upgrade License Type
                                    <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                                </button>
                                <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                                    <p className="text-gray-800 dark:text-neutral-200 font-VarelaRound">
                                        There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Accordion --> */}
                    </div>
                </div>
                {/* <!-- End FAQ --W*/}

                <div className='w-full flex flex-col justify-center items-start px-44'>
                    <h1 className='text-white font-bold font-Montserrat text-4xl mb-6 mt-10'>Asset License</h1>

                    <p className="mb-3 text-gray-300 font-VarelaRound ">All assets <a href="#" className="font-medium  underline text-blue-500 hover:text-blue-600  hover:no-underline"> HDRIs, textures </a>and<a href="#" className="font-medium  underline text-blue-500 hover:text-blue-600  hover:no-underline"> 3D Models</a> on this site are the original work of Poly Haven staff, or artists who willingly and directly donate/sell their work to Poly Haven.</p>
                    <p className="mb-3 text-gray-300 font-VarelaRound ">Our assets are all licensed as <a href="#" className="font-medium  underline text-blue-500 hover:text-blue-600  hover:no-underline"> CC0</a>, which is effectively  <a href="#" className="font-medium  underline text-blue-500 hover:text-blue-600  hover:no-underline">Public Domain</a> even in jurisdictions that do not support the Public Domain.</p>
                    <p className="mb-3 text-gray-300 font-VarelaRound ">Here's an excerpt from the <a href="#" className="font-medium  underline text-blue-500 hover:text-blue-600  hover:no-underline">CC0 FAQ page</a> to clarify:</p>
                    <p className="mb-3 text-gray-500 font-VarelaRound dark:text-gray-400">"Once the creator or a subsequent owner of a work applies CC0 to a work, the work is no longer his or hers in any meaningful sense under copyright law. Anyone can then use the work in any way and for any purpose, including commercial purposes [...] Think of CC0 as the "no rights reserved" option. CC0 is a useful tool for clarifying that you do not claim copyright in a work anywhere in the world".</p>
                    <p className="mb-3  font-VarelaRound dark:text-gray-300">In other words:</p>

                    <ul className="max-w-5xl space-y-1 list-disc font-VarelaRound  list-inside text-gray-300 ml-6">
                        <li>
                            <span className="font-bold    text-white">You can use our assets for any purpose</span> , including commercial work.
                        </li>
                        <li>
                            <span className="font-bold   text-white">You do not need to give credit</span> or attribution when using them (although it is appreciated).
                        </li>
                        <li>
                            <span className="font-bold   text-white">You can redistribute them</span> , share them around, include them when sharing your own work, or even in a product you sell.
                        </li>
                    </ul>
                    <p className="mb-3 mt-5 text-gray-300 font-VarelaRound ">More info: <a href="#" className="font-medium  underline text-blue-500 hover:text-blue-600  hover:no-underline">CC0 summary, CC0 wiki, CC0 FAQ.</a> </p>

                    <h1 className='text-white font-bold font-Montserrat text-4xl mb-6 mt-10'>Why CC0?</h1>
                    <p className="mb-3  font-VarelaRound dark:text-gray-300">We believe the benefits of using this license outweigh the obvious drawbacks for us as a business. <br />

                        Yes it's possible that unethical users can (and do) resell our work for their own profit, at the cost of unwitting customers who didn't know they were purchasing content they could get here for free. <br />
                        But what the 3D industry as a whole gains from our work being so freely available is immeasurable <br />

                        3D art is also only the tip of the iceberg, we've heard from numerous data scientists, software developers, automotive engineers and AI researchers all using our assets in their work, which simply wouldn't be possible with more restrictive (even open source) licenses. <br />

                        We don't have anything against Copyright in general, we simply believe we can do more good in the world by providing as much freedom as possible. <br />

                        If you benefit from our work financially, e.g. by including our assets in a product you sell, or simply make frequent use of them in your own work, please consider <a href="" className='font-medium  underline text-blue-500 hover:text-blue-600  hover:no-underline'>supporting us on Patreon</a>  with a small monthly donation in order to help us continue to produce more assets and maintain this platform.</p>

                    <h1 className='text-white font-bold font-Montserrat text-4xl mb-6 mt-10'>Terms of Service</h1>
                    <p className='mb-3  font-VarelaRound dark:text-gray-300'>
                        Although our assets are shared under the CC0 license, and our code is open source, we maintain a standard Terms of Service agreement to prevent any misuse of this website (polyhaven.com).
                    </p>
                    <h1 className='text-white font-bold font-Montserrat text-4xl mb-6 mt-10'>1. Acceptance of Terms</h1>
                    <p className='mb-3  font-VarelaRound dark:text-gray-300'>
                        By using this website, you agree to be bound by these Terms of Service (ToS). If you do not agree with any of these terms, please refrain from using this website.
                    </p>
                    <h1 className='text-white font-bold font-Montserrat text-4xl mb-6 mt-10'>2. Changes to Terms</h1>
                    <p className='mb-3  font-VarelaRound dark:text-gray-300'>
                        We reserve the right to modify these ToS at any time. It is your responsibility to review these terms periodically for any changes. Your continued use of the website after any changes to the ToS constitutes your acceptance of those changes.
                    </p>
                    <h1 className='text-white font-bold font-Montserrat text-4xl mb-6 mt-10'>3. Use of the Website</h1>
                    <p className='mb-3  font-VarelaRound dark:text-gray-300'>
                        3.1. You agree to use this website for lawful purposes only.

                    </p>
                    <p className='mb-3  font-VarelaRound dark:text-gray-300'>
                        3.2. You must not engage in any activity that may disrupt or interfere with the proper functioning of the website, including but not limited to:

                    </p>
                    <ul className="max-w-4xl font-VarelaRound space-y-1 text-gray-300 list-disc list-inside ml-6">
                        <li>
                        Web scraping or data mining without express permission.                        </li>
                        <li>
                        Distributed denial-of-service (DDoS) attacks.
                        </li>
                        <li>
                        Unauthorized access to website resources or user accounts.
                        </li>
                        <li>
                        Posting malicious code, malware, or any harmful content.
                        </li>
                        <li>
                        Engaging in any form of harassment or abuse towards other users.
                        </li>
                    </ul>
                    <h1 className='text-white font-bold font-Montserrat text-4xl mb-6 mt-10'>4. Intellectual Property</h1>
                    <p className='mb-3  font-VarelaRound dark:text-gray-300'>
                    4.1. All content on this website, excluding the CC0 assets themselves, is protected by intellectual property laws. You may not reproduce,<br /> distribute, or otherwise use this content without prior written permission from the website or intellectual property owner.


                    </p>
                    <p className='mb-3  font-VarelaRound dark:text-gray-300'>
                    4.2. Examples of such content includes but is not limited to:


                    </p>
                    <ul className="max-w-4xl font-VarelaRound space-y-1 text-gray-300 list-disc list-inside ml-6 ">
                        <li>
                        <a href="" className='font-medium  underline text-blue-500 hover:text-blue-600  hover:no-underline'>Logos</a>                     
                         </li>
                        <li>
                        User avatar images
                        </li>
                        <li>
                        Asset thumbnails and example renders
                        </li>
                        <li>
                        User renders
                        </li>
                        <li>
                        Asset metadata such as tags and categories
                        </li>
                    </ul>

                    <h1 className='text-white font-bold font-Montserrat text-4xl mb-6 mt-10'>5. Public API</h1>
                    <p className='mb-3  font-VarelaRound dark:text-gray-300'>
                    The use of the public API hosted at api.polyhaven.com is governed by separate API Terms. By using the public API, you agree to abide by the <a href="" className='font-medium  underline text-blue-500 hover:text-blue-600  hover:no-underline'>API Terms</a> in addition to these Terms of Service.    
                    </p>
                    <h1 className='text-white font-bold font-Montserrat text-4xl mb-6 mt-10'>6. Privacy</h1>
                    <p className='mb-3  font-VarelaRound dark:text-gray-300'>
                    Your use of this website is also governed by our <a href="" className='font-medium  underline text-blue-500 hover:text-blue-600  hover:no-underline'>Privacy Policy</a> . By using this website, you consent to the collection, use, and disclosure of your information as described in the Privacy Policy.    
                    </p>
                    <h1 className='text-white font-bold font-Montserrat text-4xl mb-6 mt-10'>7. Termination</h1>
                    <p className='mb-3  font-VarelaRound dark:text-gray-300'>
                    We reserve the right to terminate or suspend your access to the website at our discretion, without notice, for any breach of these ToS or for any other reason.                    </p>
                    <h1 className='text-white font-bold font-Montserrat text-4xl mb-6 mt-10'>8. Disclaimer</h1>
                    <p className='mb-3  font-VarelaRound dark:text-gray-300'>
                    The website is provided "as is" without any warranties, express or implied. We do not guarantee that the website will be error-free or uninterrupted. You use the website at your own risk.                    </p>
                    <h1 className='text-white font-bold font-Montserrat text-4xl mb-6 mt-10'>9. Limitation of Liability</h1>
                    <p className='mb-3  font-VarelaRound dark:text-gray-300'>
                    To the extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from or related to your use of the website.                    </p>
                    <h1 className='text-white font-bold font-Montserrat text-4xl mb-6 mt-10'>10. Governing Law</h1>
                    <p className='mb-3  font-VarelaRound dark:text-gray-300'>
                    These ToS are governed by and construed in accordance with the laws of South Africa. Any disputes arising from these ToS or your use of the website shall be subject to the exclusive jurisdiction of the courts in South Africa                    </p>
                    <h1 className='text-white font-bold font-Montserrat text-4xl mb-6 mt-10'>11. Contact Information</h1>
                    <p className='mb-3  font-VarelaRound dark:text-gray-300'>
                    If you have any questions or concerns about these ToS, please<a href="" className='font-medium  underline text-blue-500 hover:text-blue-600  hover:no-underline'>contact us.</a>
                    </p>



                </div>


            </div>
        </>
    )
}

export default AboutUs