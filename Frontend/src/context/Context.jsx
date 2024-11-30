import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets/frontend_assets/assets";

export const Context = createContext();

const ContextProvider = (props) => {
  const [carditem, setcarditem] = useState({});
  const addtocart = (itemid) => {
    if (!carditem[itemid]) {
      setcarditem((prev) => ({ ...prev, [itemid]: 1 }));
    } else {
      setcarditem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    }
  };
  const removefromcart = (itemid) => {
    setcarditem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };
  useEffect(() => {
    console.log(carditem);
  }, [carditem]);

  const contextvalue = {
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
