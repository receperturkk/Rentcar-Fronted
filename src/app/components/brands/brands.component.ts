import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent implements OnInit {
  brands: Brand[] = [];
  dataLoaded: boolean = false;
  brandFilterText="";

  constructor(private brandService:BrandService,private activatedRoute:ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe((res)=>{
      this.brands = res.data
      this.dataLoaded = true
    });
  }

  
}
