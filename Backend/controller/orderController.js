import orderModel from "../models/orderModel.js";
import UserModel from "../models/userModel.js";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:5174";

  try {
    // Validate required fields
    if (!req.body.address) {
      return res
        .status(400)
        .json({ success: false, message: "Address is required" });
    }

    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    await newOrder.save();

    // Clear user's cart
    await UserModel.findByIdAndUpdate(req.body.userId, { cartdata: {} });

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100, // Stripe expects the amount in cents
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "usd",
        product_data: { name: "Delivery Charges" },
        unit_amount: 5 * 100, // Assuming delivery charges in dollars
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "An error occurred" });
  }
};

const verifyOrder = async (req, res) => {
  const { ordeId, success } = req.body;
  try {
    if (success == "true") {
      await orderModel.findByIdAndUpdate(ordeId, { payment: true });
      res.json({ success: true, message: "Paid" });
    } else {
      await orderModel.findByIdAndUpdate(ordeId);
      res.json({ success: false, message: "Not Paid" });
    }
  } catch (error) {
    console.log(error);
    res.json({ message: false, message: "Error" });
  }
};

const userOders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//listing orders for admin pannel
const listOrder = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//updating status
const updatestatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    res.json({ success: true, message: "Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { placeOrder, verifyOrder, userOders, listOrder, updatestatus };

// const placeOrder = async (req, res) => {
//   const frontend_url = "http://localhost:5173";
//   try {
//     const newOrder = new orderModel({
//       userId: req.body.userId,
//       items: req.body.items,
//       amount: req.body.amount,
//       address: req.body.address,
//     });
//     await newOrder.save();
//     await UserModel.findByIdAndUpdate(req.body.userId, { cartdata: {} });
//     const line_items = req.body.items.map((item) => ({
//       price_data: {
//         currency: "usd",
//         product_data: {
//           name: item.name,
//         },
//         unit_amount: item.price,
//       },
//       quantity: item.quantity,
//     }));
//     line_items.push({
//       price_data: {
//         currency: "usd",
//         product_data: { name: "Delivery Charges" },
//         unit_amount: 2 * 110,
//       },
//       quantity: 1,
//     });
//     const session = await stripe.checkout.sessions.create({
//       line_items: line_items,
//       mode: "payment",
//       success_url: `${frontend_url}/verify?success:true&orderId=${newOrder._id}`,
//       cancel_url: `${frontend_url}/verify?success:false&orderId=${newOrder._id}`,
//     });
//     res.json({ success: true, session_url: session.url });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };
