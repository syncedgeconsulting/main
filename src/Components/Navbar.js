import React from "react";
import { FaEnvelope } from "react-icons/fa"; // Assuming you have the react-icons library installed for the envelope icon
import { Link } from "react-router-dom";
import SGlogo from "../Images/logo.png";

import '../App.css'

const Navbar = () => {

  const handleOnClick = (event) => {
    // Remove 'active' class from any element that has it
    const activeElements = document.querySelectorAll('.activeNavbar');
    activeElements.forEach((element) => {
      element.classList.remove('activeNavbar');
    });

    // Add 'active' class to the clicked button
    event.target.classList.add('activeNavbar');
  };

  return (
    <nav class="navbar">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/about"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={SGlogo}
            class="h-14"
            alt="SGLogo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
            SyncedgeConsultancy
          </span>
        </Link>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

          <a href="mailto:syncedgeconsultancy@gmail.com">
            <button
              type="button"
              class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              <FaEnvelope className="mr-2 mt-1" />
              syncedgeconsultancy
            </button>
          </a>

          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border- ">
            <li>
              <Link
                to="/"
                class="activeNavbar transition ease-in-out delay-150 duration-700 hover:underline hover:decoration-black decoration-2 underline-offset-8"
                aria-current="page" onClick={handleOnClick}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/projects"
                class="transition ease-in-out delay-150 duration-700  hover:underline hover:decoration-black decoration-2 underline-offset-8" onClick={handleOnClick}
              >
                Projects
              </Link>
            </li>

                        
            {/* <li>
              <Link
                to="/services"
                class="transition ease-in-out delay-150 duration-700  hover:underline hover:decoration-black decoration-2 underline-offset-8" onClick={handleOnClick}
              >
                Services
              </Link>
            </li> */}
            
            <li>
              <Link
                to="/about"
                class="transition ease-in-out delay-150 duration-700  hover:underline hover:decoration-black decoration-2 underline-offset-8 " onClick={handleOnClick}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                class="transition ease-in-out delay-150 duration-700  hover:underline hover:decoration-black decoration-2 underline-offset-8" onClick={handleOnClick}
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
