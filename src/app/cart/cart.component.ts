import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { product } from '../Models/product';
import { ProductDataService } from '../product-data.service';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input() selectedItems!: product[];
  @Output() xx = new EventEmitter();
  selectedCartList: any[] = [];
  totalPrice:number=0;
  fullName: String = '';
  adress: String = '';
  creditCardNumber: String = '';
  //in case use service call
  constructor(private serviceId: ProductDataService) {}
  // constructor() {}

  ngOnInit(): void {
    //output
    // this.xx.emit(this.selectedCartList);
    // console.log('input>>read>>>' + this.selectedItems.hanan);
    //service
    this.selectedItems;
    this.selectedCartList = this.serviceId.displayProductDetails();
    for (let i = 0; i < this.selectedCartList.length; i++) {
    this.totalPrice+=  this.selectedCartList[i].price;
    }
      //from input
      //this.selectedCartList = this.productInts.selectedItems ;

    //  console.log('selected item no' + this.selectedItems.selectedItems[0].name);
    // console.log('service ' + this.selectedCartList.length);
  }
  onSubmit() {
    window.alert('Thank You ${this.fullName} For Using our shopping Site ');
  }
  submitForm() {
    window.alert('Thank You ${this.fullName} For Using our shopping Site ');
  }
}
