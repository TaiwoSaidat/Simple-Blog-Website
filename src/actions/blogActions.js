// import axios from "axios";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../../firebaseConfig";

// export const createPost = (newPost) => async (dispatch) => {
//   try {
//     const docRef = await addDoc(collection(db, "posts"), newPost);
//     dispatch({
//       type: "CREATE_POST_SUCCESS",
//       payload: { id: docRef.id, ...newPost },
//     });
//   } catch (error) {
//     dispatch({ type: "CREATE_POST_ERROR", error });
//   }
// };


// export const fetchPosts = () => async (dispatch) => {
//   dispatch({ type: "FETCH_POST_START" });
//   try {
//     const res = await axios.get("http://localhost:7200/posts");
//     dispatch({ type: "FETCH_POST_SUCCESS", payload: res.data });
//     console.log("res: ", res.data);
//   } catch (err) {
//     dispatch({ type: "FETCH_POST_FAIL", payload: err });
//     console.log("err: ", err);
//   }
// };

// // export const createPost = (newPost) => async (dispatch) => {
// //   dispatch({ type: "CREATE_POST_START" });
// //   try {
// //     const res = await axios.post("http://localhost:7200/posts", newPost);
// //     dispatch({ type: "CREATE_POST_SUCCESS", payload: res.data });
// //   } catch (err) {
// //     dispatch({ type: "CREATE_POST_FAIL", payload: err });
// //   }
// // };

// export const updatePost = (id, updatedPost) => async (dispatch) => {
//   dispatch({ type: "UPDATE_POST_START" });
//   try {
//     const res = await axios.put(
//       `http://localhost:7200/posts/${id}`,
//       updatedPost
//     );
//     dispatch({ type: "UPDATE_POST_SUCCESS", payload: res.data });
//     console.log("update", res.data);
//   } catch (error) {
//     dispatch({ type: "UPDATE_POST_FAIL", payload: err });
//   }
// };

// export const deletePost = (id) => async (dispatch) => {
//   dispatch({ type: "DELETE_POST_START" });
//   try {
//     await axios.delete(`http://localhost:7200/posts/${id}`);
//     dispatch({ type: "DELETE_POST_SUCCESS", payload: id });
//   } catch (err) {
//     dispatch({ type: "DELETE_POST_FAIL", payload: err });
//   }
// };

// export const likePost = (id, currLikes, postData) => async (dispatch) => {
//   dispatch({ type: "LIKE_POST_START" });
//   try {
//     const res = await axios.put(`http://localhost:7200/posts/${id}`, {
//       ...postData, // Include all post data
//       likes: currLikes + 1, // Update likes
//     });
//     dispatch({ type: "LIKE_POST_SUCCESS", payload: res.data });
//     console.log("liked");
//   } catch (error) {
//     // Use 'error' instead of 'err'
//     dispatch({ type: "LIKE_POST_FAIL", payload: error.message });
//     console.error("Error liking post:", error);
//   }
// };

// export const dislikePost = (id, currDislikes, postData) => async (dispatch) => {
//   dispatch({ type: "DISLIKE_POST_START" });
//   try {
//     const res = await axios.put(`http://localhost:7200/posts/${id}`, {
//       ...postData, // Include all post data
//       dislikes: currDislikes + 1, // Update dislikes
//     });
//     dispatch({ type: "DISLIKE_POST_SUCCESS", payload: res.data });
//     console.log("disliked");
//   } catch (error) {
//     // Use 'error' instead of 'err'
//     dispatch({ type: "DISLIKE_POST_FAIL", payload: error.message });
//     console.error("Error disliking post:", error);
//   }
// };


// export const likePost = (id, currLikes) => async (dispatch) => {
//   dispatch({ type: "LIKE_POST_START" });
//   try {
//       const res = await axios.put(`http://localhost:7200/posts/${id}`, {
//         ...postData,
//         likes: currLikes + 1,
//       });
//     dispatch({ type: "LIKE_POST_SUCCESS", payload: res.data });
//     console.log("liked");
//   } catch (error) {
//       dispatch({ type: "LIKE_POST_FAIL", payload: err });
//        console.error("Error liking post:", err);
//   }
// };

// export const dislikePost = (id, currDislikes) => async (dispatch) => {
//   dispatch({ type: "DISLIKE_POST_START" });
//   try {
//       const res = await axios.put(`http://localhost:7200/posts/${id}`, {
//         ...postData,
//         likes: currDislikes + 1,
//       });
//     dispatch({ type: "DISLIKE_POST_SUCCESS", payload: res.data });
//     console.log("disliked");
//   } catch (error) {
//       dispatch({ type: "DISLIKE_POST_FAIL", payload: err });
//        console.error("Error liking post:", err);
//   }
// };
