import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../product';

@Component({
  selector: 'oreon-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
