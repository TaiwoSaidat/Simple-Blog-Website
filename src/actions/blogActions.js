import axios from "axios";

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: "FETCH_POST_START" });
  try {
    const res = await axios.get("http://localhost:7200/posts");
      dispatch({ type: "FETCH_POST_SUCCESS", payload: res.data });
      console.log('res: ', res.data)
  } catch (err) {
      dispatch({ type: "FETCH_POST_FAIL", payload: err });
       console.log("err: ", err);
  }
};

export const createPost = (newPost) => async (dispatch) => {
  dispatch({ type: "CREATE_POST_START" });
  try {
    const res = await axios.post("http://localhost:7200/posts", newPost);
    dispatch({ type: "CREATE_POST_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "CREATE_POST_FAIL", payload: err });
  }
};

export const updatePost = (id, updatedPost) => async (dispatch) => {
    dispatch({ type: 'UPDATE_POST_START' })
    try {
        const res = await axios.put(`http://localhost:7200/posts/${id}`, updatedPost)
        dispatch({ type: 'UPDATE_POST_SUCCESS', payload: res.data })
        console.log('update', res.data)
    } catch (error) {
        dispatch({ type: 'UPDATE_POST_FAIL', payload: err })
    }
}

export const deletePost = (id) => async (dispatch) => {
    dispatch({ type: 'DELETE_POST_START' });
    try {
        await axios.delete(`http://localhost:7200/posts/${id}`);
        dispatch({ type: 'DELETE_POST_SUCCESS', payload: id });
    } catch (err) {
        dispatch({ type: 'DELETE_POST_FAIL', payload: err });
    }
};
