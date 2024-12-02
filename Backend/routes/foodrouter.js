import express from "express";
import multer from "multer";
import { addfood, ListFood, RemoveFood } from "../controller/foocontroller.js";

const foodrouter = express.Router();

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

foodrouter.post("/add", upload.single("image"), addfood);
foodrouter.get("/listfood", ListFood);
foodrouter.post("/remove", RemoveFood);

export default foodrouter;
