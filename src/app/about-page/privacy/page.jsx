import React from 'react'

function Pravicy() {
    return (
        <>
            <div className='w-full flex flex-col justify-center items-start px-44 pt-5 pb-16 bg-[#0a1022]'>
                <h1 className='text-white font-bold font-Montserrat text-5xl mb-6 mt-10'>Privacy Policy</h1>
                <h1 className='text-white font-bold font-Montserrat text-3xl mb-6 mt-10'>Third Party Cookies</h1>
                <p className="mb-3  font-VarelaRound dark:text-gray-300">Third party vendors, including Google, use cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.</p>
                <p className="mb-3  font-VarelaRound dark:text-gray-300">Click here to read <a href="" className='font-medium  underline text-blue-500 hover:text-blue-600  hover:no-underline'>Google's Privacy Policy</a></p>
                <p className="mb-3  font-VarelaRound dark:text-gray-300">If you are not comfortable with this, you can opt out of personalized advertising in your <a href="" className='font-medium  underline text-blue-500 hover:text-blue-600  hover:no-underline'>Ads Settings</a>, or use an ad-blocker such as <a href="" className='font-medium  underline text-blue-500 hover:text-blue-600  hover:no-underline'>  uBlock Origin</a>.</p>

                <h1 className='text-white font-bold font-Montserrat text-3xl mb-6 mt-10'>UUID</h1>
                <p className='mb-1  font-VarelaRound dark:text-gray-300'>
                    When you first visit this site and accept the Cookie popup, we store a unique random identifier in your browser, which is sent to us when you download an asset (along with some information about the resolution and formats you downloaded). This helps us to see which assets are more popular and what people are generally looking for, so we can make decisions about what to create next.
                </p>
                <p className='mb-3  font-VarelaRound dark:text-gray-300'>
                    If you wish for us to delete all recorded downloads from your UUID, you can contact us.
                </p>
                <h1 className='text-white font-bold font-Montserrat text-3xl mb-6 mt-10'>Download Preferences</h1>
                <p className='mb-1  font-VarelaRound dark:text-gray-300'>
                    If you customize the resolution or format options when downloading an asset, this information is stored permanently in your browser so that it can be used again for subsequent downloads to save you time.
                </p>
                <h1 className='text-white font-bold font-Montserrat text-3xl mb-6 mt-10'>Patron Names in Footer</h1>
                <p className='mb-1  font-VarelaRound dark:text-gray-300'>
                    If you customize the resolution or format options when downloading an asset, this information is stored permanently in your browser so that it can be used again for subsequent downloads to save you time.
                </p>
                <p className="mb-1  font-VarelaRound dark:text-gray-300">The user names of all active supporters on <a href="" className='font-medium  underline text-blue-500 hover:text-blue-600  hover:no-underline'>Patreon </a>are automatically shown in the footer of every page on this site.</p>

                <p className='mb-1  font-VarelaRound dark:text-gray-300'>
                    The 30 newest patrons are also shown on the home page.
                </p>
                <p className="mb-1  font-VarelaRound dark:text-gray-300">If you would like your name removed, you can visit your <a href="" className='font-medium  underline text-blue-500 hover:text-blue-600  hover:no-underline'>account page </a>and disable the <span className='className="font-bold text-white'>Footer Credit</span>visibility.</p>

                <p className='mb-1  font-VarelaRound dark:text-gray-300'>
                    Other than what's mentioned above, Poly Haven does not store any user data or cookies.
                </p>

            </div>
        </>
    )
}

export default Pravicy