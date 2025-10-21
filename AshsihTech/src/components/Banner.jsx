import React from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="bg-[#2699fb] w-full py-[100px]">
      <div className="max-w-[1240px] my-[100px] font-bold mx-auto text-center">
        <div className="text-xl md:text-3xl  text-white">Learn with us</div>
        <h2 className="text-white text-3xl md:text-[50px] md:p-[24px]">
          Grow with us.
        </h2>
        <div className="text-[25px] md:p-[24px] text-white">
          Learn{" "}
          <TypeAnimation
            sequence={[
              "React.js",
              1000,
              "Spring Boot",
              1000,
              "Full Stack Development",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>
        <button className='bg-black text-white rounded p-3'>Get Start</button>

      </div>
    </div>
  );
};

export default Banner;
