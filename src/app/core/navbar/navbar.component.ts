import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oreon-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private showShoppingCartMenu: boolean;

  constructor() { }

  ngOnInit() {
  }

  onToggleShoppingCart() {
    console.log('Toggled menu!');
    this.showShoppingCartMenu = !this.showShoppingCartMenu;
  }
}
