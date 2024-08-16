import express from "express";
import {create} from "../../controllers/userController";

export const userRouter = express.Router();

userRouter.post("/", create)
