import React from 'react'
import ProductItem from './Products/components/product-item'

const dummyProductData = ['product 1' , 'product 2','product 3']
const ProductList = ({name,city,listofproducts}) => {
  
  return (
    <div >
        <h3 className='text-xl font-bold '>Ecommerce Projects</h3>
        <h4>Name is {name}, he is belongs to {city}</h4>

        {/* <ProductItem/> */}
        <ul >
            {
                listofproducts.map((item,index) =>(
                    // <li key={index}>{item}</li>
                    <ProductItem singleProductItem={item} key={index}/>
                ))
            }
        </ul>
    </div>
  )
}

export default ProductList