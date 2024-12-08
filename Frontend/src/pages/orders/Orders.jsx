import React, { useContext, useEffect, useState } from "react";
import "./orders.css";
import { Context } from "../../context/Context";
import axios from "axios";
import { assets } from "../../assets/assets/frontend_assets/assets";

function Orders() {
  const { url, token } = useContext(Context);
  const [data, setData] = useState([]);
  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      {
        headers: { token },
      }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);
  return (
    <div className="myorders">
      <h2 className="text-2xl font-[600] tracking-widest">My Orders</h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} className="myordersorder">
              <img src={assets.parcel_icon} alt="" className="w-[50px]" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + "X" + item.quantity;
                  } else {
                    return item.name + "X" + item.quantity + ", ";
                  }
                })}
              </p>
              <p>${order.amount}.00</p>
              <p>Items:{order.items.length}</p>
              <p>
                <span className="text-[tomato]">&#x25cf;</span>
                <b className="font-[600] text-[#454545]">{order.status}</b>
              </p>
              <button className="border-none p-[12px_0px] rounded-[5px] bg-[#ffe1e1] cursor-pointer text-[#454545]">
                Track Order
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Orders;
