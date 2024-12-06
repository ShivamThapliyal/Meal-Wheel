import React from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import FoodItem from "./FoodItem";

function FoodDisplay({ category }) {
  const { food_list } = useContext(Context);

  return (
    <div className="mt-[30px]">
      <h1 className="text-[max(2vw,24px)] font-[500]">Top Dishes</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-[30px] gap-[30px] gap-x-[50px]">
        {food_list.map((item, index) => {
          if (category === "ALL" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
