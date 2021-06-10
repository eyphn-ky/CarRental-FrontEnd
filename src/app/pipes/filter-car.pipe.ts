import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'filterCar'
})
export class FilterCarPipe implements PipeTransform {

  transform(value: Car[], filterText:string) {
    filterText= filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Car)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }
  

}
