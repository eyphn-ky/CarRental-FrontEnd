import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//API'ye bağlanabilmek için kullanılır.
import { CarResponseModel } from '../models/carResponseModel';
import { Observable } from 'rxjs';

@Injectable({ //injectable annotations var dolayısıyla service olduğunu buradan anlarız.
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44372/api/cars/getrentcardetails";
  constructor(private httpClient: HttpClient) {}
  getCars():Observable<CarResponseModel> {
    return this.httpClient.get<CarResponseModel>(this.apiUrl)  
  }
}
