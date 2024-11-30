import React from "react";
import { menu_list } from "../../../assets/assets/frontend_assets/assets";

function ExploreMenu({ category, setcategory }) {
  return (
    <div className="flex flex-col gap-[20px] max-w-[100%]">
      <h1 className="text-2xl tracking-wider font-[400] text-[#262626] ">
        <span className="pb-1 border-b-[2px] border-black">
          Explore our menu
        </span>
      </h1>
      <div className="flex items-center justify-between gap-[30px] text-center my-[20px]  overflow-x-scroll scrollbar-hide">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() =>
                setcategory((prev) =>
                  prev === item.menu_name ? "ALL" : item.menu_name
                )
              }
            >
              <img
                src={item.menu_image}
                alt=""
                className={
                  category === item.menu_name
                    ? "w-[7.5vw] min-w-[80px] cursor-pointer border-[4px] border-[tomato] rounded-[50px]"
                    : "min-w-[80px] cursor-pointer w-[7.5vw]"
                }
              />
              <p
                className={
                  category === item.menu_name
                    ? "mt-[5px] text-[#black]  sm:text-[max(1.4vw,16px)] cursor-pointer"
                    : "mt-[5px] text-[#747474]  sm:text-[max(1.4vw,16px)] cursor-pointer"
                }
              >
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="border-b border-black" />
    </div>
  );
}

export default ExploreMenu;
