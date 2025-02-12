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
      <div className=" bg-[#dda15e] border-2 rounded-2xl p-3  ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 ">
          <div className="flex justify-center regular-24 ">Edit Post</div>
          <div>
            <label className="regular-16">Post Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="border-1"
            />
          </div>
          <div>
            <label className="regular-16">Author:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="border-1"
            />
          </div>
          <div>
            <label className="regular-16">Content:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="border-1"
            ></textarea>
          </div>
          <button type="submit" className="border-1 rounded-4xl">
            Update Post
          </button>
          <button
            type="button"
            onClick={toggleEdit}
            className="border-1 rounded-4xl"
          >
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default EditPostForm;
