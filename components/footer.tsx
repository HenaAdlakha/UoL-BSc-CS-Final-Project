import React from 'react'


const Footer = () => {
    return (
        <div className=" mx-30 p-10 bg-white shadow-[0_40px_60px_1px_rgba(0,0,0,0.1)] w-full">
            <div className="mb-5 bg-gradient-to-bl from-sky-500/50 from-5% via-blue-500/50 via-30% to-violet-500/50 to-90%" style={{height:3}}>
            </div>
                <div className="max-w-screen-xl px-4 py-4 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                    <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                        <div className="px-5 py-2">
                            <a href="#" className="text-gray-800 hover:text-gray-400 duration-500">
                                About
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-gray-800 hover:text-gray-400 duration-500">
                                Blog
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-gray-800 hover:text-gray-400 duration-500">
                                Github
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-gray-800 hover:text-gray-400 duration-500">
                                Pricing
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-gray-800 hover:text-gray-400 duration-500">
                                Contact
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-gray-800 hover:text-gray-400 duration-500">
                                Terms
                            </a>
                        </div>
                    </nav>
                    <p className="mt-8 text-base leading-6 text-center text-gray-400">
                        © 2023 MyWalnut.org, Inc. All rights reserved.
                    </p>
                </div>
        </div>
    )

}
export default Footer