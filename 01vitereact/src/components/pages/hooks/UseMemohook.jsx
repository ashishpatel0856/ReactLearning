import React, { useMemo, useState } from 'react'
import UseFetch from '../../../hooks/UseFetch';

const UseMemohook = () => {

    const {data,loading} = UseFetch('https://dummyjson.com/products');
    const [flag ,setFlag] = useState(false)

    function filterProductByPrice(getProducts){
        console.log('this function is getting rendered')

        return getProducts?.length >0
        ? getProducts.filter(singleProductItem => singleProductItem.price >10)
         : [];
    }

    const memorizedVersion = useMemo(
        ()=> filterProductByPrice(data?.products),
        [data?.products]
    );

    if(loading) return <h1>loading data please wait</h1>
    console.log(data);

  return (
    <div>
<h1 className={flag ? 'text-red-400' : 'text-cyan-300'}>
  use memo
</h1>
        <button onClick={() =>setFlag(!flag)} className='border-2  rounded-sm'>toggle flag</button>
        <ul>
            {
                memorizedVersion.map(item => 
                <li key={item.id}>{item.title}</li>)
            }
        </ul>
    </div>
  );
}

export default UseMemohook