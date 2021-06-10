import { CarImage } from "./carImage";

export interface Car{ //export = public 
    id:number;
    name:string;
    brandName:string;
    colorName:string;
    modelYear:string;
    dailyPrice:number;
    description:string;
    carImages:CarImage[];
}