import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css'],
})
export class RentalAddComponent implements OnInit {
  carId: number = 1;
  carName = '';
  brandName = '';
  imagePath = '';
  colorName = '';
  modelYear: number = 0;
  dailyPrice: number = 0;
  description = '';
  baseUrl = 'https://localhost:44322/Uploads/Images/';
  rental: Rental;
  rentalAdd: Rental
  dataLoaded: boolean = false;
  newRentDate: Date
  date = new Date()
  dateNow = this.date.toISOString().slice(0, 19)
  day: number = 0
  price: number = this.dailyPrice * this.day
  addReturnDate = ""

  constructor(
    private activatedRoute: ActivatedRoute,
    private rentalService: RentalService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getRouteParams();
    this.getRentalById(this.carId);
    console.log(this.date)
    console.log((this.date = new Date(this.date.setDate(this.date.getDate() + 2))).toISOString())
    console.log(this.carId)
    this.addReturnDate = new Date(this.newRentDate.setDate(this.newRentDate.getDate() + this.day)).toISOString()
    console.log(this.addReturnDate)
  }

  getRouteParams() {
    this.activatedRoute.params.subscribe(p => {
      (this.carId = p['carId']),
        (this.carName = p['carName']),
        (this.brandName = p['brandName']),
        (this.colorName = p['colorName']),
        (this.modelYear = p['modelYear']),
        (this.dailyPrice = p['dailyPrice']),
        (this.description = p['description']),
        (this.imagePath = p['imagePath']);
    });
  }

  getRentalById(carId: number) {
    this.rentalService.geyRentalById(carId).subscribe((res) => {
      this.rental = res.data;
      this.dataLoaded = true;
    });
  }

  addRental() {
    this.toastrService.info("Eklendi")
    this.rentalAdd.carId = this.carId
    this.rentalAdd.customerId = 1
    this.rentalAdd.rentDate = this.newRentDate.toISOString()
    this.rentalAdd.returnDate = this.addReturnDate
    this.rentalService.addRental(this.rentalAdd).subscribe((res) => {
      console.log("eklendi" + res.message)
    }, err => {
      console.log(err)
    })
  }
}
