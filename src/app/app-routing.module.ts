import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './components/cars/cars.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ColorsComponent } from './components/colors/colors.component';
import { CustomersComponent } from './components/customers/customers.component';
import { RentalsComponent } from './components/rentals/rentals.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { CarsAddComponent } from './components/cars-add/cars-add.component';

const routes: Routes = [
  {path:'',redirectTo:'cars',pathMatch:'full'},
  {path:'cars',component: CarsComponent},
  // {path:'cars/add',component: CarsAddComponent},
  {path:'cars/brand/:brandId',component: CarsComponent},
  {path:'cars/brand/:brandId/color/:colorId',component: CarsComponent},
  {path:'cars/brand/:brandId/color/:colorId&:colorId2',component: CarsComponent},
  {path:'cars/color/:colorId',component: CarsComponent},
  {path:'car-detail/:carId',component:CarDetailComponent},
  {path:'colors',component: ColorsComponent},
  {path:'customers',component: CustomersComponent},
  {path:'brands',component: BrandsComponent},
  {path:'rentals',component: RentalsComponent},
  {path:'rental-add/:carId/:carName/:brandName/:colorName/:modelYear/:dailyPrice/:description/:imagePath',component: RentalAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
