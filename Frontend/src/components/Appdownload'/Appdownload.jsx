import React from "react";
import { assets } from "../../assets/assets/frontend_assets/assets";

function Appdownload() {
  return (
    <div className="flex flex-col items-center justify-center mt-[100px] m-auto">
      <h1 className="text-center text-[max(3vw,20px)] font-[500]">
        For Better Experience Download <br /> MealWheel App
      </h1>
      <div className="flex gap-[30px] mt-[10px]">
        <img
          src={assets.play_store}
          alt=""
          className="cursor-pointer w-[max(30vw,120px)] max-w-[180px]"
        />
        <img
          src={assets.app_store}
          alt=""
          className="cursor-pointer w-[max(30vw,120px)] max-w-[180px]"
        />
      </div>
    </div>
  );
}

export default Appdownload;
