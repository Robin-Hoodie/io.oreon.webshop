import { Component, OnInit } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'oreon-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor() { }

  ngOnInit() {
    this.products = [
      {name: 'Football', description: 'To play football with', imagePath: 'https://goo.gl/7CFeiE'},
      {name: 'Ducky', description: 'To put in the bath', imagePath: 'https://goo.gl/bnuvsP'},
      {name: 'Coffee machine', description: 'Yuck!', imagePath: 'https://goo.gl/7TNiny'}
    ]
  }

}
