import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
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
    brands:Brand[]=[];
    colors:Color[]=[];
    imageUrl=environment.baseUrl;
    currentBrand:Brand;
    dataLoaded =false;
    currentCar:Car;
    imageURL = environment.baseUrl;
    filterText="";
    currentFilterBrand:string;
    currentFilterColor:string;
  
  constructor(private carService:CarService ,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute) {}
    //PRİVATE tanımlıyoruz sadece bu "class" ta geçerli oluyor.
    //.net te constructordaki private değişkene sınıftan erişilemez ama ts'de erişilebilir.
    //http client nesnesi oluşturulmalıdır.
  //constructorda sadece dependency injection veya instance oluşturma işlemi yapılmalıdır sadece.

  ngOnInit(): void {//component ilk açılışta açılan metod
    this.getBrands();
    this.getColors();
    
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"])
      {
        this.getCarsByColorId(params["colorId"]);     
      }
      else if(params["brandId"]){        
        this.getCarsByBrandId(params["brandId"]);        
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
  setCurrentBrand(brand:Brand)
  {
      this.currentBrand=brand;
  }
  getCars() {
      this.carService.getCars().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }
  getFilteredCars(){
    this.carService.getCars()
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
  getBrands(){
      this.carService.getBrands().subscribe(response=>{
      this.brands=response.data;
    })
  }
  getColors(){
      this.carService.getColors().subscribe(response=>{
      this.colors=response.data;
    })
  }
 
  
}
