import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'filterWithBrandColor'
})
export class FilterWithBrandColorPipe implements PipeTransform {

  transform(value:Car[] ,brandName:string,colorName:string){
    return brandName?value.filter((p:Car)=>p.brandName.indexOf(brandName)!==-1):value;
  }
}