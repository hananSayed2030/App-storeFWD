import { outputAst } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { product } from '../Models/product';
import { ProductDataService } from '../product-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input() selectedItems!: product[];
  selectedCartList: any[] = [];
  totalPrice: number = 0;
  fullName: String = '';
  adress: String = '';
  creditCardNumber: String = '';
  //in case use service call
  constructor(private serviceId: ProductDataService, private router: Router) {}
  // constructor() {}

  ngOnInit(): void {
    //service
    this.selectedItems;
    this.selectedCartList = this.serviceId.displayProductDetails();
    this.calculateTotalPrice();
  }
  calculateTotalPrice() {
    this.totalPrice = 0;
    for (let i = 0; i < this.selectedCartList.length; i++) {
      this.totalPrice += Math.round(this.selectedCartList[i].price);
    }
  }

  submitForm() {
    fullName: this.fullName;
    totalPrice: this.totalPrice;

    this.serviceId.setConfirmationData(this.fullName, this.totalPrice);

    this.fullName = '';
    this.adress = '';
    this.creditCardNumber = '';
    this.redirect();
  }
  onRemove(selectedItem: product) {
    alert('selected item ' + selectedItem.name + '  will be removed');
    this.serviceId.removeSelectedItem(selectedItem);
    this.calculateTotalPrice();
    this.ngOnInit();
  }

  redirect() {
    if (this.totalPrice == 0) {
      alert('No Items Selected !!!');
      return;
    }

    window.alert(
      'Thank You Hanan  For Using our shopping Site ' +
        this.fullName +
        this.adress +
        this.creditCardNumber
    );
    this.router.navigateByUrl('confirmation');
  }
}
