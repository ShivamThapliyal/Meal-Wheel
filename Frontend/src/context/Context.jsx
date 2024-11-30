import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets/frontend_assets/assets";

export const Context = createContext();

const ContextProvider = (props) => {
  const [carditem, setcarditem] = useState({});
  var count = Object.keys(carditem).length;

  useEffect(() => {
    console.log("Number of items in the cart:", Object.keys(carditem).length);
    console.log("Cart details:", carditem);
  }, [carditem]);

  const addtocart = (itemid) => {
    if (!carditem[itemid]) {
      setcarditem((prev) => ({ ...prev, [itemid]: 1 }));
    } else {
      setcarditem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    }
  };
  const removefromcart = (itemid) => {
    setcarditem((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemid] > 1) {
        updatedCart[itemid] -= 1; // Decrease count
      } else {
        delete updatedCart[itemid]; // Remove item completely
      }
      return updatedCart;
    });
  };
  useEffect(() => {
    console.log(carditem);
  }, [carditem]);

  const gettotal = () => {
    let Total = 0;
    for (const item in carditem) {
      if (carditem[item] > 0) {
        let ItemInfo = food_list.find((product) => product._id === item);
        Total += ItemInfo.price * carditem[item];
      }
    }
    return Total;
  };

  const contextvalue = {
    gettotal,
    count,
    food_list,
    carditem,
    setcarditem,
    addtocart,
    removefromcart,
  };
  return (
    <Context.Provider value={contextvalue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
