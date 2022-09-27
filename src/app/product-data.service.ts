import { Injectable } from '@angular/core';
import { product } from './Models/product';
import { observable, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  productList: any;
  currentSelectedItem: product[] = [];
  public productSelected: product[] = [];
  constructor(private http: HttpClient) {
    this.getProductList;
  }
  //not used just traial but  i have no global service for service (GF Or Tomcat )
  getProducts(): Observable<product[]> {
    return this.http.get<product[]>(
      'Type my URL of Web service' //like this  https/jsonplaceholder.typicdoe.com/product?_limit=8
    );
  }
  //not used
  getProductList() {
    return this.productList;
  }
  //
  addToCart(product: any) {
    this.productSelected.push(product);
    console.log('selected item' + this.productSelected[0].name);

    return this.productSelected;
  }
  getCurrentSelectedItem() {
    return this.currentSelectedItem;
  }
  removeSelectedItem(product: any) {
    const index: number = this.productSelected.indexOf(product);
    if (index !== -1) {
      this.productSelected.splice(index, 1);
    }
    return this.productSelected;
  }
  setCurrentSelectedItem(product: any) {
    this.currentSelectedItem.pop();
    this.currentSelectedItem.push(product);
  }
  displayProductDetails() {
    return this.productSelected;
  }
  fullName: string = '';
  totalPrice: number = 0;
  setConfirmationData(name: any, finalPrice: any) {
    this.fullName = name;
    this.totalPrice = finalPrice;
  }
  getFullName() {
    return this.fullName;
  }
  getTotalPrice() {
    return this.totalPrice;
  }
}
