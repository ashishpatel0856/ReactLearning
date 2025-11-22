import React from 'react'
import { useLocation } from 'react-router-dom'

const RecipeList = () => {
    const location = useLocation();
    console.log(location)
  return (
    <div>RecipeList</div>
  )
}

export default RecipeList