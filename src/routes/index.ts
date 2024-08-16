import express from "express"
import {propertyRouter} from "./property"
import {userRouter} from "./user";
import {userAuthRouter} from "./user/auth";

export const appRouter = express.Router()

appRouter.use(userAuthRouter)

appRouter.use('/properties', propertyRouter)
appRouter.use('/users', userRouter)