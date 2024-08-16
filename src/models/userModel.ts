import {IUser} from "../types/user";
import {userModel} from "./schemas/userSchema";
import bcrypt from "bcrypt";

export const addNewUser = async (params: IUser, withId?: boolean) => {

    params.password = await bcrypt.hash(params.password, 10);

    const newUser = await userModel.create(params)

    const userObject: any = newUser.toObject()

    withId && delete userObject._id
    delete userObject.__v

    return userObject;
}

export const findUserByEmail = async (email: string) => {

    const user = userModel.findOne({
        email
    })

    return user;
}
