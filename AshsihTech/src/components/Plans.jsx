import React from 'react'

const Plans = () => {
  return (
    <div className='py-[100px] px-2'>
        <div className='mx-w-[1240px] mx-auto md:grid grid-cols-3 gap-6'>
            <div className='shodow-xl  h-[300px]  bg-slate-100 hover:scale-105 duration-100'>
                first
            </div>
            <div className='shodow-xl h-[300px] bg-slate-100 hover:scale-105 duration-100'>
                second
            </div>
            <div className='shodow-xl h-[300px]  bg-slate-100 hover:scale-105 duration-100'>
                third
            </div>
        </div>
    </div>
  )
}

export default Plans