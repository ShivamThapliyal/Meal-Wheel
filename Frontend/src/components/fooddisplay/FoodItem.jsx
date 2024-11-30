import React, { useContext } from "react";
import { assets } from "../../assets/assets/frontend_assets/assets";
import { Context } from "../../context/Context";

function FoodItem({ id, name, description, image, price }) {
  const { carditem, addtocart, removefromcart, setcarditem } =
    useContext(Context);
  return (
    <div className="shadow-[0px_0px_5px_black] w-[100%] m-auto rounded-[15px]">
      <div className="relative">
        <img
          src={image}
          alt=""
          className="w-[100%] rounded-[15px_15px_0px_0px]"
        />
        {!carditem[id] ? (
          <img
            src={assets.add_icon_white}
            onClick={() => addtocart(id)}
            className="absolute bottom-[15px] right-[15px] w-[35px] cursor-pointer"
          />
        ) : (
          <div className="absolute bottom-[15px] cursor-pointer  right-[15px] bg-white rounded-[50px] flex gap-[10px] items-center p-[6px]">
            <img
              src={assets.remove_icon_red}
              alt=""
              onClick={() => removefromcart(id)}
            />
            <p>{carditem[id]}</p>
            <img
              src={assets.add_icon_green}
              alt=""
              onClick={() => addtocart(id)}
            />
          </div>
        )}
      </div>
      <div className="p-[20px]">
        <div className="flex items-center justify-between">
          <p className="text-[20px] font-[500]">{name}</p>
          <img src={assets.rating_starts} alt="" className="w-[70px]" />
        </div>
        <p className="text-[#676767] text-[12px]">{description}</p>
        <p className="text-[tomato] text-[22px] font-[500] m-[10px_0px]">
          ${price}
        </p>
      </div>
    </div>
  );
}

export default FoodItem;
