import UserModel from "../models/userModel.js";

//adding product
// const addToCart = async (req, res) => {
//   try {
//     console.log("Item ID received:", req.body.itemid);
//     let userData = await UserModel.findOne({ _id: req.body.userid });
//     let cartdata = await userData.cartdata;
//     // console.log(cartdata);
//     if (!cartdata[req.body.itemid]) {
//       cartdata[req.body.itemid] = 1;
//     } else {
//       cartdata[req.body.itemid] += 1;
//     }
//     await UserModel.findByIdAndUpdate(req.body.userid, { cartdata });
//     res.json({ success: true, message: "Added to cart" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };
const addToCart = async (req, res) => {
  try {
    // console.log("Item ID received:", req.body.itemid); // Debugging
    const userId = req.body.userId;
    const itemId = req.body.itemid; // Extract itemid
    if (!itemId) {
      return res.json({ success: false, message: "Item ID is required" });
    }

    let userData = await UserModel.findOne({ _id: userId });
    let cartdata = (await userData.cartdata) || {}; // Ensure cartdata exists
    if (!cartdata[itemId]) {
      cartdata[itemId] = 1;
    } else {
      cartdata[itemId] += 1;
    }
    await UserModel.findByIdAndUpdate(userId, { cartdata });
    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.json({ success: false, message: "Error adding to cart" });
  }
};

//removind product
const removeFromCart = async (req, res) => {
  const userId = req.body.userId;
  const itemId = req.body.itemid;
  try {
    let userData = await UserModel.findOne({ _id: userId });
    let cartdata = (await userData.cartdata) || {};

    if (cartdata[itemId]) {
      cartdata[itemId] -= 1;
      if (cartdata[itemId] <= 0) {
        delete cartdata[itemId];
      }
      await UserModel.findByIdAndUpdate(userId, { cartdata });
      res.json({ success: true, message: "Removed from cart" });
    } else {
      res.json({ success: false, message: "Item not in cart" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//getting product
const getCart = async (req, res) => {
  try {
    let userData = await UserModel.findOne({ _id: req.body.userId });
    res.json({ success: true, cartdata: userData.cartdata });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addToCart, removeFromCart, getCart };
