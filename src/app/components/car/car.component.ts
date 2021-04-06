import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {
    
    cars: Car[] = [];
    dataLoaded =false;
    currentCar:Car;
    carImage:CarImage[];
    imageURL = environment.baseUrl;
  
  constructor(private carService:CarService ,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute) {}
    //PRİVATE tanımlıyoruz sadece bu "class" ta geçerli oluyor.
    //.net te constructordaki private değişkene sınıftan erişilemez ama ts'de erişilebilir.
    //http client nesnesi oluşturulmalıdır.
  //constructorda sadece dependency injection veya instance oluşturma işlemi yapılmalıdır sadece.

  ngOnInit(): void {//component ilk açılışta açılan metod
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"])
      {
        this.getCarsByColorId(params["colorId"])
      }
      else if(params["brandId"]){
        
        this.getCarsByBrandId(params["brandId"])
      }
      else
      {
        this.getCars();
      } 
    })
  }
  
  setCurrentCar(car:Car)
  {
    this.currentCar=car;
  }
  getCars() {
      this.carService.getCars().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }
  getCarsByBrandId(id:number) {
      this.carService.getCarsByBrandId(id).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }
  getCarsByColorId(id:number) {
    this.carService.getCarsByColorId(id).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }
  getCarImagesByCarId(id:number){
    this.carImageService.getCarImagesByCarId(id).subscribe(response =>
      {
        this.carImage=response.data;
      })
  
  }
}
