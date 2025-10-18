import { useState } from 'react';
import Login from './components.jsx/Login';
import Profile from './components.jsx/Profile';
import Navbar from './components.jsx/Navbar';

function App() {
  return (
    <>
      <Navbar />
      {/* Add margin-top to push content below navbar */}
      <main className="mt-24 flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <Login />
        <Profile />
      </main>
    </>
  );
}

export default App;
