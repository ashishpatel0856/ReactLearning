import React, { useEffect, useState } from 'react';

const Basics = () => {


  const [showText, setShowText] = useState(false);
  const [count , setCount] = useState(0)
  const [changeStyle ,setChangeStyle]= useState(false)

  const handleClick = () => {
    console.log("button clicked");
    setShowText(!showText);
  };

  function handleCount(){
    setCount(count + 1)
  }

  useEffect(() =>{
     console.log("run only oce page load")
  },[]) // this will only run on the page load once
  

  useEffect(()=>{
    console.log("count changes")
  },[count])
  return (
    <div className='m-60 justify-center'>
      <h4>Functional Components</h4>
    
      <button
        className='bg-red-300 m-3 rounded-sm border'
        onClick={handleClick}>
        Toggle Text
      </button>

      {showText && <p className='text-cyan-400'>This is toggled text!</p>}

      <div>
        <button className='border-2 rounded-sm p-3 bg-black text-amber-50'
        onClick={handleCount}
        >Increase Count</button>
        <p>count is {count}</p>
      </div>
    </div>
  );
};

export default Basics;
