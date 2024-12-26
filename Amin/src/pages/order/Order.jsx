import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "./order.css";
import { assets } from "../../assets/admin_assets/assets";

function Order() {
  const url = "https://meal-wheel-backend.onrender.com";
  const [orders, setorders] = useState([]);
  const fetchallorders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setorders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.console.error("Error");
    }
  };
  console.log("orders", orders);
  useEffect(() => {
    fetchallorders();
  }, []);
  const statushandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchallorders();
    }
  };
  return (
    <div className="orderadd">
      <h3 className="text-2xl tracking-widest font-[600]">Order Page</h3>
      <div className="orderlist">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-food">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + "X" + item.quantity;
                  } else {
                    return item.name + "X" + item.quantity + ",";
                  }
                })}
              </p>
              <p className="order-item-food">
                {(() => {
                  const parts = order.address
                    .split(",")
                    .map((part) => part.trim());
                  const firstname = parts[0];
                  const lastname = parts[1];
                  const address = parts[2];
                  const city = parts[3];
                  return (
                    <>
                      {firstname} {lastname} <br /> {address} <br /> {city}
                    </>
                  );
                })()}
              </p>
            </div>
            <p className="order-item-food">Items:{order.items.length}</p>
            <p className="order-item-food">${order.amount}</p>
            <select
              onChange={(event) => statushandler(event, order._id)}
              value={order.status}
              className="bg-[#ffe8e4] bordr-[1px] w-[max(10vw,120px)] p-[10px] outline-none"
            >
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
