import React from 'react'
import './index.css'
import { useState } from 'react';
import { useEffect } from 'react';
import TodoItem from './component/Todo-Items';
import TodoDetails from './component/Todo-details';
import { Skeleton } from '@mui/material';

function App() {

  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [todoDetails,setTodoDetails] = useState(null);
  const [openDialog,setOpenDialog] = useState(false);

  async function fetchListOfTodos() {
    try {
      setLoading(true)
      const apiResponse = await fetch('https://dummyjson.com/todos');
      const result = await apiResponse.json();

      console.log(result);
      if (result?.todos && result?.todos?.length > 0) {
        setTodoList(result?.todos);
        setLoading(false)
        setErrorMsg('')
      } else {
        setTodoList([])
        setLoading(false)
        setErrorMsg('')
      }

    } catch (e) {
      console.log(e);
      setErrorMsg('some error occured');
    }

  }

  async function fetchDetailsOfCurrentTodo(getCurrentTodoId) {
           console.log(getCurrentTodoId)
           try{
              const apiResponse = await fetch(`https://dummyjson.com/todos/1`)
              const details = await apiResponse.json();
              if(details){
                 setTodoDetails(details);
                setOpenDialog(true);
              }else{
                setTodoDetails(null);
                setOpenDialog(false);
              }

           } catch(error){
           console.log(error)
           }
    
  }
  useEffect(() => {
    fetchListOfTodos();
  }, [])

  if(loading) return <Skeleton variant='rectangulat' width={650} height={650}/>
  
  return (
    <div>
      <h1 className='bg-blue-500 font-bold text-white flex  justify-center mt-8 '>TODO app using material ui</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          todoList && todoList?.length > 0 ?
          todoList.map((todoItem) =>
           <TodoItem fetchDetailsOfCurrentTodo= {fetchDetailsOfCurrentTodo} 
          todo={todoItem} />) : null
        }
      </div>
      <TodoDetails
      setOpenDialog={setOpenDialog}
      openDialog={openDialog}
      todoDetails={todoDetails}
      setTodoDetails = {setTodoDetails}
      />
    </div>
  );
}

export default App;
