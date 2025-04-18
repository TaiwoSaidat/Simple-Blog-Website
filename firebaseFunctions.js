import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  increment,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot
} from "firebase/firestore";
import { db } from "./firebaseConfig";

// Fetching posts from Firestore
// export async function fetchPosts() {
//   try {
//     const querySnapshot = await getDocs(collection(db, "posts"));
//     const posts = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     console.log("Here are the posts:", posts);
//     return posts;
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//     return [];
//   }
// }


export function subscribeToPosts(setPosts) {
  const postsQuery = query(
    collection(db, "posts"),
    orderBy("createdAt", "desc")
  );

  return onSnapshot(postsQuery, (snapshot) => {
    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPosts(posts); // Updates state immediately
  });
}

export async function fetchPosts() {
  try {
    const postsQuery = query(
      collection(db, "posts"),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(postsQuery);
    const posts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("Here are the posts:", posts);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

// Adding a post to Firestore
export async function addData(postData) {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      ...postData,
      likes: 0,
      createdAt: serverTimestamp(),
    });
    console.log("post successfully added");
    console.log("Document added written with ID:", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding document:", error, "and", error.messsage);
    return { success: false, error: error.message };
    // throw error;
  }
}

// Updating a post in Firestore
export async function updatePost(postId, updatedData) {
  try {
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, updatedData);
    console.log("Post updated successfully");
    console.log("Post update written with ID:", postRef.id);
    return { success: true, id: postRef.id, updatedData };
    // return postRef.id;
  } catch (error) {
    console.error("Error updating post:", error, "and", error.messsage);
    return { success: false, error: error.message };

    // throw error;
  }
}

// Deleting a post from Firestore
export async function deletePost(postId) {
  try {
    const postRef = doc(db, "posts", postId);
    await deleteDoc(postRef);
    console.log("Post deleted successfully");
    return { success: true };
  } catch (error) {
    console.error("Error deleting post:", error);
    return { success: false, error: error.message };
  }
}

export async function handleLike(postId) {
  try {
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, { likes: increment(1) }); // Firestore built-in increment
    console.log("Post liked!");
  } catch (error) {
    console.error("Error liking post:", error);
  }
}

export async function handleDislike(postId) {
  try {
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, { likes: increment(-1) }); // Decrease likes by 1
    console.log("Post disliked!");
  } catch (error) {
    console.error("Error disliking post:", error);
  }
}
