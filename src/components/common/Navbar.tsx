import React from "react";
import GreenButton from "../Upcoming Classes/GreenButton";

const Navbar = () => {
  return (
    <div className="container grid grid-cols-12 my-6 ">
      <div className="col-span-5 my-auto">
        <img src="./Logo.png" alt="" />
      </div>
      <div className="col-span-7 flex gap-6 justify-end items-center">
        <p>Home</p>
        <p>Features</p>
        <p>Community</p>
        <p>Blog</p>
        <p>Pricing</p>
        <GreenButton text={"Register Now"} />
      </div>
    </div>
  );
};

export default Navbar;
