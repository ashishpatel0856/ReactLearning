import React from 'react'
import UseFetch from '../../hooks/UseFetch';

const CommentList = () => {
  const {data , loading } = UseFetch('https://dummyjson.com/comments');
  if(loading) return <h1>Fetching comments! please wait</h1>
  return (
    <div>
      <h1>comment list page
                  <ul>
                {data?.comments?.length > 0 
                   ? data.comments.map((commentItem) => (
                      <div>
                        <label>{commentItem?.body}</label>
                        <p>{commentItem?.likes}</p>
                        <p>{commentItem?.postId}</p>
                      </div>
                    ))
                 : (
                    <p>No comments found.</p>
                )}
            </ul>
      </h1>
    </div>
  );
}

export default CommentList