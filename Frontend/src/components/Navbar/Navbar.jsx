import React from "react";
import { useState } from "react";
import { assets } from "../../assets/assets/frontend_assets/assets";

function Navbar({ setshow }) {
  const [menu, setmenu] = useState("");
  return (
    <div className="flex p-[20px] justify-between sm:justify-between items-center">
      <img src={assets.logo} alt="" className="w-[100px] sm:w-[150px]" />
      <ul className="hidden sm:flex sm:gap-[20px] sm:text-[18px] sm:text-customcolor sm:mr-7 sm:cursor-pointer">
        <li
          onClick={() => setmenu("Home")}
          className={
            menu === "Home" ? "pb-1 border-b-[2px] border-[#49557e] " : ""
          }
        >
          Home
        </li>
        <li
          onClick={() => setmenu("Menu")}
          className={
            menu === "Menu" ? "pb-1 border-b-[2px] border-[#49557e] " : ""
          }
        >
          Menu
        </li>
        <li
          onClick={() => setmenu("Mobile")}
          className={
            menu === "Mobile" ? "pb-1 border-b-[2px] border-[#49557e] " : ""
          }
        >
          Mobile-App
        </li>
        <li
          onClick={() => setmenu("Contact")}
          className={
            menu === "Contact" ? "pb-1 border-b-[2px] border-[#49557e] " : ""
          }
        >
          Contact US
        </li>
      </ul>
      <div className="gap-[20px] flex items-center sm:gap-[40px]">
        <img src={assets.search_icon} alt="" className="w-[20px] sm:w-[30px]" />
        <div className="relative">
          <img
            src={assets.basket_icon}
            alt=""
            className="w-[20px] sm:w-[30px]"
          />
          <div className="absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-[5px] top-[-8px] right-[-8px]"></div>
        </div>
        <button
          onClick={() => setshow(true)}
          className="py-[7px] px-[15px] text-[10px] bg-transparent sm:text-[16px] transition duration-350  text-customcolor rounded-[50px] sm:py-[10px] sm:px-[30px] cursor-pointer  border-[1px] border-solid border-[tomato] hover:bg-[#fff4f2]"
        >
          SIGN-IN
        </button>
      </div>
    </div>
  );
}

export default Navbar;
