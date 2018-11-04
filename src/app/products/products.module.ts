import {NgModule} from '@angular/core';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductListItemComponent} from './product-list/product-list-item/product-list-item.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [ProductListComponent, ProductListItemComponent],
  imports: [
    SharedModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
