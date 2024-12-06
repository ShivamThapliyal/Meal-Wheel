import React from "react";
import { assets } from "../../assets/admin_assets/assets";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-[18%] border-[2px] border-solid border-[#a9a9a9] border-t-0 min-h-[100vh]">
      <div className="flex flex-col pt-[50px] pl-[20%] gap-[20px] text-[max(1vw,10px)] font-[600]">
        <NavLink to={"/add"}>
          <div className="flex flex-row border-[2px] border-solid border-r-0 border-[#a9a9a9] items-center justify-start gap-[10px] p-[10px_10px] rounded-[5px] cursor-pointer hover:bg-[#fcfc]">
            <img src={assets.add_icon} alt="" />
            <p className="hidden sm:block">Add Items</p>
          </div>
        </NavLink>
        <NavLink to={"/list"}>
          <div className="flex flex-row border-[2px] border-solid border-r-0 border-[#a9a9a9] items-center justify-start gap-[10px] p-[10px_10px] rounded-[5px] cursor-pointer hover:bg-[#fcfc]">
            <img src={assets.order_icon} alt="" />
            <p className="hidden sm:block">List Items</p>
          </div>
        </NavLink>
        <NavLink to={"/order"}>
          <div className="flex flex-row border-[2px] border-solid border-r-0 border-[#a9a9a9] items-center justify-start gap-[10px] p-[10px_10px] rounded-[5px] cursor-pointer hover:bg-[#fcfc]">
            <img src={assets.order_icon} alt="" />
            <p className="hidden sm:block">Orders</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
