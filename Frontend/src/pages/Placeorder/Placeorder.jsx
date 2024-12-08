import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";

function PlaceOrder() {
  const { gettotal, token, food_list, carditem, url } = useContext(Context);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  // Handle input changes
  const onChangeHandle = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Place order handler
  const placeOrder = async (event) => {
    event.preventDefault();

    // Combine address fields into one
    const fullAddress = `${data.firstname},${data.lastname},${data.street}, ${data.city}, ${data.state}, ${data.zipcode}, ${data.country}`;
    const orderItems = food_list
      .filter((item) => carditem[item._id] > 0)
      .map((item) => ({
        ...item,
        quantity: carditem[item._id],
      }));

    // Prepare order data
    const orderData = {
      address: fullAddress,
      items: orderItems,
      amount: gettotal() + 5, // Total + delivery fee
    };

    try {
      const response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token },
      });

      if (response.data.success) {
        window.location.replace(response.data.session_url); // Redirect to Stripe session
      } else {
        alert("Error placing order. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while placing your order.");
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (gettotal() === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <form
      onSubmit={placeOrder}
      className="flex flex-col items-center justify-center gap-6 sm:flex-row"
    >
      {/* Delivery Information */}
      <div className="flex flex-col w-full gap-4 p-4 sm:w-1/2">
        <h2 className="mb-4 text-2xl font-bold">Delivery Information</h2>
        <div className="flex gap-4">
          <input
            required
            name="firstname"
            value={data.firstname}
            onChange={onChangeHandle}
            type="text"
            placeholder="First name"
            className="p-3 border rounded"
          />
          <input
            required
            name="lastname"
            value={data.lastname}
            onChange={onChangeHandle}
            type="text"
            placeholder="Last name"
            className="p-3 border rounded"
          />
        </div>
        <input
          required
          name="email"
          value={data.email}
          onChange={onChangeHandle}
          type="email"
          placeholder="Email"
          className="p-3 border rounded"
        />
        <input
          required
          name="street"
          value={data.street}
          onChange={onChangeHandle}
          type="text"
          placeholder="Street"
          className="p-3 border rounded"
        />
        <div className="flex gap-4">
          <input
            required
            name="city"
            value={data.city}
            onChange={onChangeHandle}
            type="text"
            placeholder="City"
            className="p-3 border rounded"
          />
          <input
            required
            name="state"
            value={data.state}
            onChange={onChangeHandle}
            type="text"
            placeholder="State"
            className="p-3 border rounded"
          />
        </div>
        <div className="flex gap-4">
          <input
            required
            name="zipcode"
            value={data.zipcode}
            onChange={onChangeHandle}
            type="text"
            placeholder="Zipcode"
            className="p-3 border rounded"
          />
          <input
            required
            name="country"
            value={data.country}
            onChange={onChangeHandle}
            type="text"
            placeholder="Country"
            className="p-3 border rounded"
          />
        </div>
        <input
          required
          name="phone"
          value={data.phone}
          onChange={onChangeHandle}
          type="text"
          placeholder="Phone number"
          className="p-3 border rounded"
        />
      </div>

      {/* Cart Summary */}
      <div className="flex flex-col w-full gap-4 p-6 border rounded sm:w-1/2">
        <h2 className="mb-4 text-2xl font-bold">Cart Total</h2>
        <div className="flex justify-between text-gray-700">
          <span>Subtotal</span>
          <span>${gettotal()}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Delivery Fee</span>
          <span>$5</span>
        </div>
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>${gettotal() + 5}</span>
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-4 text-white bg-red-500 rounded"
        >
          Proceed to Payment
        </button>
      </div>
    </form>
  );
}

export default PlaceOrder;

// import React, { useContext, useState } from "react";
// import { Context } from "../../context/Context";
// import axios from "axios";

