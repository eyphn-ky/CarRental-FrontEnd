import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {
  carImages:CarImage[];
  imageUrl=environment.baseUrl;
  constructor(private carImageService:CarImageService,
   private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"])
      {
        this.getCarImagesByCarId(params["carId"]);
      }
    })
  }
  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
    this.carImages=response.data 
    console.log(this.carImages[1].imagePath);
    })
  }  
  
  
  

}
