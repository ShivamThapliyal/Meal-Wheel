import mongoose from "mongoose";

export async function connectDb() {
  await mongoose
    .connect(
      "mongodb+srv://shivamthapliyal571:shivam12345@cluster0.xhtje.mongodb.net/MeelWheel"
    )
    .then(() => console.log("DataBase Connected"))
    .catch((err) => console.log("error in connection", err));
}
