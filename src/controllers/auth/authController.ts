import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import {addNewUser, findUserByEmail} from "../../models/userModel";
import {IUser} from "../../types/user";
import bcrypt from "bcrypt";

export const login = async (req: Request, res: Response) => {

    const {email, password} = req.body;

    const existingUser: any = await findUserByEmail(email)

    if (!existingUser) {
        return res.status(404).send("User not found")
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.password)

    if (!passwordMatch) {
        return res.status(401).send("Unauthorized")
    }

    const token = jwt.sign(
        {id: existingUser._id},
        process.env.APP_SECRET_KEY as string,
        {
            expiresIn: process.env.APP_SECRET_EXPIRES as string
        }
    )

    return res.status(200)
        .cookie('app-token', token)
        .json({
            status: 'success',
            message: 'User logged in successfully.',
        })
}

export const register = async (req: Request, res: Response) => {

    try {
        const newUser = await addNewUser(req.body as IUser, true)

        const token = jwt.sign(
            {id: newUser._id},
            process.env.APP_SECRET_KEY as string,
            {
                expiresIn: process.env.APP_SECRET_EXPIRES as string,
            }
        )

        res.status(200)
            .cookie("app-token", token)
            .json({
                status: 'success',
                message: 'User registered successfully.',
            })

    } catch (error: any) {
        res.status(400).send({error: error.message})
    }
}

export const forgotPassword = async (req: Request, res: Response) => {

}

export const logout = async (req: Request, res: Response) => {

}
