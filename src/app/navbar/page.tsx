"use client";
import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { CiHome, CiSearch } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

export default function Navbar() {
  const [open, setOpen] = useState(true);

  return (
    // <div className="bg-dark-purple">
    //   <div
    //     className={`bg-dark-purple h-screen p-5 pt-8 ${
    //       open ? "w-72" : "w-20"
    //     } duration-300 relative`}
    //   >
    //     <BsArrowLeftShort
    //       className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer" ${
    //         !open && "rotate-180"
    //       }`}
    //       onClick={() => setOpen(!open)}
    //     />

    //     <div className="inline-flex">
    //       <CiHome className="text-3xl cursor-pointer block float-left mr-10" />
    //       <h1
    //         className={`text-white origin-left font-medium text-2xl duration-300 ${
    //           !open && "scale-0"
    //         }`}
    //       >
    //         Home
    //       </h1>
    //     </div>

    //     <div
    //       className={`flex items-center rounded-md bg-light-white mt-4 py-2`}
    //     >
    //       <CiSearch
    //         className={`text-3xl text-white block float-left cursor-pointer`}
    //       />

    //       <input
    //         type={"search"}
    //         placeholder="Search"
    //         className={`text-2xl text-white block float-left cursor-pointer ml-11  bg-transparent w-full text-color-white focus:outline-none ${
    //           !open && "hidden"
    //         }`}
    //       />
    //     </div>

    //     <ul className="pt-2"></ul>

    //     <div className="inline-flex">
    //       <CiCircleQuestion className="text-3xl cursor-pointer block float-left mr-10 mt-5" />
    //       <h1
    //         className={`mt-5 size-5  text-white text-2xl ml-15 font-medium duration-300 ${
    //           !open && "scale-0"
    //         }`}
    //       >
    //         About
    //       </h1>
    //     </div>

    //     <div></div>

    //     <div className="inline-flex">
    //       <CiBoxList className="text-3xl cursor-pointer block float-left mr-10 mt-5" />
    //       <h1
    //         className={`mt-5 size-5  text-white text-2xl ml-15 font-medium duration-300 ${
    //           !open && "scale-0"
    //         }`}
    //       >
    //         Learn
    //       </h1>
    //     </div>

    //     <div></div>

    //     <div className="inline-flex">
    //       <CiUser className="text-3xl cursor-pointer block float-left mr-10 mt-5" />
    //       <h1
    //         className={`mt-5 size-5  text-white text-2xl ml-15 font-medium duration-300 ${
    //           !open && "scale-0"
    //         }`}
    //       >
    //         Profile
    //       </h1>
    //     </div>

    //     <div></div>

    //     <div className="inline-flex">
    //       <CiPhone className="text-3xl cursor-pointer block float-left mr-10 mt-5" />
    //       <h1
    //         className={`mt-5 size-5  text-white text-2xl ml-15 font-medium duration-300 ${
    //           !open && "scale-0"
    //         }`}
    //       >
    //         Contact
    //       </h1>
    //     </div>
    //   </div>
    // </div>
    <div>not needed</div>
  );
}

