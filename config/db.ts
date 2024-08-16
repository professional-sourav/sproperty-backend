import mongoose from "mongoose";

export const dbConnect = async() => {

    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING as string);
    } catch (error) {
        console.log(error);
    }
}