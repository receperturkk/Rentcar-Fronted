import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{
  customers : Customer[]=[]
  dataLoaded:boolean=false

  constructor(private customerService : CustomerService) {  }
  ngOnInit(): void {
    this.getCustomers()
  }
  getCustomers() {
    this.customerService.getCustomers().subscribe((res)=>{
      this.customers = res.data
      this.dataLoaded = true
    })
  }

}
