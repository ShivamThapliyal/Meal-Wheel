import React from "react";

function Header() {
  return (
    <div className="bg-[url('C:\Users\shiva\OneDrive\Desktop\Fast-Food\Frontend\public\header_img.png')] h-[38vw] sm:h-[34vw] bg-no-repeat bg-contain relative  my-[30px] mx-[auto]">
      <div className="absolute bottom-[15%] sm:bottom-[10%] left-[30px] sm:left-[60px] flex flex-col items-start gap-[1vw] sm:gap-[1.5vw] max-w-[62%] sm:max-w-[50%]">
        <h2 className="  sm:text-[max(4.3vw,20px)] font-[500] animate-fadeIn text-white">
          Order your <br /> favourite food here.
        </h2>
        <p className="hidden sm:block">
          <p className="text-white text-[1vw] animate-fadeIn">
            Satisfy your cravings with the best! At <span>MealWheel</span>, we
            bring you a world of flavors, from classic recipes to modern
            culinary delights. Whether you’re looking for a quick bite or an
            elaborate feast, our menu caters to every taste. Experience the joy
            of good food, crafted with the finest ingredients and delivered
            straight to your doorstep.
          </p>
        </p>
        <button className="text-[#747474] animate-fadeIn bg-white rounded-[50px] hover:bg-[#747474] hover:text-white border-[none] text-[max(1vw,13px)] font-[500] py-[0.5vw] px-[2vw] sm:py-[1vw] sm:px-[2.3vw]">
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Header;
