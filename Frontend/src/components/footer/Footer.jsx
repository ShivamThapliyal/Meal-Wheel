import React from "react";
import { assets } from "../../assets/assets/frontend_assets/assets";

function Footer() {
  return (
    <div className="text-[#d9d9d9] bg-[#323232] mt-[100px] flex flex-col items-center gap-[20px] pt-[80px] py-[20px] px-[8vw]">
      <div className="flex flex-col gap-[35px] sm:grid sm:grid-cols-[2fr_1fr_1fr] w-[100%] sm:gap-[80px]">
        <div className="flex flex-col gap-[20px] items-start">
          <img src={assets.logo} alt="" />
          <p className="font-[500]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus natus beatae possimus quod ipsam. Nam, doloremque
            quisquam perferendis architecto minima unde quaerat.
          </p>
          <div className="flex gap-[10px]">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-[20px] items-start">
          <h1 className="font-[500] text-white text-2xl">Company</h1>
          <ul className="flex flex-col ">
            <li className="pb-[1] cursor-pointer hover:border-b-[2px]">Home</li>
            <li className="pb-[1] cursor-pointer hover:border-b-[2px]">
              About us
            </li>
            <li className="pb-[1] cursor-pointer hover:border-b-[2px]">
              Delivery
            </li>
            <li className="pb-[1] cursor-pointer hover:border-b-[2px]">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[20px] items-start">
          <h2>GET IN TOUCH</h2>
          <p>+91-1587236492</p>
          <p>email123@gamil.com</p>
        </div>
      </div>
      <p className="text-center">All Right Reserved To No One.</p>
    </div>
  );
}

export default Footer;
