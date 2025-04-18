import React from "react";
import logo from "../assets/butterfly.png";

const NavBar = () => {
  return (
    <>
      <div className="w-full flex items-center gap-4   ">
        <div className="border-1 border-gray-300 ">
          <a href="/">
            <img src={logo} alt="logo" width={48} height={48} />
          </a>
        </div>
        {/* w-full text-center  */}
        <div className=" w-full text-center ">
          {/* <span className="small-16   "> Hi, i am Taiwo and this is a </span> */}
          <p className="regular-60 text-[#caf0f8]">Post Craft App</p>
        </div>
        {/* <div className="">
          <a href="#footer"> Footer</a>
        </div> */}
      </div>
    </>
  );
};

export default NavBar;
