import Image from "next/image";
import logo from "../../public/logo.svg";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="fixed left-1/2 top-10 transform -translate-x-1/2 w-3/4 z-10">
      <div className=" bg-[#6b7af1] p-5 rounded-lg flex flex-row justify-between text-white items-center">
        <div className="">
          <Image src={logo} />
        </div>
        <div className="space-x-5 font-bold">
          <a href="" className="hover:text-black">
            About
          </a>
          <a href="" className="hover:text-black">
            Work
          </a>
          <a href="" className="hover:text-black">
            Who it's for
          </a>
          <a href="" className="hover:text-black">
            Services
          </a>
          <a href="" className="hover:text-black">
            FAQs
          </a>
        </div>
        <div className="">
          <input
            type="button"
            value={"See Plans"}
            className="px-10 py-2 bg-white text-black font-bold rounded-full cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
