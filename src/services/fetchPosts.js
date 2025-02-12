// import React from 'react'
// import { collection } from "firebase/firestore";
// import { getFirestore, collection, getDocs } from "firebase/firestore";
// import { app } from "../../firebaseConfig";

// const db = getFirestore(app);

// export async function fetchPosts() {
//   try {
//     const querySnapshot = await getDocs(collection(db, "posts"));
//     const posts = querySnapshot.docs.map((doc) => ({
//       id: doc.id, 
//       ...doc.data(),
//     }));
//     console.log(posts); 
//     return posts;
//   } catch (error) {
//       console.error("Error fetching posts:", error);
//         return [];
//   }
// }
