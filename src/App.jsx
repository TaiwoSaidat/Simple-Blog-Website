import React from "react";
import { useEffect, useState } from "react";
import AddPostForm from "./components/AddPostForm";
import EditPostForm from "./components/EditPostForm";
import {
  deletePost,
  fetchPosts,
  handleDislike,
  handleLike,
  subscribeToPosts,
} from "../firebaseFunctions";
import del from "../src/assets/delete-wh-36.png";
import edit from "../src/assets/edit-wh-38.png";
import like from "../src/assets/like-32.png";
import dislike from "../src/assets/dislike-32.png";
import Footer from "./components/Footer";
import { format } from "date-fns";
import NavBar from "./components/NavBar";
import CardComponent from "./components/CardComponent";

function App({ post }) {
  

  return (
    <>
      <div className=" flex flex-col items-center justify-center mx-2 md:mx-12 mt-12 rounded-4xl gap-8 ">
        <NavBar />

        {/* <div className=" bg-red-700 w-full  "> */}

        <CardComponent />

        <Footer />
      </div>
    </>
  );
}

export default App;
