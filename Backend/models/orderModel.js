import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  amount: { type: Number, required: true },
  address: { type: String, required: true },
  status: { type: String, default: "Food Procesing" },
  date: { type: Date, default: Date.now() },
  payment: { type: Boolean, default: false },
});

const orderModel =
  mongoose.model.orders || mongoose.model("orders", orderSchema);
export default orderModel;
