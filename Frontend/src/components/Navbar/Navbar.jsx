import React from "react";
import { useState } from "react";
import { assets } from "../../assets/assets/frontend_assets/assets";

function Navbar() {
  const [menu, setmenu] = useState("");
  return (
    <div className="flex p-[20px] justify-between items-center">
      <img src={assets.logo} alt="" />
      <ul className="flex gap-[20px] text-[18px] text-customcolor mr-7 cursor-pointer">
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
      <div className="flex items-center gap-[40px]">
        <img src={assets.search_icon} alt="" />
        <div className="relative">
          <img src={assets.basket_icon} alt="" />
          <div className="absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-[5px] top-[-8px] right-[-8px]"></div>
        </div>
        <button className="bg-transparent text-[16px] transition duration-350  text-customcolor rounded-[50px] py-[10px] px-[30px] cursor-pointer  border-[1px] border-solid border-[tomato] hover:bg-[#fff4f2]">
          SIGN-IN
        </button>
      </div>
    </div>
  );
}

export default Navbar;
