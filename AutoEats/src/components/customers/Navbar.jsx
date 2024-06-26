import React, { useState } from "react";
import { Link } from "react-scroll";
import { SiCoffeescript } from "react-icons/si";
import Button from "../../layouts/Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";


const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state.userId;
  const menuArray = location.state.menuArray;

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className=" w-full z-10 bg-custom-nav">
      <div>
        <div className=" flex flex-row justify-between p-5 lg:px-32 px-5  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer gap-2" onClick={() => { navigate("/home", { state: { userId, menuArray } }) }}>

            <span style={{ color: 'white' }}>
              <SiCoffeescript size={25} />
            </span>
            <h1 className=" text-xl font-semibold font-sans text-white ">QuickBite</h1>
          </div>

          <nav className="hidden md:flex flex-row items-center  text-lg font-medium text-white font-sans gap-8">
            <div className="flex justify-around  gap-5">

              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="group relative inline-block cursor-pointer hover:text-slate-300"
              >
                Home

              </Link>

              {/* <Link
                to="menu"
                spy={true}
                smooth={true}
                duration={500}
                className="group relative inline-block cursor-pointer hover:text-slate-300"
              >
                Menu
              </Link> */}


              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="group relative inline-block cursor-pointer hover:text-slate-300"
              >
                About Us
              </Link>

              {/* <Link
              to="products"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Products
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link> */}

              {/* <Link
                to="review"
                spy={true}
                smooth={true}
                duration={500}
                className="group relative inline-block cursor-pointer hover:text-slate-300"
              >
                Reviews
              </Link> */}
              <div
                onClick={() => navigate("/menuList", { state: { userId, menuArray } })}
                className="group relative inline-block cursor-pointer hover:text-slate-300"
              >
                OrderNow
              </div>
            </div>
            <div className="flex justify-around  gap-4">
              <div onClick={() => navigate('/profile', { state: { userId, menuArray } })}>
                <IoPersonCircleSharp cursor={"pointer"} size={25} />
              </div>
              <div onClick={() => navigate('/cart', { state: { userId, menuArray } })}>
                <FaShoppingCart size={25} cursor={"pointer"} />
              </div>
              <div onClick={() => navigate("/")}>
                {/* <span title="Logout"> */}
                <AiOutlineLogout size={25} title="Logout" cursor={"pointer"} />
                {/* </span>    */}
              </div>
            </div>
          </nav>

          {/* <div className=" hidden lg:flex">
            <Button title="Login" />
          </div> */}

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={` ₹{menu ? "translate-x-0" : "-translate-x-full"
            } lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          {/* <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Menu
          </Link> */}
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About Us
          </Link>
          {/* <Link
            to="products"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Products
          </Link> */}
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Reviews
          </Link>
          <Button title="login" />
        </div>

      </div >
    </div >
  );
};

export default Navbar;
