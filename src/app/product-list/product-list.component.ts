//Auther Hanan Sayed
//Date 20-9-2022
//Purpose : open store page  with items for user to select and add to cart
import { Component, OnInit, Input, Output } from '@angular/core';
//import servcie for use functons (get store data , add item to card )
import { ProductDataService } from '../product-data.service';
import { CartComponent } from '../cart/cart.component';
import { product } from '../Models/product';
//read data from json file direct act as call web service url and return json data from path models/data.json
import data from '../Models/data.json';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  //this code allaw to read json data from my application direct
  title = 'json-file-read-angular';
  public productList: {
    id: number;
    name: String;
    price: number;
    url: String;
    description: String;
  }[] = data;

  productId:number=0;
  // productList: product[] = [];
  selectedItems: product[] = [];
  selectedItemDetails: product[]= [] ;
  totalPrice: number = 0.0;
  //  @Input() selectedCartList!:  CartComponent ;
  //call service to display all store item
  constructor(private ProductDataService: ProductDataService) {}

  ngOnInit(): void {
    //call store items data for user from service with fixed data
    //  this.productList = this.ProductDataService.getProductList();
    //read from  web service http service
    // this.ProductDataService.getProducts().subscribe((res) => {
    //   for (let i = 1; i <= res.length; i++) {
    //     const product = res[i];
    //   }
    //   this.productList = res;
    // });
    // console.log('Hanan ', this.productList.length);
  }
  onImageClick(selectedItemDetails: product){
    this.productId=selectedItemDetails.id;
    this.ProductDataService.setCurrentSelectedItem(selectedItemDetails);
    console.log('image zzzzzzzzzzz >>>' + selectedItemDetails.id);
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
    console.log('final >>>' + this.selectedItems);
  }
  reciever(event: [any]) {
    console.log('pass to Child ' + event.length);
  }
}
