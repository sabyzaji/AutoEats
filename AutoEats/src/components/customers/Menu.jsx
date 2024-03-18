import React from "react";
import img1 from "../../assets/img/menu1.jpg";
import img2 from "../../assets/img/menu2.jpg";
import img3 from "../../assets/img/menu3.jpg";
import img4 from "../../assets/img/menu4.jpg";
import img5 from "../../assets/img/menu5.jpg";
import img6 from "../../assets/img/menu6.jpg";
import MenuCard from "../../layouts/MenuCard";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-custom-bg ">
      <h1 className=" font-semibold text-center text-4xl font-sans ">
        Our Menu
      </h1><br />

      <div className=" flex flex-wrap   justify-center">
        <MenuCard img={img1} title="Espresso" />
        <MenuCard img={img2} title="Cappuccino" />
        <MenuCard img={img3} title="Latte" />
        <MenuCard img={img4} title="Americano" />
        <MenuCard img={img5} title="Macchiato" />
        <MenuCard img={img6} title="Doppio" />
        <MenuCard img={img5} title="Macchiato" />
        <MenuCard img={img6} title="Doppio" />

      </div>
      <br /><div className="flex justify-center">
        <button className="px-6 py-1 border-2 bg-custom-nav hover:bg-[#6D2932] transition-all rounded-lg text-center text-white font-semibold w-fit items-center " onClick={() => navigate("/menuList")}>Show more</button >
      </div></div>
  );
};

export default Menu;
