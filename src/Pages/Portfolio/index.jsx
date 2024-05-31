import React from "react";

const Portfolio = () => {
  return (
    <div className="my-10">
      <div className="justify-center items-center">
        <h1 className=" md:text-2xl text-xl text-center mx-auto font-bold ">
          Whatever your vision is for your space, we can make it happen.
        </h1>
        <h1 className=" md:text-2xl text-xl mx-auto text-center font-bold ">
          {" "}
          Check our latest work
        </h1>
        <p className="mx-auto  mt-3 text-center font-semibold text-black">
          Click on a project below and explore the progress through photos
        </p>
        <div className="mx-auto text-center mt-8">
          <button className="w-[154px] h-[30px]  p text-black bg-transparent border border-black">
            <div className="flex text-[#002152] font-semibold">
              <h1 className="text-sm px-3"> Modern Ceiling</h1>
              <div className="pt-2">
                {" "}
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.99984 5.99999L0.756836 1.75799L2.17184 0.343994L4.99984 3.17199L7.82784 0.343994L9.24284 1.75799L4.99984 5.99999Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
