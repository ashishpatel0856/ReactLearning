import React, {useState, useEffect } from 'react'

const UserList = () => {

    const [userList , setUserList] =useState([]);
    const [pending,setPending] = useState(false);
    
    async function fetchAllUsers(){
       try{
        setPending(true)
        const apiResponse = await fetch('https://dummyjson.com/users');
        const result = await apiResponse.json();

        if(result?.users){
            setUserList(result?.users)
        }else{
         setUserList([])
        }


        console.log(result)
       } catch(error){
        console.log(error)
       }
       
    }

    function handleFetchListOfUsers(){
        fetchAllUsers();
    }

    // useEffect (() => {
    //    fetchAllUsers() ;
    // },[])

    console.log(userList)

    // if(pending) return <h1>fetching users! please wait</h1>;
  return (
    <div className=' justify-center items-center'>
        <h1>All user lists</h1>
        <button onClick={handleFetchListOfUsers} className='border rounded-sm bg-amber-50 p-1'>Fetch user list</button>
        <ul>
            {
                userList && userList.length>0 ?
                userList.map(userItem => <li key={userItem?.id}>
                    <p>{userItem?.firstName} {userItem?.lastName}</p>
                </li>) : <h1>no users found please try again.</h1>
            }
        </ul>
    </div>
  )
}

export default UserList