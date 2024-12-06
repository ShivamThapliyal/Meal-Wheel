import express from "express";
import { createUser, login } from "../controller/userController.js";

const UserRoute = express.Router();

UserRoute.post("/signup", createUser);
UserRoute.post("/login", login);

export default UserRoute;
