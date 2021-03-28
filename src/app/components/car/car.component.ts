import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

import { CarResponseModel } from 'src/app/models/carResponseModel';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {
    
    cars: Car[] = [];
    dataLoaded =false;
   
  
  constructor(private carService:CarService) {}
    //PRİVATE tanımlıyoruz sadece bu "class" ta geçerli oluyor.
    //.net te constructordaki private değişkene sınıftan erişilemez ama ts'de erişilebilir.
    //http client nesnesi oluşturulmalıdır.
  //constructorda sadece dependency injection veya instance oluşturma işlemi yapılmalıdır sadece.

  ngOnInit(): void {//component ilk açılışta açılan metod
    this.getCars();
  }
  getCars() {
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }
}
