import React from "react";
import { assets } from "../../assets/admin_assets/assets";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-[8px_4%] ">
      <img src={assets.logo} alt="" className="w-[max(10%,80px)]" />
      <img src={assets.profile_image} alt="" className="w-[40px]" />
    </div>
  );
}

export default Navbar;
