import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetail } from '../models/rentalDetail';
import { Rental } from '../models/rental';
import { SingleResponseModel } from '../models/singleResponseModel';
import { JsonPipe } from '@angular/common';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = "https://localhost:44322/api/"

  constructor(private http:HttpClient) { }

  getRentalDetails():Observable<ListResponseModel<RentalDetail>>{
    let newPath = this.apiUrl+"rentals/getrentaldetails"
    return this.http.get<ListResponseModel<RentalDetail>>(newPath)
  }

  geyRentalById(carId:number):Observable<SingleResponseModel<Rental>>{
    let newPath = this.apiUrl+"rentals/getbyid?id="+carId
    return this.http.get<SingleResponseModel<Rental>>(newPath)
  }

  addRental(rentalAdd:Rental){
    let newPath = this.apiUrl+"rentals/add"
    
    return this.http.post<ResponseModel>(newPath,rentalAdd)
  }
}
