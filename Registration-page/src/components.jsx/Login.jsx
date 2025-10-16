import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');       // initialize as empty string
  const [password, setPassword] = useState(''); // initialize as empty string

  const handleSubmit = () => {
    const payload = {
      email: email,
      password: password,
    };

    // backend API call
    axios.post('http://localhost:8080/api/v1/auth/login', payload)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.accessToken));
        alert("Login Success");
        console.log("Login successful", res);
      })
      .catch((err) => {
        alert("Login failed");
        console.log("Login failed", err);
      });
  };

  return (
    <>
      <div className='   bg-sky-200 space-y-4 p-5 rounded-md shadow-md m-10 w-60 mt-1'>
        <p className='font-semibold text-lg text-center'>Login Page</p>

        <div>
          <p>Email</p>
          <input 
            onChange={(e) => setEmail(e.target.value)} 
            type="email" 
            className='border rounded-md shadow-md w-full p-1' 
          />
        </div>

        <div>
          <p>Password</p>
          <input 
            onChange={(e) => setPassword(e.target.value)} 
            type="password" 
            className='border rounded-md shadow-md w-full p-1' 
          />
        </div>

        <div>
          <button 
            onClick={handleSubmit} 
            className='bg-blue-600 px-4 py-1 rounded-md shadow-md text-white w-full'
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
