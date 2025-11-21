import React from 'react'

const CommonInput = ({label,onChange,type,name,id,value,placeholder}) => {
  return (
    <div>
        <lavel htmlFor={{name}} >{label}</lavel>
        <input 
        name={name}
        id={id}
        type={type || 'text'}
        placeholder={placeholder || 'Enter value here'}
        value={value}
        onChange={onChange}
         />
    </div>
  );
}

export default CommonInput