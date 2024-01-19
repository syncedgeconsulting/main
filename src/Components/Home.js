import React from "react";
import SGlogo from "../Images/logo.png";
// import {
//   FaEnvelope,
//   FaLinkedin,
//   FaInstagram,
//   FaFacebook,
// } from "react-icons/fa";
// // import '../bhavesh.png'

const Home = () => {
  return (
    <div class="flex items-center justify-between h-screen mx-4">
    <div class="flex-1 mr-4 ">
      <div class="text-center p-4">
        <div class="mb-4 ">Our Motto</div>
        <div className="text-4xl italic">
          "Syncing Innovative Solutions to your Unique Problems"
        </div>
      </div>
    </div>

    <div class="flex-1 ml-4">
      <img
        src={SGlogo}
        alt="Image"
        class="w-full h-full object-cover contrast-100"
      />
    </div>
  </div>
  );
};

export default Home;
