'use client'

import React, { useState } from 'react'

const Nav = () => {
    let Links =[
        {name:"Home",link:"/"},
        {name:"Alzheimer's",link:"/alzheimer"},
        {name:"Stroke",link:"/stroke"},
        {name:"Tumour",link:"/tumour"},
        {name:"Contact",link:"/"},
    ];
    let [open,setOpen]=useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center
      text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-1'>
                        <img src="https://cdn.pixabay.com/photo/2016/10/02/19/50/brain-1710293_1280.png" className="h-16 brightness-100  hue-rotate-30"/>
                    </span>
                    <div  className="mx-2 text-blue-500"> My Walnut</div>
                </div>

                <div onClick={()=>setOpen(!open)} className='text-5xl absolute right-8 top-6 cursor-pointer md:hidden text-sky-600'>
                    <p> {open ? '✕':'≡'} </p>
                </div>


                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-495px]'}`}>
                    {
                        Links.map((link)=>(
                            <li key={link.name} className='md:ml-8 text-lg md:my-0 my-7'>
                                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Nav