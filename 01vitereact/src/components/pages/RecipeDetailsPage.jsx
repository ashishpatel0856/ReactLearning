import React from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetailsPage = () => {

    const params = useParams();
    console.log(params)
    const {id} = params;
  return (
    <div>Recipe Details Page items {id}</div>
  )
}

export default RecipeDetailsPage