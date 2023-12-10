import { DefaultValueAccessor } from "@angular/forms";

export interface Car{
    id:number;
    carName:string;
    brandName:string;
    colorName:string;
    modelYear:number;
    dailyPrice:number;
    description:string;
    imagePath:string[] ;
}
