import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validator,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars-add',
  templateUrl: './cars-add.component.html',
  styleUrls: ['./cars-add.component.css'],
})
export class CarsAddComponent implements OnInit {
  carAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private toastrService: ToastrService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.createAddCarFrom();
  }

  createAddCarFrom() {
    this.carAddForm = this.formBuilder.group({
      carName: ['', Validators.required],
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  add() {
    if(this.carAddForm.valid){
      let carModel = Object.assign({},this.carAddForm.value);
      this.carService.add(carModel).subscribe((res)=>{
        console.log(res)
        this.toastrService.success(res.message,"Başarılı")
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      },responseError=>{
        if (responseError.error.Errors && responseError.error.Errors.length > 0) {
          console.log(responseError.error.Errors)
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, 'Doğrulama Hatası');
          }
        }else{
          this.toastrService.error(responseError.error.Message)
        }
        console.log(responseError)
      })
    } else {
      this.toastrService.error('Formunuz eksik', 'Hata');
    }
  }
}
