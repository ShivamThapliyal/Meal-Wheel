import express from "express";
import authMiddleware from "../middleware/auth.js";
import {
  listOrder,
  placeOrder,
  updatestatus,
  userOders,
  verifyOrder,
} from "../controller/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authMiddleware, userOders);
orderRouter.get("/list", listOrder);
orderRouter.post("/status", updatestatus);

export default orderRouter;
