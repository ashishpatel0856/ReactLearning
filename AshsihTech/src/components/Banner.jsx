import React from 'react'
import Typed from 'react-typed'

const Banner = () => {
  return (
    <div className='bg-[#2699fb] w-full py-[100px]'>
        <div className='max-w-[1240px] my-[100px] font-bold mx-auto text-center'>
            <div className='text-xl md:text-3xl mb-4'>Learn with us</div>
            <h2 className='text-white text-3xl md:text-[50px] md:p-[24px] '>Grow with us.</h2>
            <div className='text-[25px] md:p-[24px] text-white '>Lear
              <Typed
              strings={['Spring Boot and React js']}
              typeSpeed={100}
              loop={true}
               />
            </div>
        </div>
    </div>
  )
}

export default Banner