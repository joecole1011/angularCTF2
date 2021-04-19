import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  
  isSelected?: boolean ;

  @Input()
  product: Product;
  

  @Output()
  // OnSelected: EventEmitter<Product> = new EventEmitter();//ViewChild
  OnSelected: EventEmitter<ProductItemComponent> = new EventEmitter();
  
  

  constructor() { }

  ngOnInit(): void {  }

  select(){
    // this.OnSelected.emit(this.product);//ViewChild
    this.OnSelected.emit(this);    
  }

}
