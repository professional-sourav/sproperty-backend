export type IProperty = {
    id: string;
    name: string;
    type: string;
    owner?: string,
    address?: string;
    amenities?: string[];
    createdAt?: Date;
    updatedAt?: Date;
}