import React from "react";
import { pic1 } from "../../assets/images";
import { pic2 } from "../../assets/images";
import { pic3 } from "../../assets/images";
import { ic4 } from "../../assets/images";
import { pic5 } from "../../assets/images";
import { pic6 } from "../../assets/images";
import { pic7 } from "../../assets/images";
import { pic8 } from "../../assets/images";

const Grid = () => {
  return (
    <div>
      <div className="grid grid-cols-4  gap-10 mt-10">
        <div>
          <img src={pic1} alt="" className="w-[325px] h-[320px] rounded-md" />
          <h1 className="text-center mx-auto text-black text-sm font-semibold w-[260px] ">
            Wall lighting Ceiling design
          </h1>
        </div>
        <div>
          <img src={pic2} alt="" className="w-[325px] h-[320px] rounded-md" />
          <h1 className="text-center mx-auto text-black text-sm font-semibold w-[260px] ">
            bedroom pop ceiling Design
          </h1>
        </div>
        <div>
          <img src={pic3} alt="" className="w-[325px] h-[320px] rounded-md" />
          <h1 className="text-center mx-auto text-black text-sm font-semibold w-[260px] ">
            False Modern Ceiling Design
          </h1>
        </div>
        <div>
          <img src={ic4} alt="" className="w-[325px] h-[320px] rounded-md" />
          <h1 className="text-center mx-auto text-black text-sm font-semibold w-[260px] ">
            Commercial modern ceiling
          </h1>
        </div>
        <div>
          <img src={pic5} alt="" className="w-[325px] h-[320px] rounded-md" />
          <h1 className="text-center mx-auto text-black text-sm font-semibold w-[260px] ">
            LED Aluminum Profiles
          </h1>
        </div>
        <div>
          <img src={pic6} alt="" className="w-[325px] h-[320px] rounded-md" />
          <h1 className="text-center mx-auto text-black text-sm font-semibold w-[260px] ">
            Gypsum False Ceiling
          </h1>
        </div>

        <div>
          <img src={pic7} alt="" className="w-[325px] h-[320px] rounded-md" />
          <h1 className="text-center mx-auto text-black text-sm font-semibold w-[260px] ">
            Drop ceiling designs
          </h1>
        </div>
        <div>
          <img src={pic8} alt="" className="w-[325px] h-[320px] rounded-md" />
          <h1 className="text-center mx-auto text-black text-sm font-semibold w-[260px] ">
            {" "}
            Unique and classic ceiling design
          </h1>
        </div>
      </div>
      <hr className="text-slate-300 my-20 w-full" />
    </div>
  );
};

export default Grid;
