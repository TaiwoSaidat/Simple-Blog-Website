import React, { useState } from "react";
import { addData } from "../../firebaseFunctions";

const AddPostForm = ({ toggleForm }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = { title, author, content };
    const response = await addData(postData);

    if (response.success) {
      console.log("New Post ID:", response.id);
      setTitle("");
      setAuthor("");
      setContent("");
      toggleForm();
    } else {
      console.error("Failed to add post:", response.error);
    }
  };

  return (
    <>
      <div className="   ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="flex justify-center regular-24">Create New Post</div>
          <div>
            <label className=" regular-16 flex justify-center">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="border-1 border-black text-gray-500 w-full rounded-2xl px-2  "
              placeholder="Title In Capital Letters"
            />
          </div>
          <div>
            <label className=" regular-16 flex justify-center">Author:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="border-1 border-black text-gray-500 w-full rounded-2xl px-2  "
              placeholder="Name You Want Displayed"
            />
          </div>
          <div>
            <label className=" regular-16 flex justify-center">Content :</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="border-1 border-black text-gray-500 w-full rounded-2xl px-2  "
              placeholder="Your Blog Post"
            ></textarea>
          </div>
          <button
            type="submit"
            className=" w-[%0%] border-1  border-black rounded-4xl text-[#dda15e] bg-black"
          >
            Update Post
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPostForm;
