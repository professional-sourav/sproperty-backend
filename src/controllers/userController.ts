import { Request, Response } from 'express';
import {addNewUser} from "../models/userModel";
import {IUser} from "../types/user";

export const create = async (req: Request, res: Response) => {

    const newUser = await addNewUser(req.body as IUser);

    res.status(201).json(newUser);
}
