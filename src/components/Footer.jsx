import React from "react";

const Footer = () => {
  return (
    <>
      <div className="  w-full text-center " id="footer">
        {/* <hr className="bg-[#caf0f8]  my-4" /> */}
        <div className="bg-[#caf0f8] my-6 h-0.5"> </div>
        <div className="flex flex-col text-[#caf0f8] ">
          <div className=" flex justify-center  ">
            <p>All rights reserved &copy;2024. </p>
            <a href="https://github.com/TaiwoSaidat/Simple-Blog-Website">
              &nbsp; Post Craft App. &nbsp;
            </a>
          </div>
          <p>Built using React Vite and Firebase</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
