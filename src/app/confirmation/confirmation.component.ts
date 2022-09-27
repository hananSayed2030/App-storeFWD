import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  fullName: String = '';
  finalPrice: number = 0;
  
  constructor(private ProductDataService: ProductDataService) {}

  ngOnInit(): void {
   this.fullName= this.ProductDataService.getFullName();
   this.finalPrice=  this.ProductDataService.getTotalPrice();
  }
  onSubmit() {
    alert(
      'Thank You  For Using our shopping Site ' 
       
    );
  }
 
  
}
