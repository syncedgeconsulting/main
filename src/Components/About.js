import React from "react";
import { MdBusiness } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import { GiGrowth } from "react-icons/gi";
import { FaProductHunt } from "react-icons/fa6";
import { SiMicrostrategy } from "react-icons/si";
import { RiFundsLine } from "react-icons/ri";
import SGlogo from "../Images/logo.png";
import muskan from "../Images/muskan.jpg";
import dhruv from "../Images/dhruv.jpeg";
import aditye from "../Images/aditye.png";
import divyanshu from "../Images/divyanshu.jpeg";

const About = () => {
  return (
    <div className="container ">
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

      <div className="who flex justify-center items-center w-screen italic bg-stone-200 text-xl text-center font-semibold p-5 my-10 h-36">
        "SyncEdge Consultancy is an initiative started in 2023 by a dedicated
        team of students from IIT Kharagpur, SRCC, and Christ University, with
        the motive of helping small-sized startups with resource constraints to
        foster their growth"
      </div>

      <div className="service ">
        <div className="heading w-screen text-center text-6xl underline mt-20 mb-10">
          Services
        </div>

        <div className=" flex  justify-center w-screen bg-grey-500 ">
          <div className="grid grid-cols-2 gap-x-60 gap-y-4 w-4/5 p-5">
            <div className="  flex justify-between items-center p-5 text-right   bg-black text-white text-xl font-semibold tracking-wider font-mono border rounded-lg">
              {" "}
              <MdBusiness size={30} />
              Business Model
            </div>
            <div className="  flex justify-between items-center p-5 text-right   bg-black text-white text-xl font-semibold tracking-wider font-mono border rounded-lg">
              {" "}
              <AiOutlineSolution size={30} />
              Talent Solutions
            </div>
            <div className="  flex justify-between items-center p-5 text-right   bg-black text-white text-xl font-semibold tracking-wider font-mono border rounded-lg">
              {" "}
              <GiGrowth size={30} />
              Market Entry and Growth
            </div>
            <div className="  flex justify-between items-center p-5 text-right   bg-black text-white text-xl font-semibold tracking-wider font-mono border rounded-lg">
              {" "}
              <FaProductHunt size={30} />
              Product Development
            </div>
            <div className="  flex justify-between items-center p-5 text-right   bg-black text-white text-xl font-semibold tracking-wider font-mono border rounded-lg">
              {" "}
              <RiFundsLine size={30} />
              Fund Raising
            </div>
            <div className="  flex justify-between items-center p-5 text-right   bg-black text-white text-xl font-semibold tracking-wider font-mono border rounded-lg">
              {" "}
              <SiMicrostrategy size={30} />
              Pricing Strategy
            </div>
          </div>
        </div>
      </div>

      <div className="our-team bg-stone-200">
        <div className="heading w-screen text-center text-6xl underline mt-20 mb-10 pt-5">
          Our Team
        </div>

        <div class="flex flex-wrap justify-center">
          <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 max-w-xs mx-2 my-4 bg-white rounded-lg overflow-hidden shadow-md ">
            <img
              src={divyanshu}
              alt="Image 1"
              class="w-full h-96 object-cover"
            />
            <div class="p-4">
              <div class="font-semibold text-xl mb-2 text-center">
                Divyanshu Baurai
              </div>
              <p class="text-gray-700 text-center">
                IIT Kharagpur ‘25 | Unstop | Ex - Invest India | Ex - IvyCap
                Ventures
              </p>
            </div>
          </div>

          <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 max-w-xs mx-2 my-4 bg-white rounded-lg overflow-hidden shadow-md">
            <img src={muskan} alt="Image 2" class="w-full h-96 object-cover" />
            <div class="p-4">
              <div class="font-semibold text-xl mb-2 text-center">
                Muskan Agrawal
              </div>
              <p class="text-gray-700 text-center">
                SRCC ‘24, Ex - Airtel | Ex- Economic Times | Ex - Vyapt
                Consulting
              </p>
            </div>
          </div>

          <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 max-w-xs mx-2 my-4 bg-white rounded-lg overflow-hidden shadow-md">
            <img src={aditye} alt="Image 3" class="w-full h-96 object-cover" />
            <div class="p-4">
              <div class="font-semibold text-xl mb-2 text-center">
                Aditya Mohite
              </div>
              <p class="text-gray-700 text-center">
                IIT Kharagpur ‘25 | Primewise Consulting | Ex- SK Associates &
                Group
              </p>
            </div>
          </div>

          <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 max-w-xs mx-2 my-4 bg-white rounded-lg overflow-hidden shadow-md">
            <img src={dhruv} alt="Image 4" class="w-full h-96 object-cover" />
            <div class="p-4">
              <div class="font-semibold text-xl mb-2 text-center">
                Dhruv Sardana
              </div>
              <p class="text-gray-700 text-center">
                Christ '24, Incoming analyst @PWC | Ex-GrowthSchool | Ex
                -Metalmann
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
