import React from 'react'
import { useEffect, useState } from "react";
import { fetchPosts, deletePost, likePost,dislikePost } from "./actions/blogActions";
import { useDispatch, useSelector } from "react-redux";
import AddPostForm from "./components/AddPostForm";
import EditPostForm from "./components/EditPostForm";

function App() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  const [editingPost, setEditingPost] = useState(null);

  // useEffect(()=>{
  //   setTimeout(() =>{
  //     dispatch(fetchPosts())
  //   }, 1000);
  // }, [dispatch])
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts</p>;

  const toggleEdit = (post) => {
    setEditingPost(post);
  };

  return (
    <>
      <div>
        <h1>Sample Blog Posts</h1>
        <AddPostForm />
        {editingPost ? (
          <EditPostForm post={editingPost} toggleEdit={setEditingPost} />
        ) : (
          posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <span>{post.author}</span>
              <p>{post.content}</p>
              <button onClick={() => toggleEdit(post)}>Edit</button>
              <button onClick={() => dispatch(deletePost(post.id))}>
                Delete
              </button>
              <button onClick={() => dispatch(likePost(post.id, post.likes, post))}>
                Like {post.likes}
              </button>
              <button onClick={() => dispatch(dislikePost(post.id, post.dislikes, post))}>
                Dislike {post.dislikes}
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default App;
