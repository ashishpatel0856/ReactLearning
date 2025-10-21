import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


const Header = () => {

  const [toggle,setToggle]=useState(false)


  return (
    <div className='bg-[#2699fb] p-4'>
      <div className=' max-w-[1240px]  items-center  flex py-[12px] justify-between mx-auto'>
        <div className='text-3xl font-bold'>Ashish Tech</div>

        {
          toggle ?
           <CiMenuBurger onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
           :

        }
         
        <ul className='hidden md:flex text-white gap-10'>
          <li>Home</li>
          <li>Company</li>
          <li>Resource</li>
          <li>About</li>
          <li>Contact</li>
        </ul>


        {/* responsive menu */}
          <ul className='md:hidden w-full h-screen text-white fixed bg-black top-[92px] left-[-100%]'>
          <li className='p-3'>Home</li>
          <li className='p-3' >Company</li>
          <li className='p-3'>Resource</li>
          <li className='p-3'>About</li>
          <li className='p-3'>Contact</li>
        </ul>
      </div>
    </div>


  )
}

export default Header