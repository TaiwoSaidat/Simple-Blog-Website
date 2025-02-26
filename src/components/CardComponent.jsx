import React from "react";
import { useEffect, useState } from "react";
import AddPostForm from "./AddPostForm";
import EditPostForm from "./EditPostForm";
import {
  deletePost,
  fetchPosts,
  handleDislike,
  handleLike,
  subscribeToPosts,
} from "../../firebaseFunctions";
import del from "../assets/delete-wh-36.png";
import edit from "../assets/edit-wh-38.png";
import like from "../assets/like-32.png";
import dislike from "../assets/dislike-32.png";
import { format } from "date-fns";


const CardComponent = () => {
   const [editingPost, setEditingPost] = useState(null);
   const [posts, setPosts] = useState([]);
   const [loading, setLoading] = useState(true);
   const [showForm, setShowForm] = useState(false);
   const [selectedPost, setSelectedPost] = useState(null);

   const openPost = (post) => {
     setSelectedPost(post);
   };

   const closePost = () => {
     setSelectedPost(null);
   };

   useEffect(() => {
     async function getPosts() {
       setLoading(true);
       const fetchedPosts = await fetchPosts();
       setPosts(fetchedPosts);
       setLoading(false);
     }
     getPosts();

     const unsubscribe = subscribeToPosts(setPosts);
     return () => unsubscribe();
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
     return (
       <div className="flex items-center justify-center h-[100vh]">
         <div class="sk-chase">
           <div class="sk-chase-dot"></div>
           <div class="sk-chase-dot"></div>
           <div class="sk-chase-dot"></div>
           <div class="sk-chase-dot"></div>
           <div class="sk-chase-dot"></div>
           <div class="sk-chase-dot"></div>
         </div>
       </div>
     );

  return (
    <>
      <div className="w-full flex flex-col bg-[#dda15e] border-2 rounded-2xl p-3  ">
        <button
          onClick={() => setShowForm(!showForm)}
          className="  px-2 rounded-2xl "
        >
          {showForm ? (
            <span className=" w-full flex justify-end ">
              <div className="border border-black rounded-4xl text-[#dda15e] bg-black medium-24 w-8 h-8 flex items-center justify-center ">
                x
              </div>
            </span>
          ) : (
            <span className=" ">Want to upload your post? Click Here</span>
          )}
          {/*  {showForm && <AddPostForm toggleForm={() => setShowForm(false)} /> */}
        </button>

        {showForm && <AddPostForm toggleForm={() => setShowForm(false)} />}
      </div>

      {posts.length === 0 ? (
        <div className="w-full border rounded-2xl py-12 flex flex-col items-center justify-center gap-12">
          <div class="spinner"></div>
          <p className=" px-24 regular-24 text-gray-500">
            Network error... Kindly reload
          </p>
        </div>
      ) : (
        <div className=" p-4 gap-4 border-2 rounded-2xl grid grid-cols-1  ">
          <p className="small-24">Latest Posts </p>
          {posts.map((post) => (
            <div key={post.id}>
              {editingPost && editingPost.id === post.id ? (
                <div className="  fixed inset-0 flex items-center justify-center ">
                  <div className="bg-[#dda15e] p-6 border-2 rounded-2xl shadow-lg w-[90%] ">
                    <EditPostForm
                      post={editingPost}
                      toggleEdit={() => setEditingPost(null)}
                    />
                  </div>
                </div>
              ) : (
                <div className=" border-2 rounded-2xl flex flex-col items-center justify-center gap-2 p-3  ">
                  <div className="  regular-18 ">
                    {post.title}
                    <span className=" text-gray-600 small-12">
                      - {post.author}
                    </span>
                    <p className=" small-12 text-center">
                      Posted on:
                      {post.createdAt?.seconds
                        ? format(
                            new Date(post.createdAt.seconds * 1000),
                            " PPpp"
                          )
                        : " N/A"}
                    </p>
                  </div>

                  <p className=" px-2 small-16 h-12 overflow-hidden text-ellipsis ">
                    {post.content}
                  </p>
                  <p className="regular-18" onClick={() => openPost(post)}>
                    Read more...
                  </p>

                  {/* buttons */}
                  <div className=" w-full grid grid-cols-4  place-items-center ">
                    <button onClick={() => setEditingPost(post)}>
                      <img src={edit} alt="" width={24} height={24} />
                    </button>
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

      {selectedPost && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#D3AA77 flex items-center justify-center z-50">
          <div className="bg-[#DDA15E] border-1 p-6 max-w-4xl w-full h-full rounded-2xl my-2 relative overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-xl font-bold text-black"
              onClick={closePost}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedPost.title}</h2>
            <p className="mb-2 text-sm text-gray-600">
              By {selectedPost.author}
            </p>
            <p className="mt-4">{selectedPost.content}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CardComponent;
