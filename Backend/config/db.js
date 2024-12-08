import mongoose from "mongoose";

export async function connectDb() {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DataBase Connected"))
    .catch((err) => console.log("error in connection", err));
}
