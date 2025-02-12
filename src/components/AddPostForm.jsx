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
      <div className=" bg-[#dda15e] border-2 rounded-2xl p-3  ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="flex justify-center regular-24">Create New Post</div>
          <div>
            <label className=" regular-16">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="border-1"
            />
          </div>
          <div>
            <label className=" regular-16">Author:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="border-1"
            />
          </div>
          <div>
            <label className=" regular-16">Content:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="border-1"
            ></textarea>
          </div>
          <button type="submit" className=" border-1 rounded-4xl">
            Upload Post
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPostForm;
