import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//API'ye bağlanabilmek için kullanılır.
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { Color } from '../models/color';

@Injectable({ //injectable annotations var dolayısıyla service olduğunu buradan anlarız.
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44372/api/";
  constructor(private httpClient: HttpClient) {}
  
  getCars():Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl+"cars/getrentcardetails";
    return this.httpClient.get<ListResponseModel<Car>>(newPath)  
  }
  getCarsByBrandId(id:number):Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl+"cars/getrentcardetailsbybrandid?brandId="+id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath)  
  }
  getCarsByColorId(id:number):Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl+"cars/getrentcardetailsbycolorid?colorId="+id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath)  
  }
  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl+"brands/getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath)
  }
  getColors():Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl+"colors/getall";
    return this.httpClient.get<ListResponseModel<Color>>(newPath)
  }
}
