import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'oreon-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  toggleShoppingCart: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

}
