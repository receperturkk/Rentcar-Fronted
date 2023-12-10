import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  car: Car;
  dataLoaded = false;
  baseUrl = 'https://localhost:44322/Uploads/Images/';
  images:string[];
  currentImage :string = 'DefaultCarImage.png';

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((p) => {
      if (p['carId']){
        this.getCarDetailsByCarId(p['carId']);
      }
    });
  }

  getCarDetailsByCarId(carId: number) {
    this.carService.getCarDetailsByCarId(carId).subscribe((res) => {
      this.car = res.data[0];
      this.dataLoaded = true;
      this.images = this.car.imagePath
      if(this.images != null){
        this.currentImage=this.images[0].toString();
      }
    });
  }

  setCurrentImage(image:string){
    this.currentImage = image
  }
}
