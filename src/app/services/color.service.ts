import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { HtmlParser } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = "https://localhost:44322/api/"
  constructor(private http:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl+"colors/getall"
    return this.http.get<ListResponseModel<Color>>(newPath);
  }

  getColorsByBrandId(brandId:number):Observable<ListResponseModel<Color>>{
    let newPath=this.apiUrl+"colors/getcolorsbybrandid?brandId="+brandId
    return this.http.get<ListResponseModel<Color>>(newPath)
  }
}
