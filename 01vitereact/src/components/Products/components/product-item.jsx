
import React from 'react'

function ButtonComponent(){
    return <button className='text-red-500 bg-sky-700 rounded-sm m-4 p-4 mt-20px font-bold text-xl'>Click</button>
}
const ProductItem = ({singleProductItem,key}) => {
  return (
    <div className=' flex item-center p-20px border-2 border-black' key={key}>
        <p className='text-lg text-blue-800'>{singleProductItem}</p>
        <ButtonComponent />
    </div>
    
  )
}

export default ProductItem