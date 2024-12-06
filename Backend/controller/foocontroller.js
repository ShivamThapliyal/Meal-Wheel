import foodModel from "../models/foodModel.js";
import fs from "fs";

// Add food
const addfood = async (req, res) => {
  try {
    const image_filename = req.file?.filename || "default_image.jpg";
    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename,
    });
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.error("Error saving food:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// List food
const ListFood = async (req, res) => {
  try {
    const food = await foodModel.find({});
    res.json({ success: true, data: food });
  } catch (error) {
    console.error("Error fetching food:", error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

// Remove food
const RemoveFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    if (food) {
      const filePath = `uploads/${food.image}`;
      fs.unlink(filePath, (err) => {
        if (err) console.error("Error deleting the image:", err);
        else console.log("Image deleted successfully");
      });
      await foodModel.findByIdAndDelete(req.body.id);
      res.json({ success: true, message: "Food Deleted" });
    } else {
      res.status(404).json({ success: false, message: "Food Not Found" });
    }
  } catch (error) {
    console.error("Error deleting food:", error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

export { addfood, ListFood, RemoveFood };

// import foodModel from "../models/foodModel.js";
// import fs from "fs";

// //Adding Food to database.
// const addfood = async (req, res) => {
//   let image_filename = req.file.filename;
//   console.log("Request body:", req.body);

//   const food = new foodModel({
//     name: req.body.name,
//     description: req.body.description,
//     price: req.body.price,
//     category: req.body.category,
//     image: image_filename,
//   });
//   try {
//     await food.save();
//     res.json({ success: true, message: "Food Added" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error in Adding Food" });
//   }
// };

// //listing food to the databae

// const ListFood = async (req, res) => {
//   try {
//     const food = await foodModel.find({});
//     res.json({ success: true, data: food });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// //removing food
// const RemoveFood = async (req, res) => {
//   try {
//     const food = await foodModel.findById(req.body.id);
//     fs.unlink(`uploads/${food.image}`, (err) => {
//       if (err) {
//         console.error("Error deleting the image:", err);
//       } else {
//         console.log("Image deleted successfully");
//       }
//     });
//     await foodModel.findByIdAndDelete(req.body.id);
//     res.json({ success: true, message: "Delete" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// export { addfood, ListFood, RemoveFood };
