import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded = false;
  baseUrl = 'https://localhost:44322/Uploads/Images/';
  carFilterText = "";

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((p) => {
      if (p['brandId'] && p['colorId']) {
        this.getCarDetailByFilter(p['brandId'],p['colorId'])
      } else if (p['brandId']) {
        this.getCarDetailByBrandId(p['brandId']);
      } else if (p['colorId']) {
        this.getCarDetailByColorId(p['colorId']);
      } else {
        this.getCarDetails();
      }
    });
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe((res) => {
      this.cars = res.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailByBrandId(brandId: number) {
    this.carService.getCarDetailByBrandId(brandId).subscribe((res) => {
      this.cars = res.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailByColorId(colorId: number) {
    this.carService.getCarDetailByColorId(colorId).subscribe((res) => {
      this.cars = res.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailByFilter(brandId:number,colordId:number){
    this.carService.getCarDetailByFilter(brandId,colordId).subscribe((res) => {
      this.cars = res.data;
      this.dataLoaded = true;
    });
  }
}
