import express from "express";
import multer from "multer";
import { addfood, ListFood, RemoveFood } from "../controller/foocontroller.js";

const foodrouter = express.Router();

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB size limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.mimetype)) {
      cb(new Error("Only JPEG and PNG files are allowed"));
    } else {
      cb(null, true);
    }
  },
});

// Food routes
foodrouter.post("/add", upload.single("image"), addfood);
foodrouter.get("/listfood", ListFood);
foodrouter.post("/remove", RemoveFood);

export default foodrouter;

// it also work
// import express from "express";
// import multer from "multer";
// import { addfood, ListFood, RemoveFood } from "../controller/foocontroller.js";

// const foodrouter = express.Router();

// const storage = multer.diskStorage({
//   destination: "uploads",
//   filename: (req, file, cb) => {
//     return cb(null, `${Date.now()}${file.originalname}`);
//   },
// });
// const upload = multer({ storage: storage });

// foodrouter.post("/add", upload.single("image"), addfood);
// foodrouter.get("/listfood", ListFood);
// foodrouter.post("/remove", RemoveFood);

// export default foodrouter;
