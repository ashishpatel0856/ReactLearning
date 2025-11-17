import { useState } from 'react'
import Index from './components'
import ProductList from './components'

const dummyProductData = ['product 1' , 'product 2','product 3']

function App() {
  return (
    <div className='flex item-center'>
      <h1 className='text-lg font-bold' >React js concepts 2025</h1>
       <ProductList listofproducts={dummyProductData} name ="ashish" city ="prayag"/>
    </div>
    
  )
}

export default App
