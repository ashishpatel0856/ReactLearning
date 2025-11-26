import React, { useState, useLayoutEffect } from 'react'

const UsewindowResize = () => {
  const [windowSize , setWindowSize] = useState(
    {
      width : 0,
      height : 0
    }
  );

  function handleResize(){
    setWindowSize({
      width : window.innerWidth,
      height : window.innerHeight
    });
  }

  useLayoutEffect(() => {
    // set initial size immediately
    handleResize();
    window.addEventListener('resize',handleResize);
  
 
  return () => {
    window.removeEventListener('resize',handleResize)
  };
},[]);

return windowSize;
}

export default UsewindowResize