import express from "express";
import {
  addToCart,
  removeFromCart,
  getCart,
} from "../controller/cartController.js";

const cartRoute = express.Router();

cartRoute.post("/add", addToCart);
cartRoute.post("/remove", removeFromCart);
cartRoute.get("/get", getCart);

export default cartRoute;
