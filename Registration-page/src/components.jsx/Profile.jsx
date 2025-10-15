import axios from 'axios'
import React, { useState } from 'react'

const Profile = () => {
    const [userData,setUserData] =useState()
    const getProfileData =()=>{
    
        
        const token =JSON.parse(localStorage.getItem('token'))
        const header ={
            header:{
                Authorization:`${token}`
            }
        }
        
     axios.get('http://localhost:8080/api/v1/users/user-profile',header)   
       .then((res) =>{
        setUserData(res.data)
        alert('You are not logged in')
        console.log("Profile data",res)
       }) 
       .catch((err) =>{
        console.log("error occured",err)
       })
    }

    const handleLogout =() =>{
        setUserData()
        localStorage.removeItem("token");
        alert("log out success")
    }



     return (
    <div>
        <button onClick={getProfileData} className='bg-blue-400 text-white px-3 py-1' > Get Profile Data</button>
        <button onClick={handleLogout} className='border-rounded-md bg-red-500 text-white px-4 py-1'>Log out</button>

        {userData &&
     <div>
        <p>Name:{userData?.name ||"N/A"}</p>
        <p>Email:{userData?.email ||"N/A"}</p>
        <p>Roke:{userData?.role ||"N/A"}</p>
    </div>
        }
   

    </div>
    
  )
}

export default Profile