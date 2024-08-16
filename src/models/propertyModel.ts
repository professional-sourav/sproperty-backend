import {propertyModel} from "./schemas/propertySchema";
import {IProperty} from "../types/property";

export const getAllProperties = async() => {

    const properties = await propertyModel.find({})

    return properties.map((property: any) => {
        const props = property.toObject();
        
        delete props._id;
        delete props.__v;
        return props;
    })
}

export const addNewProperty = async(property: IProperty): Promise<IProperty> => {

    const newProperty = await propertyModel.create(property)

    return {
        name: newProperty.name
    } as IProperty
}
