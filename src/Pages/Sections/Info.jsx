import React from "react";
import Text from "../Sections/Text";
import { move } from "../../assets/images";
import { logo } from "../../assets/images";

const Info = () => {
  return (
    <div className="mb-24 mx-auto">
      <div className="text-center lg:w-10/12 mx-auto pt-10 mb-10">
        <h1 className=" md:text-5xl text-4xl font-semibold ">About Us</h1>
      </div>
      <div className="flex w-full">
        <div className="w-[60%]">
          <Text />
        </div>

        <div className="w-[40%] items-center justify-center mt-10 px-10 ">
          <img
            src={move}
            alt=""
            className="rounded-full object-cover w-4/6 h-60"
          />
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Info;
