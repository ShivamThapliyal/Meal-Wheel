import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function List() {
  const url = "http://localhost:4000";
  const [list, setlist] = useState([]);

  const fetch = async () => {
    const response = await axios.get(`${url}/api/food/listfood`);
    console.log(response.data);
    if (response.data.success) {
      setlist(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };
  const remove = async (foodid) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodid });
    await fetch();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="flex flex-col gap-[20px] pl-[50px] pt-[80px]">
      <p>All Food List</p>
      <div>
        <div className="grid grid-cols-[1fr_5fr_2fr_2fr_0.5fr] items-center gap-[10px] p-[12px_15px] border-solid border-[2px] border-[#cacaca] text-[20px] ">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className="grid border-[2px] border-solid border-[#b0b0b0] grid-cols-[1fr_5fr_2fr_2fr_0.5fr] items-center text-[18px] p-[10px_15px] gap-[20px] mt-[20px] bg-[#e9e9e9]"
            >
              <img
                src={`${url}/images/` + item.image}
                alt=""
                className="w-[80px]"
              />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() => remove(item._id)} className="cursor-pointer">
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
