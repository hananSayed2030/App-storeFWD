import { Component, OnInit, Input } from '@angular/core';
import { product } from '../Models/product';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-product-list-detail',
  templateUrl: './product-list-detail.component.html',
  styleUrls: ['./product-list-detail.component.css'],
})
export class ProductListDetailComponent implements OnInit {
  @Input() selectedItemDetails!: product[];
  selectedItem:product[]=[];
  constructor(private ProductDataService: ProductDataService) {}

  ngOnInit(): void {
    this.selectedItemDetails = this.ProductDataService.getCurrentSelectedItem();
  }

  onClick(selectedItem: product) {
    this.ProductDataService.addToCart(selectedItem);
    alert('Added Product  ' + selectedItem.name + ' Your Cart ');
  }
 
}
