import React from "react";
import { useEffect, useState } from "react";
import AddPostForm from "./components/AddPostForm";
import EditPostForm from "./components/EditPostForm";
import {
  deletePost,
  fetchPosts,
  handleDislike,
  handleLike,
} from "../firebaseFunctions";
import del from '../src/assets/delete-wh-36.png' ;
import edit from "../src/assets/edit-wh-38.png";
import like from '../src/assets/like-32.png'
import dislike from '../src/assets/dislike-32.png'



function App() {
  const [editingPost, setEditingPost] = useState(null);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  // new data
  useEffect(() => {
    async function getPosts() {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
      setLoading(false);
    }
    getPosts();
  }, []);

  const handleDelete = async (postId) => {
    const response = await deletePost(postId);

    if (response.success) {
      console.log("Post deleted successfully");
    } else {
      console.error("Failed to delete post:", response.error);
    }
  };

  if (loading)
    return <p className="flex items-center justify-center">Loading...</p>;

  return (
    <>
      {/* <div className=" border-2 flex items-center justify-center py-10 "> */}
      <div className=" border-10 borde flex flex-col items-center justify-center py-4 ">
        <span className=" regular-60 mt-8 ">Sample Blog Posts</span>

        <div className="  p-6 ">
          {/* <h1>Firestore Example</h1> */}
          <div className=" flex flex-col items-center  p-2 ">
            {/* Want to upload your post? */}
            <div className="medium-24">
              <button
                onClick={() => setShowForm(!showForm)}
                className="medium-24"
              >
                {showForm
                  ? "Hide Form"
                  : " Want to upload your post? Click Here"}
              </button>
            </div>
            {showForm && <AddPostForm toggleForm={() => setShowForm(false)} />}
          </div>
        </div>

        {posts.length === 0 ? (
          <p className="border-1 rounded-2xl p-24 small-16">No posts here</p>
        ) : (
          <div className="  p-4 flex flex-col gap-4 w-1/2">
            {posts.map((post) => (
              <div key={post.id}>
                {editingPost && editingPost.id === post.id ? (
                  <EditPostForm
                    post={editingPost}
                    toggleEdit={() => setEditingPost(null)}
                  />
                ) : (
                  <div
                    // id="post"
                    className=" border-2 rounded-2xl flex flex-col items-center justify-center gap-2 p-3  "
                  >
                    <div className="  regular-32 ">
                      {post.title}
                      <span className=" small-24"> - {post.author} </span>
                    </div>
                    {/* <p > {post.likes} Likes </p> */}
                    {/* <p>
                      <strong>Author:</strong> {post.author}
                    </p> */}
                    <p className=" px-2 small-16"> {post.content}</p>

                    <div className="flex gap-6">
                      <button onClick={() => setEditingPost(post)}>
                        <img src={edit} alt="" width={24} height={24} />
                      </button>
                      {/* <button onClick={() => console.log(post.id)}>Edit</button> */}
                      <button onClick={() => handleDelete(post.id)}>
                        <img src={del} alt="" width={24} height={24} />
                      </button>
                      <button
                        onClick={() => handleLike(post.id)}
                        className="flex flex-row gap-2 items-center"
                      >
                        <img src={like} alt="" width={28} height={28} />
                        {post.likes}
                      </button>
                      <button onClick={() => handleDislike(post.id)}>
                        <img src={dislike} alt="" width={28} height={28} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
