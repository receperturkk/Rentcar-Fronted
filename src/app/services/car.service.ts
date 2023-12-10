import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { CarAdd } from '../models/carAdd';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44322/api/"
  constructor(private http : HttpClient) { }

  getCarDetails():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"cars/getcardetails"
    return this.http.get<ListResponseModel<Car>>(newPath)
  }

  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"Cars/getcardetailsbycarid?carId="+carId;
    return this.http.get<ListResponseModel<Car>>(newPath)
  }

  getCarDetailByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"cars/getcardetailsbybrandid?brandId="+brandId;
    return this.http.get<ListResponseModel<Car>>(newPath)
  }

  getCarDetailByColorId(colordId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"cars/getcardetailsbycolorid?colorId="+colordId;
    return this.http.get<ListResponseModel<Car>>(newPath)
  }

  getCarDetailByFilter(brandId:number,colordId:number):Observable<ListResponseModel<Car>>{
    let newPath= this.apiUrl+"cars/getcardetailsbyfilter?brandId="+brandId+"&colorId="+colordId;
    return this.http.get<ListResponseModel<Car>>(newPath)
  }

  add(carAdd:CarAdd):Observable<ResponseModel>{
    let newPath = this.apiUrl+"cars/add"
    return this.http.post<ResponseModel>(newPath,carAdd)
  }
}
