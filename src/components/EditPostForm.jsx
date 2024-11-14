import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePost } from "../actions/blogActions";

const EditPostForm = ({ post, toggleEdit }) => {
  const [title, setTitle] = useState(post.title);
  const [author, setAuthor] = useState(post.author);
  const [content, setContent] = useState(post.content);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = { title, author, content };
    dispatch(updatePost(post.id, updatedPost));
    toggleEdit(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Post</h2>
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
      <button type="submit">Update Post</button>
      <button type="button" onClick={() => toggleEdit(false)}>
        Cancel
      </button>
    </form>
  );
};

export default EditPostForm;
