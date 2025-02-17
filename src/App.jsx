import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import CardComponent from "./components/CardComponent";

function App({ post }) {
  

  return (
    <>
      <div className=" flex flex-col items-center justify-center mx-2 md:mx-12 mt-12 rounded-4xl gap-8 ">
        <NavBar />
        <CardComponent />
        <Footer />
      </div>
    </>
  );
}

export default App;
