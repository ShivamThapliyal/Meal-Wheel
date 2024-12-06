import mongoose from "mongoose";
import bycrpt from "bcrypt";
import validator from "validator";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: { type: String, required: true },
    cartdata: { type: Object, default: {} },
  },
  { minimize: false }
);

const UserModel = mongoose.model.user || mongoose.model("User", UserSchema);
export default UserModel;
