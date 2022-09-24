//Auther Hanan Sayed
//Date 20-9-2022
//Purpose : open store page  with items for user to select and add to cart
import { Component, OnInit, Input, Output } from '@angular/core';
//import servcie for use functons (get store data , add item to card )
import { ProductDataService } from '../product-data.service';
import { CartComponent } from '../cart/cart.component';
import { product } from '../Models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: product[] = [];
  selectedItems: product[] = [];
  // hanan:String="HIIIIIIIIII" ;
  totalPrice: number = 0.0;
  //  @Input() selectedCartList!:  CartComponent ;
  //call service to display all store item
  constructor(private ProductDataService: ProductDataService) {}

  ngOnInit(): void {
    //call store items data for user from service
    this.productList = this.ProductDataService.getProductList();
    // console.log('Hanan ', this.productList.length);
  }
  onClick(selectedItem: product) {
    //Call Add to cart function when click on button Add to cart
    alert('Added Product  ' + selectedItem.name + ' Your Cart ');
    //fill selected items in array
    // this.selectedCartList = this.ProductDataService.addToCart(selectedItem);
    this.selectedItems = this.ProductDataService.addToCart(selectedItem);


    // this.selectedCartList =  this.selectedItems  ;
    //Sum prices each time select new item for add
    this.totalPrice += selectedItem.price;
    //check that list fill each time add to cart
    console.log(
      'final >>>' + this.selectedItems)
  }
  reciever(event: [any]) {
    console.log('pass to Child ' + event.length);
  }
}
