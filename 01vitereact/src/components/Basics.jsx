import React, { useState } from 'react';

const Basics = () => {

  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    console.log("button clicked");
    setShowText(!showText);
  };

  return (
    <div className='m-60 justify-center'>
      <h4>Functional Component</h4>

      <button
        className='bg-red-300 m-3 rounded-sm border'
        onClick={handleClick}
      >
        Toggle Text
      </button>

      {showText && <p>This is toggled text!</p>}
    </div>
  );
};

export default Basics;
