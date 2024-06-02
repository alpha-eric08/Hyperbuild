import React from "react";
import { Rectanglee49 } from "../../assets/images";
import { Rectangle50 } from "../../assets/images";
import { Rectangle51 } from "../../assets/images";
import { Rectangle52 } from "../../assets/images";
import { Rectangle53 } from "../../assets/images";
import { Rectangle54 } from "../../assets/images";
import { Rectangle55 } from "../../assets/images";
import { Rectangle56 } from "../../assets/images";

const Fencing = () => {
  return (
    <div>
      <div>
        <h1 className="text-center mx-auto text-black text-xl font-bold mt-10">
          Fencing
        </h1>
        <div className="grid grid-cols-4  gap-10 mt-10">
          <div>
            <img
              src={Rectanglee49}
              alt=""
              className="w-[325px] h-[320px] rounded-md"
            />
            <h1 className="text-center mx-auto text-black text-sm font-semibold w-[260px] ">
              Security Fence wires
            </h1>
          </div>
          <div>
            <img
              src={Rectangle50}
              alt=""
              className="w-[325px] h-[320px] rounded-md"
            />
            <h1 className="text-center mx-auto text-black text-sm font-semibold w-[260px] ">
              Electric Fence
            </h1>
          </div>
          <div>
            <img
              src={Rectangle51}
              alt=""
              className="w-[325px] h-[320px] rounded-md"
            />
            <h1 className="text-center mx-auto text-black text-sm font-semibold w-[260px] ">
              Seattle Fence Installation
            </h1>
          </div>
          <div>
            <img
              src={Rectangle52}
              alt=""
              className="w-[325px] h-[320px] rounded-md"
            />
            <h1 className="text-center mx-auto text-black text-sm font-semibold w-[260px] ">
              Free-standing electric fence
            </h1>
          </div>
          <div>
            <img
              src={Rectangle53}
              alt=""
              className="w-[325px] h-[320px] rounded-md"
            />
            <h1 className="text-center mx-auto text-black text-sm font-semibold w-[260px] ">
              Free-standing electric fence
            </h1>
          </div>
          <div>
            <img
              src={Rectangle54}
              alt=""
              className="w-[325px] h-[320px] rounded-md"
            />
            <h1 className="text-center mx-auto text-black text-sm font-semibold w-[260px] ">
              Rota Spike
            </h1>
          </div>

          <div>
            <img
              src={Rectangle55}
              alt=""
              className="w-[325px] h-[320px] rounded-md"
            />
            <h1 className="text-center mx-auto text-black text-sm font-semibold w-[260px] ">
              Drop ceiling designs
            </h1>
          </div>
          <div>
            <img
              src={Rectangle56}
              alt=""
              className="w-[325px] h-[320px] rounded-md"
            />
            <h1 className="text-center mx-auto text-black text-sm font-semibold w-[260px] ">
              Metal fence stock
            </h1>
          </div>
        </div>
        <hr className="text-slate-300 my-20 w-full" />
      </div>
    </div>
  );
};

export default Fencing;
