import express from "express";
import {login, register} from "../../../controllers/auth/authController";

export const userAuthRouter = express.Router();

userAuthRouter.post("/register", register)
userAuthRouter.post("/login", login)
