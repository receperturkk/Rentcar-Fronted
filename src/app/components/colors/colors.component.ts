import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import * as QueryString from 'qs';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css'],
})
export class ColorsComponent implements OnInit {
  colors: Color[] = [];
  dataLoaded: boolean = false;
  currentColor : Color;
  root : string;
  colorFilterText="";

  constructor(
    private colorServcie: ColorService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getColors()
  }

  getColors(){
    this.activatedRoute.params.subscribe((p)=>{
      if(p["brandId"]){
        this.getColorsByBrandId(p["brandId"])
      }else{
        this.getAllColors()
      }
    })
  }

  getAllColors() {
    this.colorServcie.getColors().subscribe((res) => {
      this.colors = res.data;
      this.dataLoaded = true;
    });
  }

  getColorsByBrandId(brandId:number){
    this.colorServcie.getColorsByBrandId(brandId).subscribe((res) => {
      this.colors = res.data;
      this.dataLoaded = true;
    });
  }

  routerAddParam(colorId:number){
    this.activatedRoute.params.subscribe((p)=>{
      if(p["brandId"]){
        if (!colorId) {
          return this.router.navigateByUrl(("/cars/brand/"+p["brandId"]).toString());
        }
        return this.router.navigateByUrl(("/cars/brand/"+p["brandId"]+"/color/"+colorId).toString());
      }else{
        if(!colorId){
        return this.router.navigateByUrl(("/cars").toString())
        }
        return this.router.navigateByUrl(("/cars/color/"+colorId).toString())
      }
    })
  }

  //w-1/3 text-left py-3 px-4 bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer
  setCurrentColor(color: Color) {
    this.currentColor = color;
  }

  getCurrentColorClass(color: Color) {
    if (color == this.currentColor) {
      return 'w-1/3 text-left py-3 px-4 bg-gray-800 text-white hover:bg-gray-800 hover:text-white cursor-pointer';
    } else {
      return 'w-1/3 text-left py-3 px-4 bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer';
    }
  }

  getAllColorClass() {
    if (!this.currentColor) {
      return 'w-1/3 text-left py-3 px-4 bg-gray-800 text-white hover:bg-gray-800 hover:text-white cursor-pointer';
    } else {
      return 'w-1/3 text-left py-3 px-4 bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer ';
    }
  }
}
