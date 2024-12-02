import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import foodrouter from "./routes/foodrouter.js";

//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//mongo connection
connectDb();

app.use("/api/food", foodrouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
