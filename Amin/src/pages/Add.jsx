import React, { useState } from "react";
import { assets } from "../assets/admin_assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

function Add() {
  //   const url = "http://localhost:4000/ap";
  const [image, setimage] = useState(false);
  const [data, setdata] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandel = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata((data) => ({ ...data, [name]: value }));
  };
  const onsubmitHandler = async (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("description", data.description);
    formdata.append("price", Number(data.price));
    formdata.append("category", data.category);
    formdata.append("image", image);
    const response = await axios.post(
      "http://localhost:4000/api/food/add",
      formdata
    );
    if (response.data.success) {
      setdata({
        name: "",
        description:
          "Food provides essential nutrients for overall health and well-being",
        price: "",
        category: "Salad",
      });
      setimage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };
  console.log(image);

  return (
    <div className=" flex justify-center pt-[20px] w-[70%] ml-[max(5vw,25px)] mt-[60px] text-[#6d6d6d] text-[18px] ">
      <form className="flex flex-col gap-[20px]" onSubmit={onsubmitHandler}>
        <div className="flex flex-col gap-[10px]">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
              className="w-[120px]"
            />
          </label>
          <input
            onChange={(e) => setimage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <p>Product Name</p>
          <input
            value={data.name}
            onChange={onChangeHandel}
            type="text"
            name="name"
            placeholder="Type here"
            className="p-[10px] bg-[#a7adb2b0] rounded-[5px] border-black border-[2px]"
            required
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <p>Product Description</p>
          <textarea
            value={data.description}
            onChange={onChangeHandel}
            name="description"
            rows="6"
            placeholder="Write content here"
            className="p-[10px] bg-[#a7adb2b0] w-[70%] rounded-[5px] border-black border-[2px]"
            required
          ></textarea>
        </div>
        <div className="flex gap-[30px] items-center">
          <div className="flex flex-col gap-[10px]">
            <p className="text-[20px]">Product Category</p>
            <select
              onChange={onChangeHandel}
              name="category"
              className="p-[15px_0px] text-center text-black font-[700] border-black border-[2px] rounded-[5px]"
              required
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure veg">Pure veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodels">Noodels</option>
            </select>
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="text-[20px]">Product Price</p>
            <input
              value={data.price}
              onChange={onChangeHandel}
              type="number"
              name="price"
              placeholder="$"
              className="p-[5px] w-[100px] text-black font-[700] border-black border-[2px]"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-600 rounded-[10px] p-[10px_8px] w-[60px] "
        >
          ADD
        </button>
      </form>
    </div>
  );
}

export default Add;
