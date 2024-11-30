import React, { useState } from "react";
import { assets } from "../../assets/assets/frontend_assets/assets";

function Login({ setshow }) {
  const [current, setcurrent] = useState("Sign-In");
  return (
    <div className="absolute z-10 w-[100%] h-[100%] bg-[#000000c6] grid">
      <form
        action=""
        className="animate-fadeInPop place-self-center w-[420px] text-[#808080] bg-white flex flex-col gap-[25px] p-[25px_30px] rounded-[10px] font-[15px]"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-[500] text-black">{current}</h1>
          <img
            onClick={() => setshow(false)}
            src={assets.cross_icon}
            alt=""
            className="w-[15px] cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-[20px]   ">
          {current === "Sign-In" ? (
            <input
              type="text"
              placeholder="Your Name"
              required
              className="outline-none border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[5px] "
            />
          ) : (
            <></>
          )}
          <input
            type="text"
            placeholder="Email"
            required
            className="outline-none border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[5px] "
          />
          <input
            type="text"
            placeholder="Password"
            required
            className="outline-none border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[5px] "
          />
        </div>
        <button className="bg-[tomato] p-[10px] rounded-[10px] text-[20px] cursor-pointer text-white font-[500] border-none">
          {current === "Sign-In" ? "Create account" : "Login"}
        </button>
        <div className="flex gap-[5px] items-start ">
          <input type="checkbox" className="mt-[6px]" />
          <p>By continuing, i agree to the term of use and privacy policy.</p>
        </div>
        {current === "Sign-In" ? (
          <p>
            Already have an account.
            <span
              onClick={() => setcurrent("Login")}
              className="text-red-700 cursor-pointer text-[20px]"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Create new account?
            <span
              onClick={() => setcurrent("Sign-In")}
              className="text-red-700 cursor-pointer text-[20px]"
            >
              Click here
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;
