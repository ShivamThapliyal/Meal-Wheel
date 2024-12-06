import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { assets } from "../../assets/assets/frontend_assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

function Cart() {
  const { carditem, food_list, removefromcart, gettotal, url } =
    useContext(Context);
  const navigate = useNavigate();
  return (
    <div>
      <NavLink to={"/"}>
        <p>Back</p>
      </NavLink>
      <div className="mt-[70px]">
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[max(1.5vw,12px)] text-gray-600">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (carditem[item._id] > 0) {
            return (
              <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] mt-[50px] items-center text-[max(1.2vw,12px)] text-black">
                <img
                  src={url + "/images/" + item.image}
                  alt=""
                  className="w-[50px] rounded-[10px]"
                />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{carditem[item._id]}</p>
                <p>${item.price * carditem[item._id]}</p>
                <p
                  onClick={() => removefromcart(item._id)}
                  className="font-[900] text-lg text-red-800 cursor-pointer"
                >
                  X
                </p>
              </div>
            );
          }
        })}
      </div>
      <div className=" flex flex-col mt-[100px] sm:flex sm:flex-row justify-between gap-[20px] ">
        <div className="flex-1 flex-col p-[20px]  items-start gap-[15px] border-2">
          <h1 className="text-2xl font-[900] pb-[20px]">Cart Total</h1>
          <div className="flex flex-col ">
            <div className="flex justify-between text-[#555] p-[10px]">
              <p>Subtotal</p>
              <p>${gettotal()}</p>
            </div>
            <hr />
            <div className="flex justify-between text-[#555] p-[10px]">
              <p>Delivery Fee</p>
              <p>${5}</p>
            </div>
            <hr />
            <div className="flex justify-between text-[#555] p-[10px]">
              <p>Total</p>
              <p>{gettotal() + 5}</p>
            </div>
            <hr />
          </div>
          <button
            onClick={() => navigate("/placeorder")}
            className="bg-[tomato] mt-[10px] py-[12px] font-[500] w-[max(15vw,200px)] cursor-pointer text-white border-none rounded-[4px]"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className=" flex flex-col justify-startsm:flex-col sm:flex-1 p-[20px] ">
          <p className="text-[15px] text-[#555]">
            If you have a promocode,Enter here
          </p>
          <div className="flex justify-between bg-[#eaeaea] items-center mt-[20px]  rounded-[5px]">
            <input
              type="text"
              placeholder="promo"
              className="bg-transparent border-none outline-none pl-[10px]"
            />
            <button className="text-white bg-black w-[max(12vw,150px)] py-[12px] px-[5px] rounded-[5px]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
