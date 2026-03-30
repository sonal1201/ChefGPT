import express from "express";
import userRoutes from "./user.route.js";

const v1Routes = express.Router();

v1Routes.use("/user", userRoutes);

export default v1Routes;
