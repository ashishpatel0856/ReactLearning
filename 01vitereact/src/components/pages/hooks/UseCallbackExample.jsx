import React, { useState } from 'react'
import Counter from './Counter';

const UseCallbackExample = () => {
 
    const [countOne,setCountOne] = useState(0);
    const [countTwo,setCountTwo] = useState(0)
  return (
    <div>
        <h1>use callback</h1>
        <Counter  countValue ={countOne} onClick={() => setCountOne(countOne+1)} />
        <Counter countValue ={countTwo} onClick={() => setCountTwo(countTwo+2)} />
    
    </div>
  )
}

export default UseCallbackExample