import { Request, Response } from "express"
import {getAllProperties, addNewProperty} from "../models/propertyModel";
import {IProperty} from "../types/property";

export const allProperties = async(req: Request, res: Response) => {

    const properties: Array<IProperty> = await getAllProperties()

    // console.log(properties)

    res.status(200).json(properties)
}

export const createNewProperty = async(req: Request, res: Response) => {

    const params: IProperty = req.body as IProperty

    await addNewProperty(params)

    res.send(params)
}

export const updateProperty = async(req: Request, res: Response) => {

    res.send("Update property")
}

export const deleteProperty = async(req: Request, res: Response) => {

    res.send("Deleting the property")
}
