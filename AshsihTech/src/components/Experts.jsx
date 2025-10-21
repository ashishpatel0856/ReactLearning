import React from 'react'
import laptop from '../assets/laptop.jpg'
const Experts = () => {
    return (
        <div className='max-w-[1240px] mx-auto my-10
    border-black grid grid-cols-3 '>
            <div className='border border-[blue]  col-span-1'>
                <img src={laptop} alt="" />
            </div>

            <div className='border border-[blue]  col-span-2 flex flex-col'>
                <h1 className='text-[#00df9a] font-bold my-2'> Learn From Experts</h1>
                <p className='my-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis neque nesciunt odit in hic illum impedit obcaecati numquam, at nemo laboriosam earum, deserunt nam? Ratione quam ipsam officiis qui odio!
                </p>
                <button className='bg-black text-white rounded p-3'>Get Start</button>
            </div>
        </div>

    )
}

export default Experts