import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Drawer from "./AdminLayout";

const MenuCard = (props) => {
  return (<>

    <div className=" w-full lg:w-1/4  p-3 rounded-lg bg-custom-bg">
      <div>
        <img className=" rounded-xl" src={props.img} alt="img1" />
      </div>
      <div className=" p-2 mt-5">
        <div className=" flex flex-row justify-between">
          <h3 className=" font-semibold text-xl">{props.title}</h3>
          <h3 className=" font-semibold text-xl">{props.value}</h3>
        </div>
        <div className=" flex flex-row justify-between mt-3">
          {/* <div className=" flex gap-2">
            <button className="px-3 text-sm border-2 border-[#AB6B2E] bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-lg">
              Hot
            </button>
            <button className="px-3 text-sm border-2 border-[#AB6B2E] bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-lg">
              Cold
            </button>
          </div> */}
          <div className="flex justify-around w-full  bg-custom-nav rounded-full cursor-pointer items-center">
            <div className="  flex   text-white font-semibold px-3 py-2  ">
              Add to cart</div>
            <div> <FaShoppingCart size={18} color="white" /></div>

          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default MenuCard;
