import React, { useContext } from "react";
import { Context } from "../../context/Context";

function Placeorder() {
  const { gettotal } = useContext(Context);
  return (
    <form className="flex flex-col sm:flex sm:flex-row items-center justify-center gap-[20px]">
      <div className="flex flex-col p-[10px] gap-[10px]">
        <p className="text-2xl mb-[20px] font-[500]">Delivery Information</p>
        <div className="flex gap-[10px]">
          <input
            type="text"
            placeholder="First name"
            className="p-[13px] rounded-[5px] border-2 "
            required
          />
          <input
            type="text"
            placeholder="Last name"
            className="p-[13px] rounded-[5px] border-2 "
            required
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          className="p-[13px] rounded-[5px] border-2 "
          required
        />
        <input
          type="text"
          placeholder="Street"
          className="p-[13px] rounded-[5px] border-2 "
          required
        />
        <div className="flex gap-[10px]">
          <input
            type="text"
            placeholder="city"
            className="p-[13px] rounded-[5px] border-2 "
            required
          />
          <input
            type="text"
            placeholder="state"
            className="p-[13px] rounded-[5px] border-2 "
            required
          />
        </div>
        <div className="flex gap-[10px]">
          <input
            type="text"
            placeholder="Zipcode"
            className="p-[13px] rounded-[5px] border-2 "
            required
          />
          <input
            type="text"
            placeholder="Country"
            className="p-[13px] rounded-[5px] border-2 "
            required
          />
        </div>
        <input
          type="text"
          placeholder="phone no."
          className="p-[13px] rounded-[5px] border-2 "
          required
        />
      </div>
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
        <button className="bg-[tomato] mt-[10px] py-[12px] font-[500] w-[max(15vw,200px)] cursor-pointer text-white border-none rounded-[4px]">
          PROCEED TO PAYMENT
        </button>
      </div>
    </form>
  );
}

export default Placeorder;
