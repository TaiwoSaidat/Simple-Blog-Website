import React, { useState } from "react";
import { updatePost } from "../../firebaseFunctions";

const EditPostForm = ({ post, toggleEdit }) => {
  const [title, setTitle] = useState(post.title);
  const [author, setAuthor] = useState(post.author);
  const [content, setContent] = useState(post.content);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = { title, author, content };
    const response = await updatePost(post.id, updatedData);

    if (response.success) {
      console.log("Post updated:", response.updatedData);
      toggleEdit();
    } else {
      console.error("Failed to update post:", response.error);
    }
  };

  return (
    <>
      <div className="  ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 ">
          <button
            type="button"
            onClick={toggleEdit}
            className=" flex justify-end"
          >
            <div className="border border-black rounded-4xl text-[#dda15e] bg-black medium-24 w-8 h-8 flex items-center justify-center ">
              x
            </div>
          </button>

          {/*  <div className="border-1 p-2 text-white bg-black rounded-full ">x</div> */}
          <div className="flex justify-center regular-24 ">Edit Post</div>
          <div>
            <label className="regular-16 flex justify-center">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="border-1 w-full rounded-2xl px-2"
            />
          </div>
          <div>
            <label className="regular-16 flex justify-center">Author:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="border-1 w-full rounded-2xl px-2"
            />
          </div>
          <div>
            <label className="regular-16 flex justify-center">Content:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="border-1 w-full rounded-2xl px-3"
            ></textarea>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2"> */}
          <button type="submit" className=" w-[%0%] border-1  border-black rounded-4xl text-[#dda15e] bg-black">
            Update Post
          </button>

          {/* </div> */}
        </form>
      </div>
    </>
  );
};

export default EditPostForm;
