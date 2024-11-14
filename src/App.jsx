// import React from 'react'
import { useEffect } from "react"
import { fetchPosts } from "./actions/blogActions"
import { useDispatch, useSelector } from "react-redux"
import AddPostForm from "./components/AddPostForm";

function App() {
  const dispatch = useDispatch()
  const{posts, loading, error} = useSelector(state => state.posts)

  // useEffect(()=>{
  //   setTimeout(() =>{
  //     dispatch(fetchPosts())
  //   }, 1000);
  // }, [dispatch])
    useEffect(() => {
      dispatch(fetchPosts());
    }, [dispatch]);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error loading posts</p>

  return (
    <>
      <div>
        <h1>Sample Blog Posts</h1>
        <AddPostForm />
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <span>{post.author}</span>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App


