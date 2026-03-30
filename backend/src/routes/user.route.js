import express from "express";
import { checkUser, getUser } from "../controllers/user.controller.js";
import { requireAuth } from "@clerk/express";

const userRoutes = express.Router();

userRoutes.get("/protected", requireAuth(), getUser);
userRoutes.post("/", requireAuth(), checkUser);

export default userRoutes;
