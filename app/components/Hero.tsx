import React from "react";
import Image from "next/image";
import DownArrow from "../../public/Down_arrow.svg";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-screen w-3/4 mx-auto pt-10 pb-10">
      <div className="w-full h-full bg-[#6b7af1] rounded-lg flex flex-col justify-center items-center space-y-10 text-white">
        <h1 className={`text-8xl font-bold text-center whitespace-pre-line`}>
          <span>Unlimited web design</span>
          <br></br>
          <span className="italic">at a fixed monthly price</span>
        </h1>
        <p className={` text-3xl text-center`}>
          Design and development requests for a fixed fee.<br></br> Pause or
          cancel at any time.
        </p>
        <button
          className={`flex flex-row items-center space-x-2 text-2xl px-16 py-3 bg-white text-black rounded-full`}
        >
          <span>See Plans</span>
          <Image src={DownArrow} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
