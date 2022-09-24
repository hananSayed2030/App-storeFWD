import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output ,EventEmitter ,Input} from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { ProductListComponent } from '../product-list/product-list.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  
  //  @Input() selectedItems!: ProductListComponent;
  @Output() xx = new EventEmitter();
  selectedCartList: any[] = [];
  //in case use service call
  constructor(private selectedItemList: ProductDataService) {}
  // constructor() {}

  ngOnInit(): void {
    //output
    // this.xx.emit(this.selectedCartList);
    // console.log('input>>read>>>' + this.selectedItems.hanan);
    //service
     this.selectedCartList = this.selectedItemList.displayProductDetails();

    //from input
    // this.selectedCartList = this.selectedItems;

    //  console.log('selected item no' + this.selectedItems.selectedItems[0].name);
    // console.log('service ' + this.selectedCartList.length);
  }
}
