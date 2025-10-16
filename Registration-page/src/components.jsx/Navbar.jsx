import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-ful absolute bg-gradient-to-r from-blue-400 to-emerald-400'>
     <header className='flex justify-between items-center
     text-black py-6 px-8
     md:px-32 bg-white drop-shadow-md'>
        <a href="#">
            <b className='font-extrabold'>NAVBAR</b>
        </a>

        <ul className=' flex items-center gap-12 font-semibold text-base'>
            <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all
            cursor-pointer'>Home</li>
            <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all
            cursor-pointer'>Products</li>
            <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all
            cursor-pointer'>Explore</li>
            <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all
            cursor-pointer'>Contact</li>
        </ul>

        <div className='relative hidden md:flex items-center justify-center gap-3'></div>
     </header>
    </div>
  )
}

export default Navbar