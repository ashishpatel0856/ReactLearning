import React, { useState } from 'react'

const FormComponent= () => {

  const [formData, setFormData] = useState({
    name : '',
    email : '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData, "Submitted Data");

    alert("form submitted")
    // Clear form after submit:
    setFormData({
      name: "",
      email: ""
    });
  }

  return (
    <div className='flex flex-inline mt-3 justify-center'>
      <form onSubmit={handleSubmit}>
        
        <input
          value={formData.name}
          name="name"
          id='name'
          placeholder='Enter your name'
          onChange={(event)=> setFormData({
            ...formData,
            [event.target.name] : event.target.value,
          })}
        />

        <input
          value={formData.email}
          type='email'
          name='email'
          id='email'
          placeholder='Enter your mail id'
          onChange={(event)=> setFormData({
            ...formData,
            [event.target.name] : event.target.value,   // FIXED
          })}
        />

        <button className='border-1 rounded m-1' type='submit'>
          Submit
        </button>
        
      </form> 
    </div>
  );
}

export default FormComponent;
