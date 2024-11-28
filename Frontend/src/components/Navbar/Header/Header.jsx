import React from "react";

function Header() {
  return (
    <div className="bg-[url('C:\Users\shiva\OneDrive\Desktop\Fast-Food\Frontend\public\header_img.png')] h-[34vw] bg-no-repeat bg-cover relative  my-[30px] mx-[auto]">
      <div className="absolute bottom-[10%] left-[60px] flex flex-col items-start gap-[1.5vw] max-w-[50%]">
        <h2 className="text-[max(4.3vw,20px)] font-[500] animate-fadeIn text-white">
          Order your favourite FOOD here.
        </h2>
        <p className="text-white text-[1vw] animate-fadeIn">
          Satisfy your cravings with the best! At <span>MealWheel</span>, we
          bring you a world of flavors, from classic recipes to modern culinary
          delights. Whether you’re looking for a quick bite or an elaborate
          feast, our menu caters to every taste. Experience the joy of good
          food, crafted with the finest ingredients and delivered straight to
          your doorstep.
        </p>
        <button className="text-[#747474] animate-fadeIn bg-white rounded-[50px] hover:bg-[#747474] hover:text-white border-[none] text-[max(1vw,13px)] font-[500] py-[1vw] px-[2.3vw]">
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Header;
