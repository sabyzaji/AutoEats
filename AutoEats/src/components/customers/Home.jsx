import React from "react";
import img from "../../assets/img/home.png";
import Button from "../../layouts/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 bg-custom-bg   ">
      <div className=" w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0  ">
        <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight">
          Start your journey at
        </h1>
        <h1 className="font-bold text-5xl text-left bg-custom-nav bg-clip-text text-transparent ">
          QuickBite
        </h1><br />
        <p>
          Savor the Speed, Taste the Excellence. Your Culinary Journey Begins at QuickBite Hub!
        </p>
        <div className=" flex flex-row gap-6">
          {/* <Button title="ADD TO CART" /> */}
          <button className="px-6 py-1 border-2 bg-custom-nav hover:bg-[#6D2932] transition-all rounded-lg text-center text-white font-semibold w-fit items-center " onClick={() => navigate("/menuList")}>Order Now</button >
        </div>
      </div>
    </div>
  );
};

export default Home;