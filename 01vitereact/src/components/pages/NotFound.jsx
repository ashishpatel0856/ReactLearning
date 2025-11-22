import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h3>this page does not exits</h3>
        <Link to={'/recipe-list'} >go to recipe list page</Link>
    </div>
  )
}

export default NotFound