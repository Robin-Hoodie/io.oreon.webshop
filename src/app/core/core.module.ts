import {NgModule} from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import {CheckoutComponent} from './icons/checkout/checkout.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [NavbarComponent, CheckoutComponent],
  imports: [
    SharedModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule {
}
