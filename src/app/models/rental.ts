export interface Rental{
    id:number | null ;
    customerId:number; 
    carId:number;
    name:string;
    modelYear:string;
    companyName:string;
    firstName:string;
    lastName:string;
    rentDate:Date;
    returnDate:Date;
}