// function Placeorder() {
//   const { gettotal, token, food_list, carditem, url } = useContext(Context);
//   const [data, setdata] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     street: "",
//     city: "",
//     state: "",
//     zipcode: "",
//     country: "",
//     phone: "",
//   });
//   const OnChangehandle = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setdata((data) => ({ ...data, [name]: value }));
//   };
//   const placeOrder = async (event) => {
//     event.preventDefault();
//     let orderitems = [];
//     food_list.map((item) => {
//       if (carditem[item._id] > 0) {
//         let itemInfo = { ...item, quantity: carditem[item._id] };
//         itemInfo["quantity"] = carditem[item._id];
//         orderitems.push(itemInfo);
//       }
//     });
//     let orderData = {
//       address: data.address,
//       items: orderitems,
//       amount: gettotal() + 2,
//     };
//     let response = await axios.post(url + "/api/order/place", orderData, {
//       headers: { token },
//     });
//     if (response.data.success) {
//       const { session_url } = response.data;
//       window.location.replace(session_url);
//     } else {
//       alert("Error");
//     }
//   };
//   return (
//     <form
//       onSubmit={placeOrder}
//       className="flex flex-col sm:flex sm:flex-row items-center justify-center gap-[20px]"
//     >
//       <div className="flex flex-col p-[10px] gap-[10px]">
//         <p className="text-2xl mb-[20px] font-[500]">Delivery Information</p>
//         <div className="flex gap-[10px]">
//           <input
//             required
//             name="firstname"
//             value={data.firstname}
//             onChange={OnChangehandle}
//             type="text"
//             placeholder="First name"
//             className="p-[13px] rounded-[5px] border-2 "
//           />
//           <input
//             required
//             name="lastname"
//             value={data.lastname}
//             onChange={OnChangehandle}
//             type="text"
//             placeholder="Last name"
//             className="p-[13px] rounded-[5px] border-2 "
//           />
//         </div>
//         <input
//           required
//           name="email"
//           value={data.email}
//           onChange={OnChangehandle}
//           type="text"
//           placeholder="Email"
//           className="p-[13px] rounded-[5px] border-2 "
//         />
//         <input
//           required
//           name="street"
//           value={data.street}
//           onChange={OnChangehandle}
//           type="text"
//           placeholder="Street"
//           className="p-[13px] rounded-[5px] border-2 "
//         />
//         <div className="flex gap-[10px]">
//           <input
//             required
//             name="city"
//             value={data.city}
//             onChange={OnChangehandle}
//             type="text"
//             placeholder="city"
//             className="p-[13px] rounded-[5px] border-2 "
//           />
//           <input
//             required
//             name="state"
//             value={data.state}
//             onChange={OnChangehandle}
//             type="text"
//             placeholder="state"
//             className="p-[13px] rounded-[5px] border-2 "
//           />
//         </div>
//         <div className="flex gap-[10px]">
//           <input
//             required
//             name="zipcode"
//             value={data.zipcode}
//             onChange={OnChangehandle}
//             type="text"
//             placeholder="Zipcode"
//             className="p-[13px] rounded-[5px] border-2 "
//           />
//           <input
//             required
//             name="country"
//             value={data.country}
//             onChange={OnChangehandle}
//             type="text"
//             placeholder="Country"
//             className="p-[13px] rounded-[5px] border-2 "
//           />
//         </div>
//         <input
//           required
//           name="phone"
//           value={data.phone}
//           onChange={OnChangehandle}
//           type="text"
//           placeholder="phone no."
//           className="p-[13px] rounded-[5px] border-2 "
//         />
//       </div>
//       <div className="flex-1 flex-col p-[20px]  items-start gap-[15px] border-2">
//         <h1 className="text-2xl font-[900] pb-[20px]">Cart Total</h1>
//         <div className="flex flex-col ">
//           <div className="flex justify-between text-[#555] p-[10px]">
//             <p>Subtotal</p>
//             <p>${gettotal()}</p>
//           </div>
//           <hr />
//           <div className="flex justify-between text-[#555] p-[10px]">
//             <p>Delivery Fee</p>
//             <p>${5}</p>
//           </div>
//           <hr />
//           <div className="flex justify-between text-[#555] p-[10px]">
//             <p>Total</p>
//             <p>{gettotal() + 5}</p>
//           </div>
//           <hr />
//         </div>
//         <button
//           type="submit"
//           className="bg-[tomato] mt-[10px] py-[12px] font-[500] w-[max(15vw,200px)] cursor-pointer text-white border-none rounded-[4px]"
//         >
//           PROCEED TO PAYMENT
//         </button>
//       </div>
//     </form>
//   );
// }

// export default Placeorder;
