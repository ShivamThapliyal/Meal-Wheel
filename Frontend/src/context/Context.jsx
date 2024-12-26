import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets/frontend_assets/assets";

export const Context = createContext();

const ContextProvider = (props) => {
  const [carditem, setcarditem] = useState({});
  var count = Object.keys(carditem).length;
  const url = "https://meal-wheel-backend.onrender.com";
  const [token, settoken] = useState("");
  const [food_list, setfood_list] = useState([]);

  // useEffect(() => {
  //   console.log("Number of items in the cart:", Object.keys(carditem).length);
  //   console.log("Cart details:", carditem);
  // }, [carditem]);

  const addtocart = async (itemid) => {
    if (!carditem[itemid]) {
      setcarditem((prev) => ({ ...prev, [itemid]: 1 }));
    } else {
      setcarditem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    }
    console.log("Adding to cart, itemid:", itemid);
    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemid },
        { headers: { token } }
      );
    }
  };
  const removefromcart = async (itemid) => {
    setcarditem((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemid] > 1) {
        updatedCart[itemid] -= 1; // Decrease count
      } else {
        delete updatedCart[itemid]; // Remove item completely
      }
      return updatedCart;
    });
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemid },
        { headers: { token } }
      );
    }
  };

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
  const fetchfood = async () => {
    const response = await axios.get(url + "/api/food/listfood");
    setfood_list(response.data.data);
  };

  const loadCardData = async (token) => {
    const response = await axios.get(url + "/api/cart/get", {
      headers: { token },
    });
    setcarditem(response.data.cartdata);
  };
  useEffect(() => {
    async function loadData() {
      await fetchfood();
      if (localStorage.getItem("token")) {
        settoken(localStorage.getItem("token"));
        await loadCardData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const contextvalue = {
    token,
    settoken,
    url,
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
