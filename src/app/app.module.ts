import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CarsComponent } from './components/cars/cars.component';
import { HttpClientModule } from '@angular/common/http';
import { BrandsComponent } from './components/brands/brands.component';
import { ColorsComponent } from './components/colors/colors.component';
import { CustomersComponent } from './components/customers/customers.component';
import { RentalsComponent } from './components/rentals/rentals.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarFilterPipePipe } from './pipes/car-filter-pipe.pipe';
import { ColorFilterPipePipe } from './pipes/color-filter-pipe.pipe';
import { BrandFilterPipePipe } from './pipes/brand-filter-pipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarsAddComponent } from './components/cars-add/cars-add.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarsComponent,
    BrandsComponent,
    ColorsComponent,
    CustomersComponent,
    RentalsComponent,
    CarDetailComponent,
    CarFilterPipePipe,
    ColorFilterPipePipe,
    BrandFilterPipePipe,
    RentalAddComponent,
    CarsAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass: 'toast-bottom-right',
      progressBar:true,
      newestOnTop:true,
      closeButton:true
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
