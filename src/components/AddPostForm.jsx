// components/AddPostForm.jsll;x
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/blogActions";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, author, content };
    dispatch(createPost(newPost));
    setTitle("");
    setAuthor("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Post</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPostForm;
