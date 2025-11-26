import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h3>This page does not exist</h3>
      <Link to="/recipe-list">Go to recipe list page</Link>
      <Link to="/comments-list">Go to comment list page</Link>
    </div>
  )
}

export default NotFound
