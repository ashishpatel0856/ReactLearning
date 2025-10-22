import React from 'react'
import laptop from '../assets/laptop.jpg'
const Experts = () => {
    return (
        <div className='max-w-[1240px] mx-auto my-10
     md:grid grid-cols-2 p-2 '>
            <div className='  col-span-1 md:w-[80%]'>
                <img src={laptop} alt="" className='inline' />
            </div>

            <div className='  cols-span-1 flex flex-col justify-center items-center'>
                <h1 className=' text-[#00df9a] font-bold my-2'> Learn From Experts</h1>
                <p className='my-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis neque nesciunt odit in hic illum impedit obcaecati numquam, at nemo laboriosam earum, deserunt nam? Ratione quam ipsam officiis qui odio!
                </p>
                <button className='w-[30%] bg-black text-white rounded p-3'>Get Start</button>
            </div>
        </div>

    )
}

export default Experts