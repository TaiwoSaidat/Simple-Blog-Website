import React from "react";

const Footer = () => {
  return (
    <>
      <div className="  w-full text-center " id="footer">
        <hr className="bg-gray-300 my-4" />
        <div className="flex flex-col  ">
          <div className=" flex justify-center  ">
            <p>All rights reserved &copy;2024. </p>
            <a href="https://github.com/TaiwoSaidat/Simple-Blog-Website">
              TaiwoSaidat.
            </a>
          </div>
          <p >Built using React Vite and Firebase</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
