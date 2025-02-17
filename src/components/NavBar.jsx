import React from "react";
import logo from "../assets/butterfly.png";

const NavBar = () => {
  return (
    <>
      <div className="w-full flex  items-center gap-4   ">
        <div className="border-1 border-gray-300   ">
          <img src={logo} alt="" width={48} height={48} />
        </div>
        {/* w-full text-center  */}
        <div className=" w-full text-center ">
          {/* <span className="small-16   "> Hi, i am Taiwo and this is a </span> */}
          <p className="regular-60"> Sample Blog Posts</p>
        </div>
        {/* <div className="">
          <a href="#footer"> Footer</a>
        </div> */}
      </div>
    </>
  );
};

export default NavBar;
