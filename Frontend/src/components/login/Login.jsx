import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets/frontend_assets/assets";
import axios from "axios";
import { Context } from "../../context/Context";
import { toast } from "react-toastify";

function Login({ setshow }) {
  const { url, settoken } = useContext(Context);
  const [current, setcurrent] = useState("Sign-In");
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangeHandel = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata((data) => ({ ...data, [name]: value }));
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (current === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/signup";
    }
    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      settoken(response.data.token);
      localStorage.setItem("token", response.data.token);

      setshow(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="absolute z-10 w-[100%] h-[100%] bg-[#000000c6] grid">
      <form
        onSubmit={onSubmit}
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
              name="name"
              value={data.name}
              onChange={onChangeHandel}
              type="text"
              placeholder="Your Name"
              required
              className="outline-none border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[5px] "
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={data.email}
            onChange={onChangeHandel}
            type="text"
            placeholder="Email"
            required
            className="outline-none border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[5px] "
          />
          <input
            name="password"
            value={data.password}
            onChange={onChangeHandel}
            type="text"
            placeholder="Password"
            required
            className="outline-none border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[5px] "
          />
        </div>
        <button
          type="submit"
          className="bg-[tomato] p-[10px] rounded-[10px] text-[20px] cursor-pointer text-white font-[500] border-none"
        >
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

// const formdata = new FormData();
// formdata.append("name", data.name);
// formdata.append("email", data.email);
// formdata.append("password", data.password);
// const response = await axios.post(`${newUrl}/api/user/signup`, formdata);
