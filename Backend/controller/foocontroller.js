import foodModel from "../models/foodModel.js";
import fs from "fs";

//Adding Food to database.
const addfood = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  console.log("Request body:", req.body);

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in Adding Food" });
  }
};

//listing food to the databae

const ListFood = async (req, res) => {
  try {
    const food = await foodModel.find({});
    res.json({ success: true, data: food });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//removing food
const RemoveFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, (err) => {
      if (err) {
        console.error("Error deleting the image:", err);
      } else {
        console.log("Image deleted successfully");
      }
    });
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Delete" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addfood, ListFood, RemoveFood };
