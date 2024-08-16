import * as mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
    name: String,
    type: String,
})

export const propertyModel = mongoose.model('Property', propertySchema)
