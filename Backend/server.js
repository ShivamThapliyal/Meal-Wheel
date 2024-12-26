import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import foodrouter from "./routes/foodrouter.js";
import UserRoute from "./routes/userRoute.js";
import "dotenv/config";
import cartRoute from "./routes/cartRoute.js";
import orderRouter from "./routes/orderroutes.js";

// App configuration
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST"],
  })
);

// MongoDB connection
connectDb();

// Routes
app.use("/api/food", foodrouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", UserRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRouter);

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
