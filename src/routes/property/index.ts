import express from "express";
import {allProperties, createNewProperty, deleteProperty, updateProperty} from "../../controllers/propertyController";

export const propertyRouter = express.Router();

propertyRouter.get('/', allProperties)
propertyRouter.post('/', createNewProperty)
propertyRouter.put('/:id', updateProperty)
propertyRouter.delete('/:id', deleteProperty)
